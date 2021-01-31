$(function () {
    var $addrLink = $(".addrs > a");
    $addrLink.hover(function () {
        $(this)
            .css("color", "#FE924A");
    }, function () {
        $(this)
            .css("color", "#263747");
    });
});

$(function () {
    var $skill = $(".skill");
    $skill.hover(function () {
        $(this)
            .css("background-color", "lightgray");
    }, function () {
        $(this)
            .css("background-color", "#E9ECF3");
    });
});