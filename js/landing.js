$(function () {
    var text = $(".text");
    $(text).hover(function () {
        text.removeClass("hidden");
    }, function () {
        text.addClass("hidden");
    });
});