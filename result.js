document.addEventListener("DOMContentLoaded", function () {

    // Get saved votes
    let votes = JSON.parse(localStorage.getItem("votes")) || {
        "Campus Unity Party": 0,
        "Students First Alliance": 0,
        "Future Leaders Party": 0,
        "Voice of Students": 0,
        "Campus Progress Party": 0
    };

    // Display votes
    document.getElementById("CUP").textContent =
        votes["Campus Unity Party"];

    document.getElementById("SFA").textContent =
        votes["Students First Alliance"];

    document.getElementById("FLP").textContent =
        votes["Future Leaders Party"];

    document.getElementById("VOS").textContent =
        votes["Voice of Students"];

    document.getElementById("CPP").textContent =
        votes["Campus Progress Party"];


    // Find winner
    let winner = "";
    let highestVotes = 0;

    for (let party in votes) {

        if (votes[party] > highestVotes) {
            highestVotes = votes[party];
            winner = party;
        }
    }

    if (highestVotes > 0) {
        document.getElementById("winner").textContent =
            "Winner: " + winner + " (" + highestVotes + " votes)";
    } else {
        document.getElementById("winner").textContent =
            "No votes have been cast yet.";
    }

});