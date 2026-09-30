function verifyVoter() {

    let voterId = document.getElementById("voterId").value.trim();
    let voterName = document.getElementById("voterName").value.trim();

    if (voterId === "" || voterName === "") {
        document.getElementById("message").innerHTML =
            "Please enter Voter ID and Voter Name.";
        document.getElementById("message").style.color = "red";
        return;
    }

    // Save voter details
    localStorage.setItem("voterId", voterId);
    localStorage.setItem("voterName", voterName);

    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML =
        "Voter Verified Successfully!";

    setTimeout(function () {
        window.location.href = "vote.html";
    }, 1000);
}