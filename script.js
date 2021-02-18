$(document).ready(function () {
    // Stops the form submit to reload the page
    $("#formPairs").submit(function (e) {
        e.preventDefault();
    });

    // Populating base and target dropdowns with currencies from API
    let baseDropdown = $("#base");
    let targetDropdown = $("#target");
    let pairDropdown = $(".pairDropdown");
    pairDropdown.empty();
    pairDropdown.append("<option selected='true' disabled>Choose Currency</option>");
    pairDropdown.prop("selectedIndex", 0);
    $.getJSON("https://www.cryptonator.com/api/currencies", function (data) {
        $.each(data.rows, function (i, item) {
            // Including only primary cyrrencies
            if ($.inArray("primary", item.statuses) != -1) {
                pairDropdown.append($("<option></option>").attr("value", item.code).text(item.name));
            }
        });
    });

    $("#submitBtn").click(function showRates() {
        let base = $("#base").val();
        let target = $("#target").val();
        // API link is formed by base and target values
        let url = "https://api.cryptonator.com/api/ticker/" + base + "-" + target;
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

// Add loading page 3sec before showing the page to give APIs time to load
// Add the calculating function
// Add switch sides function
