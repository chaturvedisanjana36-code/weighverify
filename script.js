function showForm() {
    document.getElementById("verify").scrollIntoView({
        behavior: "smooth"
    });
}


document.getElementById("verificationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let applicationNumber =
        "LM" + Math.floor(100000 + Math.random() * 900000);

    document.getElementById("message").innerText =
        "Application submitted successfully! Your Application Number is "
        + applicationNumber;
});


function checkStatus() {

    let number = document.getElementById("applicationNo").value;

    if (number === "") {

        document.getElementById("statusMessage").innerText =
            "Please enter your application number.";

    } else {

        document.getElementById("statusMessage").innerText =
            "Application " + number +
            " is currently under verification.";
    }
}