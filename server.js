require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));
app.get("/", (req, res) => {
 res.sendFile(__dirname + "/index.html");
});
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

const voteSchema = new mongoose.Schema({
    voterId: String,
    voterName: String,
    party: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Vote = mongoose.model("Vote", voteSchema);

// Save vote
app.post("/api/vote", async (req, res) => {

    try {

        const { voterId, voterName, party } = req.body;

        const vote = new Vote({
            voterId,
            voterName,
            party
        });

        await vote.save();

        console.log("Vote saved:", vote);

        res.json({
            success: true,
            message: "Vote saved successfully"
        });

    } catch (error) {

        console.error("Error saving vote:", error);

        res.status(500).json({
            success: false,
            message: "Failed to save vote"
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});