var APIKey = "fd4wE1b8ZupiBRU_i-INo4OQGKELTHmdfL5O-6fP4H0";
var currentList;

$("#button-addon1").click(function () {
    $(".card").remove();
    var search = $("input").val();
    console.log(search);
    $.getJSON(
        "https://api.unsplash.com/search/photos?query=" + search + "&per_page=50&client_id=" + APIKey,
        function (data) {
            console.log(data);
            currentList = data.results;

            $.each(currentList, function (i, val) {
                var image = val;
                var imageURL = val.urls.regular;
                var imageLink = val.links.html;

                $(".card-list").append(
                    '<div class="card col-md-4"><a href="' + imageLink + '" target="_blank"><img class="card-image" src="' + imageURL + '"></a></div>')

                console.log("append");

            });
        }
    );
});

$("#portrait").click(function () {
    $(".card").remove();
    var search = $("input").val();
    console.log(search);

    $.each(currentList, function (i, val) {
        var image = val;
        var imageURL = val.urls.regular;
        var imageWidth = val.width;
        var imageHeight = val.height;
        var imageLink = val.links.html;

        if (imageHeight > imageWidth) {
            $(".card-list").append(
                '<div class="card col-md-4"><a href="' + imageLink + '" target="_blank"><img class="card-image" src="' + imageURL + '"></a></div>')
        }
        console.log("append");
    });

});

$("#landscape").click(function () {
    $(".card").remove();
    var search = $("input").val();
    console.log(search);

    $.each(currentList, function (i, val) {
        var image = val;
        var imageURL = val.urls.regular;
        var imageWidth = val.width;
        var imageHeight = val.height;
        var imageLink = val.links.html;

        if (imageHeight < imageWidth) {
            $(".card-list").append(
                '<div class="card col-md-4"><a href="' + imageLink + '" target="_blank"><img class="card-image" src="' + imageURL + '"></a></div>')
        }
        console.log("append");
    });

});