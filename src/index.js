import { childAppender } from "../util";
import "./style.css";

// weather icons

import sunny from "./icons/sunny.svg";
import waterDrop from "./icons/water_drop.svg";
import humidityIcon from "./icons/humidity.svg";
import pressureIcon from "./icons/pressure.svg";
import visibilityIcon from "./icons/visibility.svg";
import windSpeedIcon from "./icons/air.svg";

function weatherApp() {
    async function getWeatherData(local) {
        const publicKey = "CWZPRKA3QEL8A7U7HNW4HGMC6";
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${local}?key=${publicKey}&elements=%2Baqius`;

        try {
            const resultData = await fetch(url, {
                mode: "cors",
            });

            if (!resultData.ok) {
                throw new error(
                    `Error Status response code ${resultData.status}`
                );
            }

            const data = await resultData.json();

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    function getDayByDate(date) {
        const currentDate = new Date(date);

        return currentDate.getDay();
    }

    function getDayOfTheWeek(day) {
        let dayString = "";

        switch (day) {
            case 0:
                dayString = "Monday";
                break;
            case 1:
                dayString = "Tuesday";
                break;
            case 2:
                dayString = "Wednesday";
                break;
            case 3:
                dayString = "Thrusday";
                break;
            case 4:
                dayString = "Friday";
                break;
            case 5:
                dayString = "Saturday";
                break;
            case 6:
                dayString = "Sunday";
                break;
            default:
                dayString = "Unknown";
        }

        return dayString;
    }

    function getWeekWeatherData(data) {
        const days = {};

        for (let i = 1; i <= 6; i++) {
            const current = data.days[i];

            const dayOfTheWeek = getDayOfTheWeek(
                getDayByDate(current.datetime)
            );

            days[dayOfTheWeek] = current;
        }

        return days;
    }

    function formatWeatherTime(data) {
        // split the time and convert it to a int
        const time = Number(data.split(":")[0]);

        return time <= 12 ? time + " AM" : time - 12 + " PM";
    }

    return {
        getWeatherData,
        getDayByDate,
        getDayOfTheWeek,
        getWeekWeatherData,
        formatWeatherTime,
    };
}

function weatherAppController() {
    const weather = weatherApp();

    async function getWeatherData(location) {
        const data = await weather.getWeatherData(location);

        console.log(data);

        return data;
    }

    function formatTime(time) {
        return weather.formatWeatherTime(time);
    }
    return {
        getWeatherData,
        formatTime,
    };
}

async function weatherScreenController() {
    const body = document.querySelector("body");

    const weatherController = weatherAppController();

    let currentLocation = "bronx";

    const weatherData = await weatherController.getWeatherData(currentLocation);

    function displayWeatherDetails(data) {
        const currentWeather = data.days[0];

        const detailsHolder = document.createElement("section");
        detailsHolder.classList.add("weather_container");

        const temperaturDetails = temperatureComponent(currentWeather);

        const weatherIcon = currentWeatherIcon(currentWeather);

        childAppender(detailsHolder, temperaturDetails, weatherIcon);

        return detailsHolder;
    }

    // temperature display function

    function temperatureComponent(data) {
        const temperateDetails = document.createElement("div");
        temperateDetails.classList.add("temperature_details");

        const location = document.createElement("h1");
        location.textContent = weatherData.address;

        const temperature = document.createElement("h2");
        temperature.textContent = data.temp;

        const description = document.createElement("p");
        description.textContent = data.description;

        childAppender(temperateDetails, location, temperature, description);

        return temperateDetails;
    }

    // current trend details

    function currentWeatherIcon(data) {
        const icon = document.createElement("img");
        icon.src = sunny;

        return icon;
    }

    // the current day weather by hour
    function displayCurrentWeatherTrends(data) {
        const currentDay = data.days[0];

        const weatherTrendContainer = document.createElement("section");
        weatherTrendContainer.classList.add("weather_trend_container");

        const weatherTime = createTimeList(currentDay);

        const todayWeatherTrend = weatherTrendByHour(currentDay);

        const rainPercentage = rainPercetageByHour(currentDay);

        childAppender(
            weatherTrendContainer,
            weatherTime,
            todayWeatherTrend,
            rainPercentage
        );

        return weatherTrendContainer;
    }

    function createTimeList(data) {
        const timeList = data.hours;

        const timeContainer = document.createElement("div");
        timeContainer.classList.add("time_container");

        for (const time of timeList) {
            const h4 = document.createElement("h4");
            h4.textContent = weatherController.formatTime(time.datetime);

            timeContainer.appendChild(h4);
        }

        return timeContainer;
    }

    // display the curve in precipitation of the weather

    function weatherTrendByHour(data) {
        const canvas = document.createElement("canvas");
        canvas.id = "myCanvas";
        canvas.width = "200";
        canvas.height = "200";

        return canvas;
    }

    // display the weather precipitation percentage and icon

    function rainPercetageByHour(data) {
        const timeList = data.hours;

        const percentageContainer = document.createElement("div");
        percentageContainer.classList.add("percentage_container");

        for (const time of timeList) {
            const percentageHolder = document.createElement("div");
            percentageHolder.classList.add("percentage_holder");

            const text = document.createElement("p");
            text.textContent = time.precip + "%";

            const waterIcon = document.createElement("img");
            waterIcon.src = waterDrop;

            childAppender(percentageHolder, waterIcon, text);

            percentageContainer.appendChild(percentageHolder);
        }

        return percentageContainer;
    }

    function displayWeatherConditions(data) {
        const container = document.createElement("div");
        console.log(data);

        const uvIndex = weatherConditionDetails(
            sunny,
            "Uv Index",
            data.uvindex
        );

        const windSpeed = weatherConditionDetails(
            windSpeedIcon,
            "Wind Speed",
            data.windspeed
        );

        childAppender(container, uvIndex, windSpeed);

        return container;
    }

    function weatherConditionDetails(icon, text, data) {
        const container = document.createElement("div");

        const topBar = document.createElement("div");

        const img = document.createElement("img");
        img.src = icon;

        const title = document.createElement("h3");
        title.textContent = text;

        childAppender(topBar, img, title);

        const info = document.createElement("h4");

        switch (text.toLowerCase()) {
            case "uv index":
                if (data <= 2) {
                    info.textContent = "Low";
                } else if (data >= 3 && data <= 5) {
                    info.textContent = "Moderate";
                } else {
                    info.textContent = "High";
                }

                break;
            case "wind speed":
                info.textContent = data + " Mph";
                break;
            case "humidity":
                info.textContent = data + "%";
                break;
            case "pressure":
                // convert milibars to inches by multiplying by 0.0295301
                info.textContent = data * 0.0295301 + "in";
                break;
            case "visibility":
                info.textContent = data;
                break;
            case "air quality":
                if (data < 50) {
                    info.textContent = "Good";
                } else if (data < 100) {
                    info.textContent = "Moderate";
                } else {
                    info.textContent = "Bad";
                }
                break;
        }

        childAppender(container, topBar, info);

        return container;
    }

    function displayDaysOfWeekWeather() {}

    function displaySunsetAndSunriseDetails() {}

    function displaySubSectionDetails(section) {}

    function buildWeatherAppScreen() {
        const details = displayWeatherDetails(weatherData);
        const weatherTrend = displayCurrentWeatherTrends(weatherData);
        const weatherConditions = displayWeatherConditions(
            weatherData.currentConditions
        );

        body.innerHTML = "";
        childAppender(body, details, weatherTrend, weatherConditions);
    }

    // buildWeatherAppScreen();
    return {
        buildWeatherAppScreen,
    };
}

weatherScreenController().then((data) => data.buildWeatherAppScreen());
