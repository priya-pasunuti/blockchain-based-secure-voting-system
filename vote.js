async function castVote() {

    const selectedParty = document.querySelector(
        'input[name="party"]:checked'
    );

    const message = document.getElementById("message");

    if (!selectedParty) {
        message.textContent = "Please select a party.";
        message.style.color = "red";
        return;
    }

    const party = selectedParty.value;

    try {

        const response = await fetch("/api/vote", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                voterId: localStorage.getItem("voterId") || "VOTER001",
                voterName: localStorage.getItem("username") || "User",
                party: party
            })
        });

        const data = await response.json();

        if (data.success) {

            message.textContent = "Vote saved successfully!";
            message.style.color = "green";

            setTimeout(() => {
                window.location.href = "result.html";
            }, 500);

        } else {

            message.textContent = "Vote could not be saved.";
            message.style.color = "red";
        }

    } catch (error) {

        console.error(error);

        message.textContent =
            "Server connection failed. Please start server.js.";

        message.style.color = "red";
    }
}