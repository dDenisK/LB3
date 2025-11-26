function cliclButton() {
    var table = document.getElementById("table1");
    let date = "";
    let temperature = "";
    for (let i = 1; i < table.rows.length; i++) {
        let tempDate = table.rows[i].cells[0].innerHTML;
        let tempTemperature = table.rows[i].cells[1].innerHTML;
        if (tempTemperature > temperature) {
            temperature = tempTemperature;
            date = tempDate;
        }
    }
    alert("Date with the highest temperature: " + date + ", Temperature: " + temperature);
}