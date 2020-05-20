
$(document).ready(function () {
    $.getJSON('data/data.json', function (json) {
        console.log(json);
        setPlanes()
        createGridFromTemplate(json);
        setJsonData(json);

    });

    flightSize = 4;
    fighterPlane = "P51 Mustang";
    attackerPlane = "P47 Jug";
    eventDate = "May 22nd";
    teamColor = "Allied";
    map = "A Bridge Too Far";


    function setPlanes() {
        document.getElementById("green-plane").innerHTML = fighterPlane;
        document.getElementById("red-plane").innerHTML = fighterPlane;
        document.getElementById("purple-plane").innerHTML = fighterPlane;
        document.getElementById("blue-plane").innerHTML = attackerPlane;
        document.getElementById("black-plane").innerHTML = attackerPlane;
    }


    function createGridFromTemplate(json) {
        var greenTemplate = document.getElementsByTagName("template-green")[0];
        var greenDivs = greenTemplate.querySelector('div');
        var gD;
        var redTemplate = document.getElementsByTagName("template-red")[0];
        var redDivs = redTemplate.querySelector('div');
        var aD
        var purpleTemplate = document.getElementsByTagName("template-purple")[0];
        var purpleDivs = purpleTemplate.querySelector('div');
        var pD;
        var blueTemplate = document.getElementsByTagName("template-blue")[0];
        var blueDivs = blueTemplate.querySelector('div');
        var bD;
        var blackTemplate = document.getElementsByTagName("template-black")[0];
        var blackDivs = blackTemplate.querySelector('div');
        var blD;

        AttackerFlightLead = 0;
        GreenFlightLead = 0;
        RedFlightLead = 0;
        escortPilots = 0;
        attackerPilots = 0;
        jsonLength = Object.keys(json).length;

        for (i = 0; i < jsonLength; i++) {
            gD = document.importNode(greenDivs, true);
            aD = document.importNode(redDivs, true);
            bD = document.importNode(blueDivs, true);
            blD = document.importNode(blackDivs, true);
            pD = document.importNode(purpleDivs, true);

            if (json[i]["Select role:"] == "Fighter Pilot") {
                if (json[i]["Select Fighter Pilot Group:"] == "Detached Fighter Group") {
                    if (json[i]["Select Fighter Pilot Position:"] == "Flight Lead") {
                        GreenFlightLead++;
                    }
                    if (json[i]["Select Fighter Pilot Position:"] == "Wingman" || GreenFlightLead > 1) {
                        document.getElementById("green-wingmen").appendChild(gD);
                    }
                }
                if (json[i]["Select Fighter Pilot Group:"] == "Escort Fighter Group") {
                    if (json[i]["Select Fighter Pilot Position:"] == "Flight Lead") {
                        RedFlightLead++;
                    }
                    if (RedFlightLead >= 2) {
                        document.getElementById("purple-flight").style.display = "block";
                    }
                    if (json[i]["Select Fighter Pilot Position:"] == "Wingman" || RedFlightLead > 1) {
                        escortPilots++;
                        if (escortPilots < flightSize) {
                            document.getElementById("red-wingmen").appendChild(aD);

                        }
                        if (escortPilots >= flightSize) {
                            document.getElementById("purple-flight").style.display = "block";
                            document.getElementById("purple-wingmen").appendChild(pD);

                        }
                    }
                }
            }
            else if (json[i]["Select role:"] == "Attacker Pilot") {
                if (json[i]["Select Attacker Pilot Position:"] == "Flight Lead") {
                    AttackerFlightLead++;
                }
                if (AttackerFlightLead >= 2) {
                    document.getElementById("black-flight").style.display = "block";
                }
                if (json[i]["Select Attacker Pilot Position:"] == "Wingman" || AttackerFlightLead > 2) {
                    attackerPilots++;
                    if (attackerPilots < flightSize) {
                        document.getElementById("blue-wingmen").appendChild(bD);

                    }
                    if (attackerPilots >= flightSize) {
                        document.getElementById("black-flight").style.display = "block";
                        document.getElementById("black-wingmen").appendChild(blD);

                    }
                }
            }
            createIds();
        }
    }

    function createIds() {
        $(".green-number").each(function (i) {
            $(this).attr('id', "green-number" + i);
            $(this).text("Green " + (i + 2));
        });
        $(".grid-green-pilot").each(function (i) {
            $(this).attr('id', "green" + i);
        });
        $(".red-number").each(function (i) {
            $(this).attr('id', "red-number" + i);
            $(this).text("Red " + (i + 2));
        });
        $(".grid-red-pilot").each(function (i) {
            $(this).attr('id', "red" + i);
        });
        $(".blue-number").each(function (i) {
            $(this).attr('id', "blue-number" + i);
            $(this).text("Blue " + (i + 2));
        });
        $(".grid-blue-pilot").each(function (i) {
            $(this).attr('id', "blue" + i);
        });
        $(".black-number").each(function (i) {
            $(this).attr('id', "black-number" + (i + flightSize + 1));
            $(this).text("Black " + (i + 2));
        });
        $(".grid-black-pilot").each(function (i) {
            $(this).attr('id', "black" + i);
        });
        $(".purple-number").each(function (i) {
            $(this).attr('id', "purple-number" + (i + flightSize + 1));
            $(this).text("Purple " + (i + 2));
        });
        $(".grid-purple-pilot").each(function (i) {
            $(this).attr('id', "purple" + i);
        });
    };


    function setJsonData(json) {
        greenLeaderFilled = false;
        greenLeaderName = "";
        greenPilot = 0;
        redLeaderFilled = false;
        redLeaderName = "";
        redPilot = 0;
        purpleLeaderFilled = false;
        purpleLeaderName = "";
        purplePilot = 0;
        blueLeaderFilled = false;
        blueLeaderName = "";
        blackLeaderFilled = false;
        blackLeaderName = "";
        attackerPilots = 0;

        jsonLength = Object.keys(json).length;
        for (i = 0; i < jsonLength; i++) {
            if (json[i]["Select role:"] == "Fighter Pilot") {
                if (json[i]["Select Fighter Pilot Group:"] == "Detached Fighter Group") {
                    if (json[i]["Select Fighter Pilot Position:"] == "Flight Lead"
                        && greenLeaderFilled == false) {
                        greenLeaderFilled = true;
                        greenLeaderName = json[i]["Enter Pilot Name:"];
                        document.getElementById('green0').innerHTML = greenLeaderName;
                    }
                    else if (greenLeaderName != json[i]["Enter Pilot Name:"]) {
                        greenPilot++;
                        document.getElementById("green" + (greenPilot)).innerHTML = json[i]["Enter Pilot Name:"];
                    }
                    else {
                        console.log("Something went wrong with green team!");
                    }
                }
                if (json[i]["Select Fighter Pilot Group:"] == "Escort Fighter Group") {
                    if (json[i]["Select Fighter Pilot Position:"] == "Flight Lead"
                        && redLeaderFilled == false
                        && purpleLeaderFilled == false) {
                        redLeaderFilled = true;
                        redLeaderName = json[i]["Enter Pilot Name:"];
                        document.getElementById("red0").innerHTML = redLeaderName;
                    }
                    else if (json[i]["Select Fighter Pilot Position:"] == "Flight Lead"
                        && redLeaderFilled
                        && purpleLeaderFilled == false) {
                        purpleLeaderFilled = true;
                        purpleLeaderName = json[i]["Enter Pilot Name:"];
                        document.getElementById("purple0").innerHTML = purpleLeaderName;
                    }
                    else if (json[i]["Select Fighter Pilot Position:"] == "Wingman") {
                        redPilot++;
                        if (redPilot < flightSize) {
                            document.getElementById("red" + (redPilot)).innerHTML = json[i]["Enter Pilot Name:"];
                        }
                        else {
                            document.getElementById("purple" + (redPilot + 1 - flightSize)).innerHTML = json[i]["Enter Pilot Name:"];
                        }
                    }
                    else {
                        console.log("Something went wrong with red team!");
                    }
                }
            }
            else if (json[i]["Select role:"] == "Attacker Pilot") {
                if (json[i]["Select Attacker Pilot Position:"] == "Flight Lead"
                    && blueLeaderFilled == false) {
                    blueLeaderFilled = true;
                    blueLeaderName = json[i]["Enter Pilot Name:"];
                    document.getElementById("blue0").innerHTML = blueLeaderName;
                }
                else if (json[i]["Select Attacker Pilot Position:"] == "Flight Lead"
                    && blueLeaderFilled
                    && blackLeaderFilled == false) {
                    blackLeaderFilled = true;
                    blackLeaderName = json[i]["Enter Pilot Name:"];
                    document.getElementById("black0").innerHTML = blackLeaderName;
                }
                else if (json[i]["Select Attacker Pilot Position:"] == "Flight Lead"
                    && blueLeaderFilled
                    && blueLeaderFilled) {
                    attackerPilots++;
                    if (attackerPilots < flightSize) {
                        document.getElementById("blue" + (attackerPilots)).innerHTML = json[i]["Enter Pilot Name:"];
                    }
                    else {
                        document.getElementById("black" + (attackerPilots + 1 - flightSize)).innerHTML = json[i]["Enter Pilot Name:"];
                    }
                }
                else if (json[i]["Select Attacker Pilot Position:"] == "Wingman"
                    && blueLeaderName != json[i]["Enter Pilot Name:"]
                    && blackLeaderName != json[i]["Enter Pilot Name:"]) {
                    attackerPilots++;
                    if (attackerPilots < flightSize) {
                        document.getElementById("blue" + (attackerPilots)).innerHTML = json[i]["Enter Pilot Name:"];
                    }
                    else {

                        document.getElementById("black" + (attackerPilots + 1 - flightSize)).innerHTML = json[i]["Enter Pilot Name:"];
                    }
                }
                else {
                    console.log("Something went haywire!");
                }
            }
        }
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
        if (n == 5 || n == 6) {
            document.getElementById("registration-closed").style.display = "flex";
        }
        else {
            document.getElementById("google-form").style.display = "flex";
            document.getElementById("roster-updated").style.display = "flex";
        }
    }

    function setEventDate() {
        document.getElementById("event-date0").innerHTML = eventDate;
        document.getElementById("event-date1").innerHTML = eventDate;
    }

    function setTeamColor() {
        document.getElementById("team-color").innerHTML = teamColor;  
    }

    function setMap() {
        document.getElementById("map").innerHTML = map;  
    }

    toggleRegistration();
    setEventDate();
    setTeamColor();
    setMap();
});