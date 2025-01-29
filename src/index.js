import { childAppender } from "../util";
import "./style.css";

// weather icons

import sunnyIcon from "./icons/sunny.svg";
import waterDrop from "./icons/water_drop.svg";
import humidityIcon from "./icons/humidity.svg";
import pressureIcon from "./icons/pressure.svg";
import visibilityIcon from "./icons/visibility.svg";
import windSpeedIcon from "./icons/air.svg";
import airWaveIcon from "./icons/air_wave.svg";
import fuggyIcon from "./icons/foggy.svg";
import rainShowerIcon from "./icons/rain_shower.svg";
import thunderstormIcon from "./icons/thunderstorm.svg";
import partyCloudyIcon from "./icons/partly_cloudy.svg";
import cloudyIcon from "./icons/clouds.svg";
import rainIcon from "./icons/rainy.svg";
import cloudyNightIcon from "./icons/cloudy_night.svg";

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
                dayString = "Thursday";
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

        for (let i = 1; i <= 7; i++) {
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
        getWeekWeather: weather.getWeekWeatherData,
    };
}

async function weatherScreenController() {
    const body = document.querySelector("body");

    const weatherController = weatherAppController();

    let currentLocation = "bronx";

    const weatherConditions = {
        Clear: sunnyIcon,
        "Partly Cloudy": partyCloudyIcon,
        "Mostly Cloudy": cloudyIcon,
        Fog: fuggyIcon,
        "Light Rain": rainIcon,
        Rain: rainIcon,
        "Heavy Rain": rainShowerIcon,
        Snow: sunnyIcon,
        Thunderstorms: thunderstormIcon,
        Windy: windSpeedIcon,
        Drizzle: rainIcon,
        "Freezing Rain": rainIcon,
        Mist: fuggyIcon,
    };

    const daysOfTheWeekList = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

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
        location.textContent = weatherData.resolvedAddress;

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
        icon.src = sunnyIcon;

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
            const percentageHolder = createPrecipicationElement(time);

            percentageContainer.appendChild(percentageHolder);
        }

        return percentageContainer;
    }

    function createPrecipicationElement(time) {
        const percentageHolder = document.createElement("div");
        percentageHolder.classList.add("percentage_holder");

        const text = document.createElement("p");
        text.textContent = time.precip + "%";

        const waterIcon = document.createElement("img");
        waterIcon.src = waterDrop;

        childAppender(percentageHolder, waterIcon, text);

        return percentageHolder;
    }

    function displayWeatherConditions(data) {
        const container = document.createElement("div");
        container.classList.add("weather_details_container");

        const uvIndex = weatherConditionDetails(
            sunnyIcon,
            "Uv Index",
            data.uvindex
        );

        const windSpeed = weatherConditionDetails(
            windSpeedIcon,
            "Wind Speed",
            data.windspeed
        );

        const humidity = weatherConditionDetails(
            humidityIcon,
            "Humidity",
            data.humidity
        );

        const pressure = weatherConditionDetails(
            pressureIcon,
            "Pressure",
            data.pressure
        );

        const visibility = weatherConditionDetails(
            visibilityIcon,
            "Visibility",
            data.visibility
        );

        const airQuality = weatherConditionDetails(
            airWaveIcon,
            "Air Quality",
            data.aqius
        );

        childAppender(
            container,
            uvIndex,
            windSpeed,
            humidity,
            pressure,
            visibility,
            airQuality
        );

        return container;
    }

    function weatherConditionDetails(icon, text, data) {
        const container = document.createElement("div");
        container.classList.add("details_container");

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
                info.textContent = (data * 0.0295301).toFixed(2) + " in";
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

    function displayDaysOfWeekWeather(data) {
        const container = document.createElement("section");
        container.classList.add("days_container");

        const weatherData = weatherController.getWeekWeather(data);

        const daysList = createWeekElement(weatherData);
        container.appendChild(daysList);

        return container;
    }

    function createWeekElement(data) {
        const list = document.createElement("ul");
        list.classList.add("week_list");

        console.log(data);

        for (const currentDay of daysOfTheWeekList) {
            const today = data[currentDay];

            const listItem = createWeekListItem(currentDay, today);

            list.appendChild(listItem);
        }

        return list;
    }

    function createWeekListItem(currentDay, data) {
        const li = document.createElement("li");

        const day = document.createElement("h4");
        day.textContent = currentDay;

        const precipitation = createPrecipicationElement(data);

        const conditions =
            weatherConditionDetails[data.conditions] || sunnyIcon;
        const conditionsImage = document.createElement("img");
        conditionsImage.src = conditions;

        const todaysLow = document.createElement("h4");
        todaysLow.textContent = data.tempmin;
        console.log(data.tempmin);

        const todaysHigh = document.createElement("h4");
        todaysHigh.textContent = data.tempmax;

        childAppender(
            li,
            day,
            precipitation,
            conditionsImage,
            todaysLow,
            todaysHigh
        );

        return li;
    }

    function displaySunsetAndSunriseDetails() {}

    function displaySubSectionDetails(section) {}

    function buildWeatherAppScreen() {
        const details = displayWeatherDetails(weatherData);
        const weatherTrend = displayCurrentWeatherTrends(weatherData);
        const weatherConditions = displayWeatherConditions(
            weatherData.currentConditions
        );

        const daysOfWeeks = displayDaysOfWeekWeather(weatherData);

        body.innerHTML = "";
        childAppender(
            body,
            details,
            weatherTrend,
            weatherConditions,
            daysOfWeeks
        );
    }

    // buildWeatherAppScreen();
    return {
        buildWeatherAppScreen,
    };
}

weatherScreenController().then((data) => data.buildWeatherAppScreen());
