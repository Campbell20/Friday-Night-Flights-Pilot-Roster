
$(document).ready(function () {
    $.getJSON('data/data.json', function (json) {
        setJsonData(json);
    });

    function setJsonData(json) {
        greenLeaderFilled = false;
        greenLeaderName = "";
        greenTeam = 0;
        redLeaderFilled = false;
        redLeaderName = "";
        redTeam = 0;
        blueLeaderFilled = false;
        blueLeaderName = "";
        blackLeaderFilled = false;
        blackLeaderName = "";
        attackerTeam = 0;



        console.log(json);
        jsonLength = Object.keys(json).length;
        for (i = 0; i < jsonLength; i++) {
            if (json[i]["Select role:"] == "Fighter Pilot") {
                if (json[i]["Select Fighter Pilot Group:"] == "Detached Fighter Group") {
                    if (json[i]["Select Fighter Pilot Position:"] == "Flight Lead"
                        && greenLeaderFilled == false) {
                        greenLeaderFilled = true;
                        greenLeaderName = json[i]["Enter Pilot Name:"];
                        document.getElementById("green-1").innerHTML = json[i]["Enter Pilot Name:"];
                    }
                    else if (greenLeaderName != json[i]["Enter Pilot Name:"]
                        && greenTeam < 3) {
                        greenTeam++;
                        document.getElementById("green-" + (greenTeam + 1)).innerHTML = json[i]["Enter Pilot Name:"];
                    }
                    else {
                        console.log("To many green team members.");
                    }
                }
                if (json[i]["Select Fighter Pilot Group:"] == "Escort Fighter Group") {
                    if (json[i]["Select Fighter Pilot Position:"] == "Flight Lead"
                        && redLeaderFilled == false) {
                        redLeaderFilled = true;
                        redLeaderName = json[i]["Enter Pilot Name:"];
                        document.getElementById("red-1").innerHTML = json[i]["Enter Pilot Name:"];
                    }
                    else if (redLeaderName != json[i]["Enter Pilot Name:"]
                        && redTeam < 3) {
                        redTeam++;
                        document.getElementById("red-" + (redTeam + 1)).innerHTML = json[i]["Enter Pilot Name:"];
                    }
                    else {
                        console.log("To many red guys.");
                    }
                }
            }
            else if (json[i]["Select role:"] == "Attacker Pilot") {
                if (json[i]["Select Attacker Pilot Position:"] == "Flight Lead"
                    && blueLeaderFilled == false) {
                    blueLeaderFilled == true;
                    blueLeaderName = json[i]["Enter Pilot Name:"];
                    document.getElementById("blue-1").innerHTML = json[i]["Enter Pilot Name:"];
                }
                else if (json[i]["Select Attacker Pilot Position:"] == "Flight Lead"
                    && blueLeaderFilled
                    && blackLeaderFilled == false) {
                    blackLeaderFilled == true;
                    blackLeaderName = json[i]["Enter Pilot Name:"];
                    document.getElementById("black-1").innerHTML = json[i]["Enter Pilot Name:"];
                }
                else if (json[i]["Select Attacker Pilot Position:"] == "Wingman"
                    && blueLeaderName != json[i]["Enter Pilot Name:"]
                    && blackLeaderName != json[i]["Enter Pilot Name:"]
                    && attackerTeam < 6) {
                    attackerTeam++;
                    if (attackerTeam < 3) {
                        document.getElementById("blue-" + (attackerTeam + 1)).innerHTML = json[i]["Enter Pilot Name:"];
                    }
                    else {
                        document.getElementById("black-" + (attackerTeam + 1)).innerHTML = json[i]["Enter Pilot Name:"];
                    }
                }
                else {
                    console.log("To many attacker dudes.");
                }
            }
        }
    }
});