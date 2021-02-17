$(document).ready(function () {
    $("#formPairs").submit(function (e) {
        e.preventDefault();
    });
    $("#submitBtn").click(function showRates() {
        let base = $("#base").val();
        let target = $("#target").val();
        let url =
            "https://api.cryptonator.com/api/ticker/" + base + "-" + target;
        $.getJSON(url, function (data) {
            if (data.success) {
                $("#pairPrice")
                    .text("Price: " + parseFloat(data.ticker.price).toFixed(4))
                    .css("color", "green");
            } else {
                $("#pairPrice")
                    .text("Error: " + data.error)
                    .css("color", "red");
            }
        });
    });
});

// Populate dropdown with supported currencies (only status primary) limit shown items and search function API = https://www.cryptonator.com/api/currencies TUT = https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json
// Add the calculating function
// Add switch sides function
