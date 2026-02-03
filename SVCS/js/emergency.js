const evStatusEl = document.getElementById("evStatus");
const evRouteEl = document.getElementById("evRoute");
const evPriorityEl = document.getElementById("evPriority");

const activateBtn = document.getElementById("activateEV");
const resetBtn = document.getElementById("resetEV");

// Emergency Vehicle State
const emergencyVehicle = {
    active: false,
    route: ["Zone A", "Zone B", "Zone C"],
    priority: false
};

// Update UI
function updateEmergencyUI() {
    evStatusEl.textContent = emergencyVehicle.active ? "ACTIVE" : "IDLE";
    evRouteEl.textContent = emergencyVehicle.active ? emergencyVehicle.route.join(" → ") : "None";
    evPriorityEl.textContent = emergencyVehicle.priority ? "ON" : "OFF";
}

// Activate Emergency Mode
activateBtn.addEventListener("click", () => {
    emergencyVehicle.active = true;
    emergencyVehicle.priority = true;

    // Update Global System State
    if (typeof systemState !== "undefined") {
        systemState.emergency = true;
        systemState.incident = "Emergency Vehicle Active";
    }

    updateEmergencyUI();
});

// Reset System
resetBtn.addEventListener("click", () => {
    emergencyVehicle.active = false;
    emergencyVehicle.priority = false;

    if (typeof systemState !== "undefined") {
        systemState.emergency = false;
        systemState.incident = "None";
    }

    updateEmergencyUI();
});

updateEmergencyUI();
