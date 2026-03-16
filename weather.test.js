const fetch = require("node-fetch");

async function testWeatherAPI() {

    const city = "London";
    const apiKey = "demo";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("API request failed");
        }

        console.log("Weather API test passed");

    } catch (error) {

        console.error("Weather API test failed");
        process.exit(1);

    }

}

testWeatherAPI();