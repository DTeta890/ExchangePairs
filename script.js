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
            $("#pairPrice").text(parseFloat(data.ticker.price).toFixed(2));
        });
    });
});
