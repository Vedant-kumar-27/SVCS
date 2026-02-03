const totalIncidentsEl = document.getElementById("totalIncidents");
const emergencyCountEl = document.getElementById("emergencyCount");
const responseTimeEl = document.getElementById("responseTime");
const eventLogEl = document.getElementById("eventLog");

let totalIncidents = 0;
let emergencyCount = 0;
let events = [];

// Track events from global state
if (typeof systemState !== "undefined") {

    if (systemState.incident !== "None") {
        totalIncidents++;
        events.push(`[${new Date().toLocaleTimeString()}] Incident: ${systemState.incident}`);
    }

    if (systemState.emergency === true) {
        emergencyCount++;
        events.push(`[${new Date().toLocaleTimeString()}] Emergency Mode Activated`);
    }
}

// Simulated Response Time
const simulatedResponseTime = Math.floor(Math.random() * 5) + 2 + " sec";

// Render Dashboard
function renderDashboard() {
    totalIncidentsEl.textContent = totalIncidents;
    emergencyCountEl.textContent = emergencyCount;
    responseTimeEl.textContent = simulatedResponseTime;

    eventLogEl.innerHTML = "";
    events.slice(-10).forEach(event => {
        const li = document.createElement("li");
        li.textContent = event;
        eventLogEl.appendChild(li);
    });
}

renderDashboard();
