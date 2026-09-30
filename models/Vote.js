const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
    voterId: {
        type: String,
        required: true,
        unique: true
    },
    voterName: {
        type: String,
        required: true
    },
    party: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    },
    previousHash: {
        type: String,
        required: true
    },
    currentHash: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Vote", voteSchema);