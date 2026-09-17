async function handleSend() {
    const input = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");

    if (!input) return;

    const message = input.value.trim();

    if (!message) return;

    input.value = "";
    input.style.height = "auto";

    addMessage("user", message);

    if (sendButton) {
        sendButton.disabled = true;
    }

    try {
        const response = await sendToDenzie(message);
        addMessage("ai", response);
    } catch (error) {
        addMessage("ai", `System error: ${error.message}`);
    } finally {
        if (sendButton) {
            sendButton.disabled = false;
        }

        input.focus();
    }
}

document.getElementById("send-btn")?.addEventListener(
    "click",
    handleSend
);

document.getElementById("user-input")?.addEventListener(
    "keydown",
    event => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    }
);

document.getElementById("attach-btn")?.addEventListener(
    "click",
    () => {
        addMessage(
            "ai",
            "Attachment system is ready for backend integration."
        );
    }
);
