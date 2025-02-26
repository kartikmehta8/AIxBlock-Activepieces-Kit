const { exec } = require("child_process");
const axios = require("axios");

const WEBHOOK_URL = "https://cloud.activepieces.com/api/v1/webhooks/dUmlBBQTPsk2vu6371l6u/sync";

exec("npm test --json --outputFile=test-results.json", async (error, stdout, stderr) => {
    
    let testResults = {
        details: stderr || error?.message || "Unknown error",
    };

    // DEBUG LOG.
    // console.log(JSON.stringify(testResults, null, 2));

    // // Prepare payload.
    const payload = {
        repository: "AIxBlock-AI-Agent",
        branch: "main",
        logs: JSON.stringify(testResults, null, 2)
    };

    // DEBUG LOG.
    // console.log(JSON.stringify(payload, null, 2));

    // Send results to ActivePieces Webhook.
    try {
        await axios.post(WEBHOOK_URL, payload);
    } catch (e) {
        // Can be done any other action to send data to AI Agent if this fails.  
    }
});
