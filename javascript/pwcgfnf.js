
$(document).ready(function () {
    $.getJSON('https://spreadsheets.google.com/feeds/list/1C4ke63VpXK0yZxbGX1AE03Rf7qF_8t90-M0Yv6QzJzE/ootif9z/public/values?alt=json', function (json) {
        // console.log(json);
        createGridsFromTemplate(json);
    });

    $.get('data/Names/FirstNamesUSA.txt', function (fnUSA) {
        firstNamesUSA = fnUSA.split('\n');
    });
    $.get('data/Names/LastNamesUSA.txt', function (lnUSA) {
        lastNamesUSA = lnUSA.split('\n');
    });
    $.get('data/Names/FirstNamesGermany.txt', function (fnGermany) {
        firstNamesGermany = fnGermany.split('\n');
    });
    $.get('data/Names/LastNamesGermany.txt', function (lnGermany) {
        lastNamesGermany = lnGermany.split('\n');
    });


    function createGridsFromTemplate(json) {
        jsonLength = Object.keys(json.feed.entry).length;
        // console.log(firstNamesUSA);
        //allied planes
        alliedPlaneA = "P51";
        alliedPlaneB = "P38";
        alliedBomber = "A20";
        //axis planes
        axisPlaneA = "Fw190A8";
        axisPlaneB = "Bf109G14";
        axisBomber = "Ju88";

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
            side = json.feed.entry[i].gsx$side.$t;
            imageLink = json.feed.entry[i].gsx$image.$t;
            alliedFG = json.feed.entry[i].gsx$alliedfg.$t;
            alliedName = firstNamesUSA[imageLink] + " \"" + json.feed.entry[i].gsx$alliedname.$t + "\" " + lastNamesUSA[imageLink];            
            alliedPosition = json.feed.entry[i].gsx$alliedposition.$t;
            axisFG = json.feed.entry[i].gsx$axisfg.$t;
            axisName = firstNamesGermany[imageLink] + " \"" + json.feed.entry[i].gsx$axisname.$t + "\" " + lastNamesGermany[imageLink]; 
            axisPosition = json.feed.entry[i].gsx$axisposition.$t;
            
            if (side == "Allied") {
                if (alliedFG.includes(alliedPlaneA)) {
                    var alliedFGADivs = alliedFGATemplate.querySelector('div');
                    var alliedfightergroupAD;

                    if (alliedPosition.includes("Lead") &&
                        !alliedFGALeaderFilled) {
                        alliedFGALeaderFilled = true;
                        document.getElementById('alliedfighterA-leader').innerHTML = alliedName;
                        document.getElementById('alliedfighterA-leader-pic').src = 'imgs/American/American' + imageLink + ".jpg";
                    }
                    else {
                        alliedfightergroupAD = document.importNode(alliedFGADivs, true);
                        document.getElementById("alliedfighterA-wingmen").appendChild(alliedfightergroupAD);
                        createIds();
                        alliedFGA++;
                        document.getElementById("alliedFGA" + alliedFGA).innerHTML = alliedName;
                        document.getElementById('alliedFGA-pic' + alliedFGA).src = 'imgs/American/American' + imageLink + ".jpg";
                    }
                }
                else if (alliedFG.includes(alliedPlaneB)) {
                    var alliedFGBDivs = alliedFGBTemplate.querySelector('div');
                    var alliedfightergroupBD;

                    if (alliedPosition.includes("Lead") &&
                        !alliedFGBLeaderFilled) {
                        alliedFGBLeaderFilled = true;
                        document.getElementById('alliedfighterB-leader').innerHTML = alliedName;
                        document.getElementById('alliedfighterB-leader-pic').src = 'imgs/American/American' + imageLink + ".jpg";
                    }
                    else {
                        alliedfightergroupBD = document.importNode(alliedFGBDivs, true);
                        document.getElementById("alliedfighterB-wingmen").appendChild(alliedfightergroupBD);
                        createIds();
                        alliedFGB++;
                        document.getElementById("alliedFGB" + alliedFGB).innerHTML = alliedName;
                        document.getElementById('alliedFGB-pic' + alliedFGB).src = 'imgs/American/American' + imageLink + ".jpg";
                    }
                }
                else {
                    var alliedBomberDivs = alliedBomberTemplate.querySelector('div');
                    var alliedBomberD;

                    if (alliedPosition.includes("Lead") &&
                        !alliedBGLeaderFilled) {
                        alliedBGLeaderFilled = true;
                        document.getElementById('alliedbomber-leader').innerHTML = alliedName;
                        document.getElementById('alliedbomber-leader-pic').src = 'imgs/American/American' + imageLink + ".jpg";
                    }
                    else {
                        alliedBomberD = document.importNode(alliedBomberDivs, true);
                        document.getElementById("alliedbomber-wingmen").appendChild(alliedBomberD);
                        createIds();
                        alliedB++;
                        document.getElementById("alliedBG" + alliedB).innerHTML = alliedName;
                        document.getElementById('alliedBG-pic' + alliedB).src = 'imgs/American/American' + imageLink + ".jpg";
                    }
                }
            }

            //AXIS SIDE
            if (side == "Axis") {
                if (axisFG.includes(axisPlaneA)) {
                    var axisFGADivs = axisFGATemplate.querySelector('div');
                    var axisfightergroupAD;

                    if (axisPosition.includes("Lead") &&
                        !axisFGALeaderFilled) {
                        axisFGALeaderFilled = true;
                        document.getElementById('axisfighterA-leader').innerHTML = axisName;
                        document.getElementById('axisfighterA-leader-pic').src = 'imgs/German/German' + imageLink + ".jpg";
                    }
                    else {
                        axisfightergroupAD = document.importNode(axisFGADivs, true);
                        document.getElementById("axisfighterA-wingmen").appendChild(axisfightergroupAD);
                        createIds();
                        axisFGA++;
                        document.getElementById("axisFGA" + axisFGA).innerHTML = axisName;
                        document.getElementById('axisFGA-pic' + axisFGA).src = 'imgs/German/German' + imageLink + ".jpg";
                    }
                }
                else if (axisFG.includes(axisPlaneB)) {
                    var axisFGBDivs = axisFGBTemplate.querySelector('div');
                    var axisfightergroupBD;

                    if (axisPosition.includes("Lead") &&
                        !axisFGBLeaderFilled) {
                        axisFGBLeaderFilled = true;
                        document.getElementById('axisfighterB-leader').innerHTML = axisName;
                        document.getElementById('axisfighterB-leader-pic').src = 'imgs/German/German' + imageLink + ".jpg";
                    }
                    else {
                        axisfightergroupBD = document.importNode(axisFGBDivs, true);
                        document.getElementById("axisfighterB-wingmen").appendChild(axisfightergroupBD);
                        createIds();
                        axisFGB++;
                        document.getElementById("axisFGB" + axisFGB).innerHTML = axisName;
                        document.getElementById('axisFGB-pic' + axisFGB).src = 'imgs/German/German' + imageLink + ".jpg";
                    }
                }
                else {
                    var axisBomberDivs = axisBomberTemplate.querySelector('div');
                    var axisBomberD;

                    if (axisPosition.includes("Lead") &&
                        !axisBGLeaderFilled) {
                        axisBGLeaderFilled = true;
                        document.getElementById('axisbomber-leader').innerHTML = axisName;
                        document.getElementById('axisbomber-leader-pic').src = 'imgs/German/German' + imageLink + ".jpg";
                    }
                    else {
                        axisBomberD = document.importNode(axisBomberDivs, true);
                        document.getElementById("axisbomber-wingmen").appendChild(axisBomberD);
                        createIds();
                        axisB++;
                        document.getElementById("axisBG" + axisB).innerHTML = axisName;
                        document.getElementById('axisBG-pic' + axisB).src = 'imgs/German/German' + imageLink + ".jpg";
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
