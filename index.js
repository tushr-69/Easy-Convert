
	function convertToper() {
    var sgpa = document.getElementById("sgpa").value;
    if (sgpa != "") {
        var number = parseFloat(sgpa);
        document.getElementById("Percent").value = (number - 0.75)*10 + "%";
    } else {
        alert("Please enter something");
    }
}

function convertTosgpa() {
    var Percent2 = document.getElementById("Percent2").value;
    if (Percent2 != "") {
        var number = parseFloat(Percent2);
        document.getElementById("sgpa2").value = (number / 10) + 0.75;
    } else {
        alert("Please enter something");
    }
}
