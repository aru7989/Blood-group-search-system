function searchDonor() {
    let blood = document.getElementById("blood").value;
    let location = document.getElementById("location").value;

    let result = document.getElementById("result");

    if (blood === "" || location.trim() === "") {
        result.innerHTML = "Please select blood group and enter location!";
        result.style.color = "red";
    } 
    else {
        result.innerHTML =
            "Blood Group: " + blood +
            "<br>Location: " + location +
            "<br>Search Successful!";
        result.style.color = "green";
    }
}