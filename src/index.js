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

        console.log(data);
        for (let i = 1; i <= 6; i++) {
            const current = data.days[i];
            console.log(data.days[i]);
            const dayOfTheWeek = weather.getDayOfTheWeek(
                weather.getDayByDate(current.datetime)
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

        const days = weather.getWeekWeatherData(data);

        console.log(days);
        return days;
    }

    return {
        getWeatherData,
    };
}

function weatherScreenController() {
    return {};
}

const weather = weatherApp();

const weatherController = weatherAppController();

weatherController.getWeatherData("bronx");
