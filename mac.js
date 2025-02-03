const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 4000; 


app.post("/collect-mac", (req, res) => {
    const data = req.body;

    fs.appendFileSync("mac_addresses.txt", JSON.stringify(data) + "\n");

    console.log("Received MAC Address:", data);
    res.json({ message: "MAC Address received successfully" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
