import { childAppender } from "../util";
import "./style.css";

// weather icons

import sunny from "./icons/sunny.svg";

function weatherApp() {
    async function getWeatherData(local) {
        const publicKey = "CWZPRKA3QEL8A7U7HNW4HGMC6";
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${local}?key=${publicKey}`;

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

    return {
        getWeatherData,
        getDayByDate,
        getDayOfTheWeek,
        getWeekWeatherData,
    };
}

function weatherAppController() {
    const weather = weatherApp();

    async function getWeatherData(location) {
        const data = await weather.getWeatherData(location);

        console.log(data);

        return data;
    }

    return {
        getWeatherData,
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

    function displayCurrentWeatherTrends() {}

    function displayDaysOfWeekWeather() {}

    function displaySunsetAndSunriseDetails() {}

    function displaySubSectionDetails(section) {}

    function buildWeatherAppScreen() {
        const details = displayWeatherDetails(weatherData);

        body.textContent = "";
        childAppender(body, details);
    }

    // buildWeatherAppScreen();
    return {
        buildWeatherAppScreen,
    };
}

weatherScreenController().then((data) => data.buildWeatherAppScreen());
