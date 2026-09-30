// Get voter details
let voterId = localStorage.getItem("voterId");
let voterName = localStorage.getItem("voterName");
let party = localStorage.getItem("vote_" + voterId);

// Display details
document.getElementById("voterId").innerHTML = voterId;
document.getElementById("voterName").innerHTML = voterName;
document.getElementById("party").innerHTML = party;

// Timestamp
let time = new Date().toLocaleString();
document.getElementById("time").innerHTML = time;

// Previous Hash
let previousHash = localStorage.getItem("lastHash");

if(previousHash == null){
    previousHash = "00000000000000000000000000000000";
}

// Simple Hash Generator
function generateHash(text){

    let hash = 0;

    for(let i=0;i<text.length;i++){

        hash = ((hash << 5) - hash) + text.charCodeAt(i);

        hash = hash & hash;

    }

    return Math.abs(hash).toString(16);

}

// Current Hash
let currentHash = generateHash(
    voterId +
    voterName +
    party +
    time +
    previousHash
);

document.getElementById("previousHash").value = previousHash;

document.getElementById("currentHash").value = currentHash;

// Save current hash for next block
localStorage.setItem("lastHash", currentHash);

// Save blockchain block
let blockchain = JSON.parse(localStorage.getItem("blockchain")) || [];

blockchain.push({

    voterId: voterId,
    voterName: voterName,
    party: party,
    timestamp: time,
    previousHash: previousHash,
    currentHash: currentHash

});

localStorage.setItem("blockchain", JSON.stringify(blockchain));

// Go to Result Page
function viewResult(){

    window.location.href = "result.html";

}