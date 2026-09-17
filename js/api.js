async function sendToDenzie(message) {
    /*
     * API integration point.
     *
     * This static version does not expose a Gemini API key in browser
     * source code. Connect this function to a secure backend later.
     */

    return `DENZIE received:\n\n${message}\n\nAPI backend is not connected yet.`;
}
