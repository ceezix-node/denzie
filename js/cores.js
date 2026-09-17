const POWER_CORES = [
    {
        name: "Oracle",
        description: "Reasoning, analysis and strategic responses."
    },
    {
        name: "Architect",
        description: "Software architecture, engineering and system design."
    },
    {
        name: "Renegade",
        description: "Experimental ideas and unconventional approaches."
    },
    {
        name: "System-X",
        description: "Technical diagnostics and system operations."
    }
];

function loadCores() {
    const list = document.getElementById("cores-list");

    if (!list) return;

    list.innerHTML = POWER_CORES.map(core => `
        <div class="core">
            <strong>⚡ ${core.name}</strong>
            <span>${core.description}</span>
        </div>
    `).join("");
}

loadCores();
