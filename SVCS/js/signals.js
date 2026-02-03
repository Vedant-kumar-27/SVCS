// Traffic Signals
const signals = [
    { id: "S1", light: "GREEN", mode: "NORMAL" },
    { id: "S2", light: "RED", mode: "NORMAL" },
    { id: "S3", light: "RED", mode: "NORMAL" }
];

const container = document.getElementById("signalContainer");

// Render Signals
function renderSignals() {
    container.innerHTML = "";
    signals.forEach(s => {
        const card = document.createElement("div");
        card.className = "signal-card";
        card.innerHTML = `
            <h3>${s.id}</h3>
            <div class="signal-light ${s.light.toLowerCase()}"></div>
            <div class="mode">Mode: ${s.mode}</div>
        `;
        container.appendChild(card);
    });
}

// Adaptive Logic
function handleCongestion() {
    signals.forEach(s => {
        s.mode = "ADAPTIVE";
        s.light = "GREEN";
    });
}

// Emergency Override Logic
function handleEmergency() {
    signals.forEach(s => {
        s.mode = "EMERGENCY";
        s.light = "GREEN";
    });
}

// Hook into system state
if (typeof systemState !== "undefined") {
    if (systemState.incident === "Traffic Congestion") {
        handleCongestion();
    }

    if (systemState.emergency === true) {
        handleEmergency();
    }
}

renderSignals();
