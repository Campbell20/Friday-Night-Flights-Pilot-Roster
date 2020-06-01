
$(document).ready(function () {
    $.getJSON('data/pwcgfnfdata.json', function (json) {
        console.log(json);
        setFlightsAndPlanes()
        createGridsFromTemplate(json);
    });

    //allied groups
    alliedFighterGroupA = "352nd Fighter Group";
    alliedFighterGroupB = "474th Fighter Group"
    alliedBomberGroup = "410th Bomber Group";

    //allied planes
    alliedPlaneA = "P51 Mustangs";
    alliedPlaneB = "P38 Lightings";
    alliedBomber = "A20 Havocs";

    //axis groups
    axisFighterGroupA = "I./JG77";
    axisFighterGroupB = "I./JG1";
    axisBomberGroup = "I./KG54";

    //axis planes
    axisPlaneA = "Fw190A8";
    axisPlaneB = "Bf109G14";
    axisBomber = "Ju88";

    eventDate = "June 5th";
    // map = "Pat Wilson Campaign Generator";
    registration = false;


    function setFlightsAndPlanes() {
        document.getElementById("alliedfighterA").innerHTML = alliedFighterGroupA;
        document.getElementById("alliedfighterB").innerHTML = alliedFighterGroupB;
        document.getElementById("alliedbombergroup").innerHTML = alliedBomberGroup;

        document.getElementById("alliedfighterA-plane").innerHTML = alliedPlaneA;
        document.getElementById("alliedfighterB-plane").innerHTML = alliedPlaneB;
        document.getElementById("alliedbombergroup-plane").innerHTML = alliedBomber;

        document.getElementById("axisfighterA").innerHTML = axisFighterGroupA;
        document.getElementById("axisfighterB").innerHTML = axisFighterGroupB;
        document.getElementById("axisbombergroup").innerHTML = axisBomberGroup;
       
        document.getElementById("axisfighterA-plane").innerHTML = axisPlaneA;
        document.getElementById("axisfighterB-plane").innerHTML = axisPlaneB;
        document.getElementById("axisbombergroup-plane").innerHTML = axisBomber;
    }


    function createGridsFromTemplate(json) {
        jsonLength = Object.keys(json).length;
        var alliedFGATemplate = document.getElementsByTagName("template-alliedFGA")[0];
        var alliedFGBTemplate = document.getElementsByTagName("template-alliedFGB")[0];
        var alliedBomberTemplate = document.getElementsByTagName("template-alliedBG")[0];
        

        alliedFighterGroupALeader = 0;
        alliedFGA = 0;
        alliedFighterGroupBLeader = 0;
        alliedFGB = 0;
        alliedBomberLeader = 0;
        alliedB = 0;


        var axisFGATemplate = document.getElementsByTagName("template-axisFGA")[0];
        var axisFGBTemplate = document.getElementsByTagName("template-axisFGB")[0];
        var axisBomberTemplate = document.getElementsByTagName("template-axisBG")[0];
        

        axisFighterGroupALeader = 0;
        axisFGA = 0;
        axisFighterGroupBLeader = 0;
        axisFGB = 0;
        axisBomberLeader = 0;
        axisB = 0;

        for (i = 0; i < jsonLength; i++) {
            if (json[i]["Side"] == "Allied") {
                if (json[i]["Allied FG"] == "352nd Fighter Group - P51 Mustang") {
                    var alliedFGADivs = alliedFGATemplate.querySelector('div');
                    var alliedfightergroupAD;

                    if (json[i]["Allied Position"] == "Flight Lead") {
                        alliedFighterGroupALeader++;
                        document.getElementById('alliedfighterA-leader').innerHTML = json[i]["Allied Name"];
                    }
                    else if (alliedFighterGroupALeader == 0) {
                        document.getElementById('alliedfighterA-leader').innerHTML = json[i]["Allied Name"];
                    }
                    else {
                        alliedfightergroupAD = document.importNode(alliedFGADivs, true);
                        document.getElementById("alliedfighterA-wingmen").appendChild(alliedfightergroupAD);
                        createIds();
                        alliedFGA++;
                        document.getElementById("alliedFGA" + alliedFGA).innerHTML = json[i]["Allied Name"];
                    }
                }
                else if (json[i]["Allied FG"] == "474th Fighter Group - P38 Lightings") {
                    var alliedFGBDivs = alliedFGBTemplate.querySelector('div');
                    var alliedfightergroupBD;

                    if (json[i]["Allied Position"] == "Flight Lead") {
                        alliedFighterGroupBLeader++;
                        document.getElementById('alliedfighterB-leader').innerHTML = json[i]["Allied Name"];
                    }
                    else if (alliedFighterGroupBLeader == 0) {
                        document.getElementById('alliedfighterB-leader').innerHTML = json[i]["Allied Name"];
                    }
                    else {
                        alliedfightergroupBD = document.importNode(alliedFGBDivs, true);
                        document.getElementById("alliedfighterB-wingmen").appendChild(alliedfightergroupBD);
                        createIds();
                        alliedFGB++;
                        document.getElementById("alliedFGB" + alliedFGB).innerHTML = json[i]["Allied Name"];
                    }
                }
                else {
                    var alliedBomberDivs = alliedBomberTemplate.querySelector('div');
                    var alliedBomberD;

                    if (json[i]["Allied Position"] == "Flight Lead") {
                        alliedBomberLeader++;
                        document.getElementById('alliedbomber-leader').innerHTML = json[i]["Allied Name"];
                    }
                    else if (alliedBomberLeader == 0) {
                        document.getElementById('alliedbomber-leader').innerHTML = json[i]["Allied Name"];
                    }
                    else {
                        alliedBomberD = document.importNode(alliedBomberDivs, true);
                        document.getElementById("alliedbomber-wingmen").appendChild(alliedBomberD);
                        createIds();
                        alliedB++;
                        document.getElementById("alliedBG" + alliedFGB).innerHTML = json[i]["Allied Name"];
                    }
                }
            }

            if (json[i]["Side"] == "Axis") {
                if (json[i]["Axis FG"] == "I./JG77 - Fw190A8 (Fighter Group)") {
                    var axisFGADivs = axisFGATemplate.querySelector('div');
                    var axisfightergroupAD;

                    if (json[i]["Axis Position"] == "Flight Lead") {
                        axisFighterGroupALeader++;
                        document.getElementById('axisfighterA-leader').innerHTML = json[i]["Axis Name"];
                    }
                    else if (axisFighterGroupALeader == 0) {
                        document.getElementById('axisfighterA-leader').innerHTML = json[i]["Axis Name"];
                    }
                    else {
                        axisfightergroupAD = document.importNode(axisFGADivs, true);
                        document.getElementById("axisfighterA-wingmen").appendChild(axisfightergroupAD);
                        createIds();
                        axisFGA++;
                        document.getElementById("axisFGA" + axisFGA).innerHTML = json[i]["Axis Name"];
                    }
                }
                else if (json[i]["Axis FG"] == "I./JG1 - Bf109G14 (Fighter Group)") {
                    var axisFGBDivs = axisFGBTemplate.querySelector('div');
                    var axisfightergroupBD;

                    if (json[i]["Axis Position"] == "Flight Lead") {
                        axisFighterGroupBLeader++;
                        document.getElementById('axisfighterB-leader').innerHTML = json[i]["Axis Name"];
                    }
                    else if (axisFighterGroupBLeader == 0) {
                        document.getElementById('axisfighterB-leader').innerHTML = json[i]["Axis Name"];
                    }
                    else {
                        axisfightergroupBD = document.importNode(axisFGBDivs, true);
                        document.getElementById("axisfighterB-wingmen").appendChild(axisfightergroupBD);
                        createIds();
                        axisFGB++;
                        document.getElementById("axisFGB" + axisFGB).innerHTML = json[i]["Axis Name"];
                    }
                }
                else {
                    var axisBomberDivs = axisBomberTemplate.querySelector('div');
                    var axisBomberD;

                    if (json[i]["Axis Position"] == "Flight Lead") {
                        axisBomberLeader++;
                        document.getElementById('axisbomber-leader').innerHTML = json[i]["Axis Name"];
                    }
                    else if (axisBomberLeader == 0) {
                        document.getElementById('axisbomber-leader').innerHTML = json[i]["Axis Name"];
                    }
                    else {
                        axisBomberD = document.importNode(axisBomberDivs, true);
                        document.getElementById("axisbomber-wingmen").appendChild(axisBomberD);
                        createIds();
                        axisB++;
                        document.getElementById("axisBG" + axisFGB).innerHTML = json[i]["Axis Name"];
                    }
                }
            }

        }
    }

    function createIds() {
        $(".alliedFGA-number").each(function (i) {
            $(this).attr('id', "alliedFGA-number" + i);
            $(this).text(1 + "-" + (i + 2));
        });
        $(".alliedFGA").each(function (i) {
            $(this).attr('id', "alliedFGA" + (i + 1));
        });
        $(".alliedFGB-number").each(function (i) {
            $(this).attr('id', "alliedFGB-number" + i);
            $(this).text(2 + "-" + (i + 2));
        });
        $(".alliedFGB").each(function (i) {
            $(this).attr('id', "alliedFGB" + (i + 1));
        });
        $(".alliedBG-number").each(function (i) {
            $(this).attr('id', "alliedBG-number" + i);
            $(this).text(3 + "-" + (i + 2));
        });
        $(".alliedBG").each(function (i) {
            $(this).attr('id', "alliedBG" + (i + 1));
        });
    };


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
        if (n == 5 || n == 6 || registration == false) {
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

    // function setMap() {
    //     document.getElementById("map").innerHTML = map;  
    // }

    toggleRegistration();
    setEventDate();
    // setMap();
});