function addMessage(type, text) {
    const messages = document.getElementById("messages");

    const wrapper = document.createElement("div");
    wrapper.className = `${type}-message`;

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = type === "user" ? "👤" : "⚡";

    const content = document.createElement("div");
    content.className = "message-content";
    content.textContent = text;

    wrapper.appendChild(avatar);
    wrapper.appendChild(content);

    messages.appendChild(wrapper);

    messages.parentElement.scrollTop =
        messages.parentElement.scrollHeight;
}

function setupUI() {
    const coresButton = document.getElementById("cores-btn");
    const coresPanel = document.getElementById("cores-panel");
    const closeCores = document.getElementById("close-cores");

    coresButton?.addEventListener("click", () => {
        coresPanel?.classList.remove("hidden");
    });

    closeCores?.addEventListener("click", () => {
        coresPanel?.classList.add("hidden");
    });

    const input = document.getElementById("user-input");

    input?.addEventListener("input", () => {
        input.style.height = "auto";
        input.style.height =
            Math.min(input.scrollHeight, 160) + "px";
    });
}

setupUI();
