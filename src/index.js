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

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        getWeatherData,
    };
}

function weatherAppController() {
    return {};
}

function weatherScreenController() {
    return {};
}

const weather = weatherApp();

weather.getWeatherData("bronx");
