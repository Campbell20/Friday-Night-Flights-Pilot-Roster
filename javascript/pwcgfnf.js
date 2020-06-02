
$(document).ready(function () {
    $.getJSON('data/pwcgfnfdata.json', function (json) {
        console.log(json);
        createGridsFromTemplate(json);
    });

    function createGridsFromTemplate(json) {
        jsonLength = Object.keys(json).length;
        var alliedFGATemplate = document.getElementsByTagName("template-alliedFGA")[0];
        var alliedFGBTemplate = document.getElementsByTagName("template-alliedFGB")[0];
        var alliedBomberTemplate = document.getElementsByTagName("template-alliedBG")[0];

        alliedFGALeaderFilled = false;
        alliedFGA = 0;
        alliedFGBLeaderFilled = false;
        alliedFGB = 0;
        alliedBGLeaderFilled = false;
        alliedB = 0;

        var axisFGATemplate = document.getElementsByTagName("template-axisFGA")[0];
        var axisFGBTemplate = document.getElementsByTagName("template-axisFGB")[0];
        var axisBomberTemplate = document.getElementsByTagName("template-axisBG")[0];

        axisFGALeaderFilled = false;
        axisFGA = 0;
        axisFGBLeaderFilled = false;
        axisFGB = 0;
        axisBGLeaderFilled = false;
        axisB = 0;

        for (i = 0; i < jsonLength; i++) {
            if (json[i]["Side"] == "Allied") {
                if (json[i]["Allied FG"] == "352nd Fighter Group - P51 Mustang") {
                    var alliedFGADivs = alliedFGATemplate.querySelector('div');
                    var alliedfightergroupAD;

                    if (json[i]["Allied Position"] == "Flight Lead" &&
                    !alliedFGALeaderFilled) {
                        alliedFGALeaderFilled = true; 
                        document.getElementById('alliedfighterA-leader').innerHTML = json[i]["Allied Name"];
                        document.getElementById('alliedfighterA-leader-pic').src = '/imgs/American/American' + json[i]["Image"] + ".jpg";
                    }
                    else {
                        alliedfightergroupAD = document.importNode(alliedFGADivs, true);
                        document.getElementById("alliedfighterA-wingmen").appendChild(alliedfightergroupAD);
                        createIds();
                        alliedFGA++;
                        document.getElementById("alliedFGA" + alliedFGA).innerHTML = json[i]["Allied Name"];
                        document.getElementById('alliedFGA-pic' + alliedFGA).src = '/imgs/American/American' + json[i]["Image"] + ".jpg";
                    }
                }
                else if (json[i]["Allied FG"] == "474th Fighter Group - P38 Lightings" ) {
                    var alliedFGBDivs = alliedFGBTemplate.querySelector('div');
                    var alliedfightergroupBD;

                    if (json[i]["Allied Position"] == "Flight Lead" &&
                    !alliedFGBLeaderFilled) {
                        alliedFGBLeaderFilled = true;
                        document.getElementById('alliedfighterB-leader').innerHTML = json[i]["Allied Name"];
                        document.getElementById('alliedfighterB-leader-pic').src = '/imgs/American/American' + json[i]["Image"] + ".jpg";
                    }
                    else {
                        alliedfightergroupBD = document.importNode(alliedFGBDivs, true);
                        document.getElementById("alliedfighterB-wingmen").appendChild(alliedfightergroupBD);
                        createIds();
                        alliedFGB++;
                        document.getElementById("alliedFGB" + alliedFGB).innerHTML = json[i]["Allied Name"];
                        document.getElementById('alliedFGB-pic' + alliedFGB).src = '/imgs/American/American' + json[i]["Image"] + ".jpg";
                    }
                }
                else {
                    var alliedBomberDivs = alliedBomberTemplate.querySelector('div');
                    var alliedBomberD;

                    if (json[i]["Allied Position"] == "Flight Lead" &&
                    !alliedBGLeaderFilled) {
                        alliedBGLeaderFilled = true;
                        document.getElementById('alliedbomber-leader').innerHTML = json[i]["Allied Name"];
                        document.getElementById('alliedbomber-leader-pic').src = '/imgs/American/American' + json[i]["Image"] + ".jpg";
                    }
                    else {
                        alliedBomberD = document.importNode(alliedBomberDivs, true);
                        document.getElementById("alliedbomber-wingmen").appendChild(alliedBomberD);
                        createIds();
                        alliedB++;
                        document.getElementById("alliedBG" + alliedB).innerHTML = json[i]["Allied Name"];
                        document.getElementById('alliedBG-pic' + alliedB).src = '/imgs/American/American' + json[i]["Image"] + ".jpg";
                    }
                }
            }

            //AXIS SIDE
            if (json[i]["Side"] == "Axis") {
                if (json[i]["Axis FG"] == "I./JG77 - Fw190A8 (Fighter Group)") {
                    var axisFGADivs = axisFGATemplate.querySelector('div');
                    var axisfightergroupAD;

                    if (json[i]["Axis Position"] == "Flight Lead" &&
                    !axisFGALeaderFilled) {
                        axisFGALeaderFilled = true;
                        document.getElementById('axisfighterA-leader').innerHTML = json[i]["Axis Name"];
                        document.getElementById('axisfighterA-leader-pic').src = '/imgs/German/German' + json[i]["Image"] + ".jpg";
                    }
                    else {
                        axisfightergroupAD = document.importNode(axisFGADivs, true);
                        document.getElementById("axisfighterA-wingmen").appendChild(axisfightergroupAD);
                        createIds();
                        axisFGA++;
                        document.getElementById("axisFGA" + axisFGA).innerHTML = json[i]["Axis Name"];
                        document.getElementById('axisFGA-pic' + axisFGA).src = '/imgs/German/German' + json[i]["Image"] + ".jpg";
                    }
                }
                else if (json[i]["Axis FG"] == "I./JG1 - Bf109G14 (Fighter Group)") {
                    var axisFGBDivs = axisFGBTemplate.querySelector('div');
                    var axisfightergroupBD;

                    if (json[i]["Axis Position"] == "Flight Lead" &&
                    !axisFGBLeaderFilled) {
                        axisFGBLeaderFilled = true;
                        document.getElementById('axisfighterB-leader').innerHTML = json[i]["Axis Name"];
                        document.getElementById('axisfighterB-leader-pic').src = '/imgs/German/German' + json[i]["Image"] + ".jpg";
                    }
                    else {
                        axisfightergroupBD = document.importNode(axisFGBDivs, true);
                        document.getElementById("axisfighterB-wingmen").appendChild(axisfightergroupBD);
                        createIds();
                        axisFGB++;
                        document.getElementById("axisFGB" + axisFGB).innerHTML = json[i]["Axis Name"];
                        document.getElementById('axisFGB-pic'+ axisFGB).src = '/imgs/German/German' + json[i]["Image"] + ".jpg";
                    }
                }
                else {
                    var axisBomberDivs = axisBomberTemplate.querySelector('div');
                    var axisBomberD;

                    if (json[i]["Axis Position"] == "Flight Lead" &&
                    !axisBGLeaderFilled) {
                        axisBGLeaderFilled = true;
                        document.getElementById('axisbomber-leader').innerHTML = json[i]["Axis Name"];
                        document.getElementById('axisbomber-leader-pic').src = '/imgs/German/German' + json[i]["Image"] + ".jpg";
                    }
                    else {
                        axisBomberD = document.importNode(axisBomberDivs, true);
                        document.getElementById("axisbomber-wingmen").appendChild(axisBomberD);
                        createIds();
                        axisB++;
                        document.getElementById("axisBG" + axisB).innerHTML = json[i]["Axis Name"];
                        document.getElementById('axisBG-pic' + axisB).src = '/imgs/German/German' + json[i]["Image"] + ".jpg";
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
        $(".alliedFGA-pic").each(function (i) {
            $(this).attr('id', "alliedFGA-pic" + (i + 1));
        });
        $(".alliedFGB-number").each(function (i) {
            $(this).attr('id', "alliedFGB-number" + i);
            $(this).text(2 + "-" + (i + 2));
        });
        $(".alliedFGB").each(function (i) {
            $(this).attr('id', "alliedFGB" + (i + 1));
        });
        $(".alliedFGB-pic").each(function (i) {
            $(this).attr('id', "alliedFGB-pic" + (i + 1));
        });
        $(".alliedBG-number").each(function (i) {
            $(this).attr('id', "alliedBG-number" + i);
            $(this).text(3 + "-" + (i + 2));
        });
        $(".alliedBG").each(function (i) {
            $(this).attr('id', "alliedBG" + (i + 1));
        });
        $(".alliedBG-pic").each(function (i) {
            $(this).attr('id', "alliedBG-pic" + (i + 1));
        });

        $(".axisFGA-number").each(function (i) {
            $(this).attr('id', "axisFGA-number" + i);
            $(this).text(1 + "-" + (i + 2));
        });
        $(".axisFGA").each(function (i) {
            $(this).attr('id', "axisFGA" + (i + 1));
        });
        $(".axisFGA-pic").each(function (i) {
            $(this).attr('id', "axisFGA-pic" + (i + 1));
        });

        $(".axisFGB-number").each(function (i) {
            $(this).attr('id', "axisFGB-number" + i);
            $(this).text(2 + "-" + (i + 2));
        });
        $(".axisFGB").each(function (i) {
            $(this).attr('id', "axisFGB" + (i + 1));
        });
        $(".axisFGB-pic").each(function (i) {
            $(this).attr('id', "axisFGB-pic" + (i + 1));
        });

        $(".axisBG-number").each(function (i) {
            $(this).attr('id', "axisBG-number" + i);
            $(this).text(3 + "-" + (i + 2));
        });
        $(".axisBG").each(function (i) {
            $(this).attr('id', "axisBG" + (i + 1));
        });
        $(".axisBG-pic").each(function (i) {
            $(this).attr('id', "axisBG-pic" + (i + 1));
        });
    };

});