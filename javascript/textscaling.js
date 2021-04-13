$(document).ready(function () {

    //Adjust text for Squadron Leader
    if ($(window).width() <= 509) {
        $(".squadron-leader").text("Squad Lead");
        $(".grid-subtitle-assignment").text("Wing");
        $(".grid-subtitle-name").text("Name");
        document.getElementById("google-iframe").width = "350";
    } 
    else if ($(window).width() > 510 && $(window).width() <= 990){
        document.getElementById("google-iframe").width = "450";
    }
    else if ($(window).width() > 991 && $(window).width() <= 1209) {
        $(".squadron-leader").text("SL");
        $(".grid-subtitle-assignment").text("Wing");
        $(".grid-subtitle-name").text("Name");
        document.getElementById("google-iframe").width = "700";
    } else if ($(window).width() >= 1210 && $(window).width() <= 1529) {
        $(".squadron-leader").text("SL");
        $(".grid-subtitle-assignment").text("Wing");
        $(".grid-subtitle-name").text("Name");
        document.getElementById("google-iframe").width = "700";
    } else if ($(window).width() >= 1530 && $(window).width() <= 1950) {
        $(".squadron-leader").text("Squad Lead");
        $(".grid-subtitle-assignment").text("Wing");
        $(".grid-subtitle-name").text("Name");
        document.getElementById("google-iframe").width = "700";
    } else {
        $(".squadron-leader").text("Squadron Leader");
        $(".grid-subtitle-assignment").text("Assignment");
        $(".grid-subtitle-name").text("Pilot Name");
        document.getElementById("google-iframe").width = "700";
    }
});


$(window).resize(function () {
    //Adjust text for Squadron Leader
    if ($(window).width() <= 509) {
        $(".squadron-leader").text("Squad Lead");
        $(".grid-subtitle-assignment").text("Wing");
        $(".grid-subtitle-name").text("Name");
        document.getElementById("google-iframe").width = "350";
    } 
    else if ($(window).width() > 510 && $(window).width() <= 990){
        document.getElementById("google-iframe").width = "450";
    }
    else if ($(window).width() > 991 && $(window).width() <= 1209) {
        $(".squadron-leader").text("SL");
        $(".grid-subtitle-assignment").text("Wing");
        $(".grid-subtitle-name").text("Name");
        document.getElementById("google-iframe").width = "700";
    } else if ($(window).width() >= 1210 && $(window).width() <= 1529) {
        $(".squadron-leader").text("SL");
        $(".grid-subtitle-assignment").text("Wing");
        $(".grid-subtitle-name").text("Name");
        document.getElementById("google-iframe").width = "700";
    } else if ($(window).width() >= 1530 && $(window).width() <= 1950) {
        $(".squadron-leader").text("Squad Lead");
        $(".grid-subtitle-assignment").text("Wing");
        $(".grid-subtitle-name").text("Name");
        document.getElementById("google-iframe").width = "700";
    } else {
        $(".squadron-leader").text("Squadron Leader");
        $(".grid-subtitle-assignment").text("Assignment");
        $(".grid-subtitle-name").text("Pilot Name");
        document.getElementById("google-iframe").width = "700";
    }
});



