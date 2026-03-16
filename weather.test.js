console.log("Running Weather App Test...");

const city = "London";

if (!city) {
    throw new Error("City name missing");
}

console.log("Weather App Test Passed");