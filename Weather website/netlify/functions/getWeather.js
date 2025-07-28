const fetch = require("node-fetch");

exports.handler = async function (event) {
    const API_KEY = process.env.WEATHER_API_KEY;

    const city = event.queryStringParameters.city || "Amman";
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Unable to fetch weather data" }),
        };
    }
};
