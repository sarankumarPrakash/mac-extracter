const os = require("os");
const axios = require("axios");

function getMacAddress() {
    const nets = os.networkInterfaces();
    for (const name in nets) {
        for (const net of nets[name]) {
            if (net.mac && net.mac !== "00:00:00:00:00:00") {
                return net.mac;
            }
        }
    }
    return "MAC Address Not Found";
}

async function sendMacAddress() {
    const data = {
        mac_address: getMacAddress(),
        device_name: os.hostname(),
        os_type: os.type(),
        os_version: os.release(),
    };

    try {
       
        await axios.post("https://your-subdomain.ngrok.io/collect-mac", data); 
        console.log("MAC Address sent successfully");
    } catch (error) {
        console.error("Error sending MAC Address:", error.message);
    }
}


sendMacAddress();
