
$(document).ready(function () {
    $.getJSON('data/data.json', function (json) {
        createGridFromTemplate(json);
        setJsonData(json);
        
    });

    flightSize = 6

    function createGridFromTemplate(json) {
        var greenTemplate = document.getElementsByTagName("template-green")[0];
        var greenDivs = greenTemplate.querySelector('div');
        var gD;
        var redTemplate = document.getElementsByTagName("template-red")[0];
        var redDivs = redTemplate.querySelector('div');
        var aD
        var blueTemplate = document.getElementsByTagName("template-blue")[0];
        var blueDivs = blueTemplate.querySelector('div');
        var bD;
        var blackTemplate = document.getElementsByTagName("template-black")[0];
        var blackDivs = blackTemplate.querySelector('div');
        var blD;

        AttackerFlightLead = 0;
        GreenFlightLead = 0;
        RedFlightLead = 0;
        attackerPilots = 0;
        jsonLength = Object.keys(json).length;

        for (i = 0; i < jsonLength; i++) {
            gD = document.importNode(greenDivs, true);
            aD = document.importNode(redDivs, true);
            bD = document.importNode(blueDivs, true);
            blD = document.importNode(blackDivs, true);

            if (json[i]["Select role:"] == "Fighter Pilot") {
                if (json[i]["Select Fighter Pilot Group:"] == "Detached Fighter Group") {
                    if(json[i]["Select Fighter Pilot Position:"] == "Flight Lead"){
                        GreenFlightLead++;
                    }
                    if (json[i]["Select Fighter Pilot Position:"] == "Wingman" || GreenFlightLead > 1) {
                        document.getElementById("green-wingmen").appendChild(gD);
                    }
                }
                if (json[i]["Select Fighter Pilot Group:"] == "Escort Fighter Group") {
                    if(json[i]["Select Fighter Pilot Position:"] == "Flight Lead"){
                        RedFlightLead++;
                    }
                    if (json[i]["Select Fighter Pilot Position:"] == "Wingman" || RedFlightLead > 1) {
                        document.getElementById("red-wingmen").appendChild(aD);
                    }
                }
            }
            else if(json[i]["Select role:"] == "Attacker Pilot") {
                if(json[i]["Select Attacker Pilot Position:"] == "Flight Lead"){
                    AttackerFlightLead++;
                }
                if (json[i]["Select Attacker Pilot Position:"] == "Wingman" || AttackerFlightLead > 2) {
                    attackerPilots++;
                    if (attackerPilots < flightSize) {
                        document.getElementById("blue-wingmen").appendChild(bD);

                    }
                    if (attackerPilots >= flightSize) {
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
            $(this).attr('id', "black-number" + (i + 7));
            $(this).text("Black " + (i + 2));
        });
        $(".grid-black-pilot").each(function (i) {
            $(this).attr('id', "black" + i);
        });
    };


    function setJsonData(json) {
        greenLeaderFilled = false;
        greenLeaderName = "";
        greenPilot = 0;
        redLeaderFilled = false;
        redLeaderName = "";
        redPilot = 0;
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
                        && redLeaderFilled == false) {
                        redLeaderFilled = true;
                        redLeaderName = json[i]["Enter Pilot Name:"];
                        document.getElementById("red0").innerHTML = redLeaderName;
                    }
                    else if (redLeaderName != json[i]["Enter Pilot Name:"]) {
                        redPilot++;
                        document.getElementById("red" + (redPilot)).innerHTML = json[i]["Enter Pilot Name:"];
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
                    && blueLeaderFilled){
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
});