$(document).ready(function () {

    //Adjust text for Squadron Leader
    if ($(window).width() <= 509) {
        $(".squadron-leader").text("Squad Lead");
    } else if ($(window).width() > 991 && $(window).width() <= 1209) {
        $(".squadron-leader").text("");
    } else if ($(window).width() >= 1210 && $(window).width() <= 1529) {
        $(".squadron-leader").text("SL");
    } else if ($(window).width() >= 1530 && $(window).width() <= 1950) {
        $(".squadron-leader").text("Squad Lead");
    } else {
        $(".squadron-leader").text("Squadron Leader");
    }
});


$(window).resize(function () {
    //Adjust text for Squadron Leader
    if ($(window).width() <= 509) {
        $(".squadron-leader").text("Squad Lead");
    } else if ($(window).width() > 991 && $(window).width() <= 1209) {
        $(".squadron-leader").text("");
    } else if ($(window).width() >= 1210 && $(window).width() <= 1529) {
        $(".squadron-leader").text("SL");
    } else if ($(window).width() >= 1530 && $(window).width() <= 1950) {
        $(".squadron-leader").text("Squad Lead");
    } else {
        $(".squadron-leader").text("Squadron Leader");
    }
});