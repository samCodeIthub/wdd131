document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 10;
const windSpeed = 5;


function calculatewindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;;
}

let windChillresults;

if (temperature <= 10 && windSpeed > 4.8) {
    windChillresults = calculatewindChill(temperature, windSpeed).toFixed(2) +"°C";
    document.getElementById("windChill").textContent = windChillresults;
}
else {
    windChillresults="N/A"
}