
$(document).ready(function () {
    $.getJSON('data/data.json', function (json) {
        createGreenFlight(json);
        createRedFlight(json);
        createBlueFlight(json);
        createBlackFlight(json);
        setJsonData(json);
    });



    


    //green flight
    function createGreenFlight(json) {
        var greenTemplate = document.getElementsByTagName("template-green")[0];
        var divs = greenTemplate.querySelector('div');
        var a;
        jsonLength = Object.keys(json).length;

        for (i = 0; i < jsonLength; i++) {
            a = document.importNode(divs, true);
            //add them to the page
            if (json[i]["Select Fighter Pilot Group:"] == "Detached Fighter Group") {
                if (json[i]["Select Fighter Pilot Position:"] == "Wingman") {
                    document.getElementById("green-wingmen").appendChild(a);
                }
            }
            createGreenTeamIds();
        }
    }

    function createGreenTeamIds() {
        $(".green-number").each(function (i) {
            $(this).attr('id', "green-number" + i);
            $(this).text("Green " + (i + 2));
        });
        $(".grid-green-pilot").each(function (i) {
            $(this).attr('id', "green" + i);
        });
    };

    //red flight
    function createRedFlight(json) {
        var redTemplate = document.getElementsByTagName("template-red")[0];
        var divs = redTemplate.querySelector('div');
        var a;
        jsonLength = Object.keys(json).length - 1;

        for (i = 0; i < jsonLength; i++) {
            a = document.importNode(divs, true);
            //add them to the page
            if (json[i]["Select Fighter Pilot Group:"] == "Escort Fighter Group") {
                if (json[i]["Select Fighter Pilot Position:"] == "Wingman") {
                    document.getElementById("red-wingmen").appendChild(a);
                }
            }
            createRedTeamIds();
        }
    }

    function createRedTeamIds() {
        $(".red-number").each(function (i) {
            $(this).attr('id', "red-number" + i);
            $(this).text("Red " + (i + 2));
        });
        $(".grid-red-pilot").each(function (i) {
            $(this).attr('id', "red" + i);
        });
    };

    //blue flight
    function createBlueFlight(json) {
        var blueTemplate = document.getElementsByTagName("template-blue")[0];
        var divs = blueTemplate.querySelector('div');
        var a;
        jsonLength = Object.keys(json).length;
        attacker = 0

        for (i = 0; i < jsonLength; i++) {
            a = document.importNode(divs, true);
            //add them to the page
            if (json[i]["Select Attacker Pilot Position:"] == "Wingman") {
                attacker++;
                if (attacker < 7) {
                    document.getElementById("blue-wingmen").appendChild(a);
                   
                }
            }
            createBlueTeamIds();
        }
    }

    function createBlueTeamIds() {
        $(".blue-number").each(function (i) {
            $(this).attr('id', "blue-number" + i);
            $(this).text("Blue " + (i + 2));
        });
        $(".grid-blue-pilot").each(function (i) {
            $(this).attr('id', "blue" + i);
        });
    };

    //black flight
    function createBlackFlight(json) {
        var blackTemplate = document.getElementsByTagName("template-black")[0];
        var divs = blackTemplate.querySelector('div');
        var a;
        jsonLength = Object.keys(json).length;
        attacker = 0
        for (i = 0; i < jsonLength; i++) {
            a = document.importNode(divs, true);
            //add them to the page
            if (json[i]["Select Attacker Pilot Position:"] == "Wingman") {
                attacker++
                if(attacker >= 7){
                    document.getElementById("black-wingmen").appendChild(a);
                   
                }
            }
            createBlackTeamIds();
        }
    }

    function createBlackTeamIds() {
        $(".black-number").each(function (i) {
            $(this).attr('id', "black-number" + (i  + 7));
            $(this).text("Black " + (i + 2));
        });
        $(".grid-black-pilot").each(function (i) {
            $(this).attr('id', "black" + i);
        });
    };

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
                        greenTeam++;
                        document.getElementById("green" + (greenTeam)).innerHTML = json[i]["Enter Pilot Name:"];
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
                        redTeam++;
                        document.getElementById("red" + (redTeam)).innerHTML = json[i]["Enter Pilot Name:"];
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
                else if (json[i]["Select Attacker Pilot Position:"] == "Wingman"
                    && blueLeaderName != json[i]["Enter Pilot Name:"]
                    && blackLeaderName != json[i]["Enter Pilot Name:"]) {
                    attackerTeam++;
                    if (attackerTeam < 7) {
                        document.getElementById("blue" + (attackerTeam)).innerHTML = json[i]["Enter Pilot Name:"];
                    }
                    else {
                        document.getElementById("black" + (attackerTeam - 6)).innerHTML = json[i]["Enter Pilot Name:"];
                    }
                }
                else {
                    console.log("Something went haywire!");
                }
            }
        }
    }
});