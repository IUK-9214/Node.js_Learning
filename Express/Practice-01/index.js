import express from "express";
import router from "./router/people.js";

const app = express();

// Mount router
app.use('/ppl', router);

// Test route
app.get("/", (req, res) => {
    res.json({ message: "Server is running ✅" });
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000 🚀");
});
