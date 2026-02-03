// Global System State
const systemState = {
    traffic: "Idle",
    incident: "None",
    emergency: false
};

// UI Elements
const trafficStateEl = document.getElementById("trafficState");
const incidentStateEl = document.getElementById("incidentState");
const emergencyStateEl = document.getElementById("emergencyState");

// Buttons
document.getElementById("btnNormal").addEventListener("click", () => {
    systemState.traffic = "Normal";
    systemState.incident = "None";
    systemState.emergency = false;
    updateStatus();
});

document.getElementById("btnAccident").addEventListener("click", () => {
    systemState.incident = "Accident Detected";
    updateStatus();
});

document.getElementById("btnCongestion").addEventListener("click", () => {
    systemState.incident = "Traffic Congestion";
    updateStatus();
});

document.getElementById("btnEmergency").addEventListener("click", () => {
    systemState.emergency = true;
    updateStatus();
});

// Status Update Function
function updateStatus() {
    trafficStateEl.textContent = systemState.traffic;
    incidentStateEl.textContent = systemState.incident;
    emergencyStateEl.textContent = systemState.emergency ? "ON" : "OFF";
}
