$(document).ready(function () {

    //allied groups
    alliedFighterGroupA = "45th Fighter Air Regiment";
    alliedFighterGroupB = "16th Order Guard Fighter Air Regiment"
    alliedAttackerGroup = "190th Ground Attack Regiment"
    alliedBomberGroup = "134th Bomber Regiment";

    //allied planes
    alliedPlaneA = "i16";
    alliedPlaneB = "P40";
    alliedAttacker = "IL2m41"
    alliedBomber = "Pe2s35";

    //axis groups
    axisFighterGroupA = "II./Jg52";
    axisFighterGroupB = "22* Gruppo Autonomo C.T.";
    axisAttackerGroup = "III./St.G2"
    axisBomberGroup = "I./Zg1";

    //axis planes
    axisPlaneA = "Bf109E7";
    axisPlaneB = "Mc202";
    axisAttacker = "Ju87"
    axisBomber = "Ju88";

    eventDate = "October 9th, 2020";
    registration = false;


    function setFlightsAndPlanes() {
        document.getElementById("alliedfighterA").innerHTML = alliedFighterGroupA;
        document.getElementById("alliedfighterB").innerHTML = alliedFighterGroupB;
        document.getElementById("alliedattackergroup").innerHTML = alliedAttackerGroup;
        document.getElementById("alliedbombergroup").innerHTML = alliedBomberGroup;

        document.getElementById("alliedfighterA-plane").innerHTML = alliedPlaneA;
        document.getElementById("alliedfighterB-plane").innerHTML = alliedPlaneB;
        document.getElementById("alliedattacker-plane").innerHTML = alliedAttacker;
        document.getElementById("alliedbombergroup-plane").innerHTML = alliedBomber;

        document.getElementById("axisfighterA").innerHTML = axisFighterGroupA;
        document.getElementById("axisfighterB").innerHTML = axisFighterGroupB;
        document.getElementById("axisattackergroup").innerHTML = axisAttackerGroup;
        document.getElementById("axisbombergroup").innerHTML = axisBomberGroup;

        document.getElementById("axisfighterA-plane").innerHTML = axisPlaneA;
        document.getElementById("axisfighterB-plane").innerHTML = axisPlaneB;
        document.getElementById("axisattacker-plane").innerHTML = axisAttacker;
        document.getElementById("axisbombergroup-plane").innerHTML = axisBomber;
    }

    function toggleRegistration() {
        var d = new Date();
        var n = d.getDay()
        //0 = Sunday
        //1 = Monday
        //2 = Tuesday
        //3 = Wednesday
        //4 = Thursday
        //5 = Friday
        //6 = Saturday
        if (registration == false) {
            document.getElementById("registration-closed").style.display = "flex";
            document.getElementById("registration-opened").style.display = "none";
        } else {
            document.getElementById("registration-opened").style.display = "flex";
            document.getElementById("registration-closed").style.display = "none";
        }
    }

    function setEventDate() {
        document.getElementById("event-date0").innerHTML = eventDate;
        document.getElementById("event-date1").innerHTML = eventDate;
    }



    //Adjust text for Squadron Leader
    if ($(window).width() <= 509) {
        $(".squadron-leader").text("Squad Lead");
    }
    else if ($(window).width() > 991 && $(window).width() <= 1209) {
        $(".squadron-leader").text("");
    }
    else if ($(window).width() >= 1210 && $(window).width() <= 1529) {
        $(".squadron-leader").text("SL");
    }
    else if ($(window).width() >= 1530 && $(window).width() <= 1950) {
        $(".squadron-leader").text("Squad Lead");
    } 
    else {
        $(".squadron-leader").text("Squadron Leader");
    }
      
    //Adjust text for Flight Leader
    if ($(window).width() <= 509) {
        $(".flight-leader").text("Flight Lead");
    }
    else if ($(window).width() > 991 && $(window).width() <= 1209) {
        $(".flight-leader").text("");
    }
    else if ($(window).width() >= 1210 && $(window).width() <= 1529) {
        $(".flight-leader").text("FL");
    }
    else if ($(window).width() >= 1530 && $(window).width() <= 1950) {
        $(".flight-leader").text("Flight Lead");
    } 
    else {
        $(".flight-leader").text("Flight Leader");
    }



    setFlightsAndPlanes();
    toggleRegistration();
    setEventDate();
});

$(window).resize(function () {
    //Adjust text for Squadron Leader
    if ($(window).width() <= 509) {
        $(".squadron-leader").text("Squad Lead");
    }
    else if ($(window).width() > 991 && $(window).width() <= 1209) {
        $(".squadron-leader").text("");
    }
    else if ($(window).width() >= 1210 && $(window).width() <= 1529) {
        $(".squadron-leader").text("SL");
    }
    else if ($(window).width() >= 1530 && $(window).width() <= 1950) {
        $(".squadron-leader").text("Squad Lead");
    }
    else {
        $(".squadron-leader").text("Squadron Leader");
    }

    //Adjust text for Flight Leader
    if ($(window).width() <= 509) {
        $(".flight-leader").text("Flight Lead");
    }
    else if ($(window).width() > 991 && $(window).width() <= 1209) {
        $(".flight-leader").text("");
    }
    else if ($(window).width() >= 1210 && $(window).width() <= 1529) {
        $(".flight-leader").text("FL");
    }
    else if ($(window).width() >= 1530 && $(window).width() <= 1950) {
        $(".flight-leader").text("Flight Lead");
    } 
    else {
        $(".flight-leader").text("Flight Leader");
    }
});