// // Simulated Vehicles
// const vehicles = [
//     { id: "V1", zone: "A", speed: 60, status: "NORMAL" },
//     { id: "V2", zone: "A", speed: 55, status: "NORMAL" },
//     { id: "V3", zone: "B", speed: 70, status: "NORMAL" },
//     { id: "V4", zone: "C", speed: 65, status: "NORMAL" }
// ];

// const container = document.getElementById("vehicleContainer");

// // Render Vehicles
// function renderVehicles() {
//     container.innerHTML = "";
//     vehicles.forEach(v => {
//         const card = document.createElement("div");
//         card.className = `vehicle-card ${v.status.toLowerCase()}`;
//         card.innerHTML = `
//             <h3>${v.id}</h3>
//             <p>Zone: ${v.zone}</p>
//             <p>Speed: ${v.speed} km/h</p>
//             <p>Status: ${v.status}</p>
//         `;
//         container.appendChild(card);
//     });
// }

// // V2V Alert Logic
// function handleAccident() {
//     vehicles.forEach(v => {
//         if (v.zone === "A") {
//             v.status = "ALERTED";
//             v.speed -= 20;
//         }
//     });
//     renderVehicles();
// }

// // Hook into global system state
// if (typeof systemState !== "undefined") {
//     if (systemState.incident === "Accident Detected") {
//         handleAccident();
//     }
// }

// renderVehicles();



// Simulated Vehicles
const vehicles = [
    { id: "V1", zone: "A", speed: 60, status: "NORMAL" },
    { id: "V2", zone: "A", speed: 55, status: "NORMAL" },
    { id: "V3", zone: "B", speed: 70, status: "NORMAL" },
    { id: "V4", zone: "C", speed: 65, status: "NORMAL" }
];

const container = document.getElementById("vehicleContainer");

// Render Vehicles
function renderVehicles() {
    container.innerHTML = "";
    vehicles.forEach(v => {
        const card = document.createElement("div");
        card.className = `vehicle-card ${v.status.toLowerCase()}`;
        card.innerHTML = `
            <h3>${v.id}</h3>
            <p>Zone: ${v.zone}</p>
            <p>Speed: ${v.speed} km/h</p>
            <p>Status: ${v.status}</p>
        `;
        container.appendChild(card);
    });
}

// Accident Alert Logic
function handleAccident() {
    vehicles.forEach(v => {
        if (v.zone === "A") {
            v.status = "ALERTED";
            v.speed -= 20;
        }
    });
}

// Emergency Vehicle Yield Logic
function handleEmergencyYield() {
    vehicles.forEach(v => {
        v.status = "SLOWED";
        v.speed -= 30;
    });
}

// Hook into Global System State
if (typeof systemState !== "undefined") {

    if (systemState.incident === "Accident Detected") {
        handleAccident();
    }

    if (systemState.emergency === true) {
        handleEmergencyYield();
    }
}

renderVehicles();
