function sortPilotsIntoRole(json, randomNumber) {
    jsonLength = Object.keys(json.feed.entry).length;

    var axisFGATemplateLead = document.getElementsByTagName("template-axisFGA-Lead")[0];
    var axisFGATemplate = document.getElementsByTagName("template-axisFGA")[0];

    var axisFGBTemplateLead = document.getElementsByTagName("template-axisFGB-Lead")[0];
    var axisFGBTemplate = document.getElementsByTagName("template-axisFGB")[0];

    var axisAGTemplateLead = document.getElementsByTagName("template-axisAttackerGroup-Lead")[0];
    var axisAGTemplate = document.getElementsByTagName("template-axisAttackerGroup")[0];

    var axisBGTemplateLead = document.getElementsByTagName("template-axisBG-Lead")[0];
    var axisBGTemplate = document.getElementsByTagName("template-axisBG")[0];

    //Axis Fight Group A
    axisFGALeader = 0;
    axisFGA = 0;
    axisFGALeadElementNumber = 0;
    axisFGAElementNumber = 1;

    //Axis Fighter Group B
    axisFGBLeader = 0;
    axisFGB = 0;
    axisFGBLeadElementNumber = 0;
    axisFGBElementNumber = 1;

    //Axis Attacker Group
    axisAGLeader = 0;
    axisAG = 0;
    axisAGLeadElementNumber = 0;
    axisAGElementNumber = 1;

    //Axis Bomber Group
    axisBGLeader = 0;
    axisBG = 0;
    axisBGLeadElementNumber = 0;
    axisBGElementNumber = 1;

    var alliedFGATemplateLead = document.getElementsByTagName("template-alliedFGA-Lead")[0];
    var alliedFGATemplate = document.getElementsByTagName("template-alliedFGA")[0];

    var alliedFGBTemplateLead = document.getElementsByTagName("template-alliedFGB-Lead")[0];
    var alliedFGBTemplate = document.getElementsByTagName("template-alliedFGB")[0];

    var alliedAGTemplateLead = document.getElementsByTagName("template-alliedAttackerGroup-Lead")[0];
    var alliedAGTemplate = document.getElementsByTagName("template-alliedAttackerGroup")[0];

    var alliedBGTemplateLead = document.getElementsByTagName("template-alliedBG-Lead")[0];
    var alliedBGTemplate = document.getElementsByTagName("template-alliedBG")[0];

    //Allied Fight Group A
    alliedFGALeader = 0;
    alliedFGA = 0;
    alliedFGALeadElementNumber = 0;
    alliedFGAElementNumber = 1;

    //Allied Fighter Group B
    alliedFGBLeader = 0;
    alliedFGB = 0;
    alliedFGBLeadElementNumber = 0;
    alliedFGBElementNumber = 1;

    //Allied Attacker Group
    alliedAGLeader = 0;
    alliedAG = 0;
    alliedAGLeadElementNumber = 0;
    alliedAGElementNumber = 1;

    //Allied Bomber Group
    alliedBGLeader = 0;
    alliedBG = 0;
    alliedBGLeadElementNumber = 0;
    alliedBGElementNumber = 1;
    for (i = 0; i < jsonLength; i++) {
        createIds();
        side = json.feed.entry[i].gsx$whichsideoftheconflictwouldyouliketobeon.$t;
        imageNumber = parseInt(randomNumber[i]);
        axisFG = json.feed.entry[i].gsx$selectflightgroup_2.$t;
        axisName = firstNamesGermany[imageNumber] + " \"" + json.feed.entry[i].gsx$enterpilotnickname_2.$t + "\" " + lastNamesGermany[imageNumber];

        // AXIS pilot chosen position
        axisFighterSquadronAPosition = json.feed.entry[i].gsx$selectpilotposition.$t;
        axisFighterSquadronBPosition = json.feed.entry[i].gsx$selectpilotposition_2.$t;
        axisAttackSquadronBPosition = json.feed.entry[i].gsx$selectpilotposition_3.$t;
        axisBomberSquadronBPosition = json.feed.entry[i].gsx$selectpilotposition_4.$t;

        // ALLIED Fighter groups
        alliedFG = json.feed.entry[i].gsx$selectflightgroup.$t;
        alliedName = firstNamesUSA[imageNumber] + " \"" + json.feed.entry[i].gsx$enterpilotnickname.$t + "\" " + lastNamesUSA[imageNumber];

        // ALLIED pilot chosen position
        alliedFighterSquadronAPosition = json.feed.entry[i].gsx$selectpilotposition.$t;
        alliedFighterSquadronBPosition = json.feed.entry[i].gsx$selectpilotposition_2.$t;
        alliedAttackSquadronBPosition = json.feed.entry[i].gsx$selectpilotposition_3.$t;
        alliedBomberSquadronBPosition = json.feed.entry[i].gsx$selectpilotposition_4.$t;

        // Flights in each Squadron
        flightForFighterSquadronA = json.feed.entry[i].gsx$whichflightdoyouwishtobein.$t.split(" ")[0];
        flightForFighterSquadronB = json.feed.entry[i].gsx$whichflightdoyouwishtobein_2.$t.split(" ")[0];
        flightForAttackSquadron = json.feed.entry[i].gsx$whichflightdoyouwishtobein_3.$t.split(" ")[0];
        flightForBomberSquadron = json.feed.entry[i].gsx$whichflightdoyouwishtobein_4.$t.split(" ")[0];

        if (side == axisSide) {
            //Axis Fighter Group A
            if (axisFG.includes(axisTeamA)) {
                if (axisFighterSquadronAPosition.includes("Squadron")) {
                    document.getElementById('axisfighterA-leader').innerHTML = axisName;
                    document.getElementById('axisfighterA-leader-pic').src = 'imgs/American/American' + imageNumber + ".jpg";
                } else {
                    if (axisFighterSquadronAPosition.includes("Flight Lead") && checkLeader(flightForFighterSquadronA)) {
                        var axisFGALeadDivs = axisFGATemplateLead.querySelector('div');
                        var templateSet;
                        templateSet = document.importNode(axisFGALeadDivs, true);
                        document.getElementById("axisfighterA-lead").appendChild(templateSet);
                        document.getElementById("axisFGA-lead" + axisFGALeadElementNumber).innerHTML = axisName;
                        document.getElementById('axisFGA-pic-lead' + axisFGALeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
                        setFlightLeaderText("axisFGA-number-lead", axisFGALeadElementNumber);
                        axisFGALeadElementNumber++;
                    } else {
                        var axisFGADivs = axisFGATemplate.querySelector('div');
                        var axisfightergroupAD;
                        axisfightergroupAD = document.importNode(axisFGADivs, true);
                        document.getElementById("axisfighterA-wingmen").appendChild(axisfightergroupAD);
                        if (axisFGAElementNumber == 1) {
                            axisFGAElementNumber++;
                        }
                        assignWingmanRole(axisFGA, axisFGAElementNumber, "axisFGA-number", "axisFGA", axisName, 'axisFGA-pic', 'American');
                        axisFGAElementNumber++;
                        axisFGA++;
                    }
                }
            }

            //Axis Fighter Group B
            if (axisFG.includes(axisTeamB)) {
                if (axisFighterSquadronBPosition.includes("Squadron")) {
                    document.getElementById('axisfighterB-leader').innerHTML = axisName;
                    document.getElementById('axisfighterB-leader-pic').src = 'imgs/American/American' + imageNumber + ".jpg";
                } else {
                    if (axisFighterSquadronBPosition.includes("Flight Lead") && checkLeader(flightForFighterSquadronB)) {
                        var axisFGBLeadDivs = axisFGBTemplateLead.querySelector('div');
                        var templateSet;
                        templateSet = document.importNode(axisFGBLeadDivs, true);
                        document.getElementById("axisfighterB-lead").appendChild(templateSet);
                        document.getElementById("axisFGB-lead" + axisFGBLeadElementNumber).innerHTML = axisName;
                        document.getElementById('axisFGB-pic-lead' + axisFGBLeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
                        setFlightLeaderText("axisFGB-number-lead", axisFGBLeadElementNumber);
                        axisFGBLeadElementNumber++;
                    } else {
                        var axisFGBDivs = axisFGBTemplate.querySelector('div');
                        var templateSet;
                        templateSet = document.importNode(axisFGBDivs, true);
                        document.getElementById("axisfighterB-wingmen").appendChild(templateSet);
                        if (axisFGBElementNumber == 1) {
                            axisFGBElementNumber++;
                        }
                        assignWingmanRole(axisFGB, axisFGBElementNumber, "axisFGB-number", "axisFGB", axisName, 'axisFGB-pic', 'American');
                        axisFGBElementNumber++;
                        axisFGB++;
                    }
                }
            }


            //Axis Attacker Group
            if (axisFG.includes(axisAttackers)) {
                if (axisAttackSquadronBPosition.includes("Squadron")) {
                    document.getElementById('axisAttackerGroup-leader').innerHTML = axisName;
                    document.getElementById('axisAttackerGroup-leader-pic').src = 'imgs/American/American' + imageNumber + ".jpg";
                } else {
                    if (axisAttackSquadronBPosition.includes("Flight Lead") && checkLeader(flightForAttackSquadron)) {
                        var axisAGLeadDivs = axisAGTemplateLead.querySelector('div');
                        var templateSet;
                        templateSet = document.importNode(axisAGLeadDivs, true);
                        document.getElementById("axisAttackerGroup-lead").appendChild(templateSet);
                        document.getElementById("axisAG-lead" + axisAGLeadElementNumber).innerHTML = axisName;
                        document.getElementById('axisAG-pic-lead' + axisAGLeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
                        setFlightLeaderText("axisAG-number-lead", axisAGLeadElementNumber);
                        axisAGLeadElementNumber++;
                    } else {
                        var axisAGDivs = axisAGTemplate.querySelector('div');
                        var templateSet;
                        templateSet = document.importNode(axisAGDivs, true);
                        document.getElementById("axisAttackerGroup-wingmen").appendChild(templateSet);
                        if (axisAGElementNumber == 1) {
                            axisAGElementNumber++;
                        }
                        assignWingmanRole(axisAG, axisAGElementNumber, "axisAG-number", "axisAG", axisName, 'axisAG-pic', 'American');
                        axisAGElementNumber++;
                        axisAG++;
                    }
                }
            }

            //Axis Bomber Group
            if (axisFG.includes(axisBomber)) {
                if (axisBomberSquadronBPosition.includes("Squadron")) {
                    document.getElementById('axisbomber-leader').innerHTML = axisName;
                    document.getElementById('axisbomber-leader-pic').src = 'imgs/American/American' + imageNumber + ".jpg";
                } else {
                    if (axisBomberSquadronBPosition.includes("Flight Lead") && checkLeader(flightForBomberSquadron)) {
                        var axisBGLeadDivs = axisBGTemplateLead.querySelector('div');
                        var templateSet;
                        templateSet = document.importNode(axisBGLeadDivs, true);
                        document.getElementById("axisbomber-lead").appendChild(templateSet);
                        document.getElementById("axisBG-lead" + axisBGLeadElementNumber).innerHTML = axisName;
                        document.getElementById('axisBG-pic-lead' + axisBGLeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
                        setFlightLeaderText("axisBG-number-lead", axisBGLeadElementNumber);
                        axisBGLeadElementNumber++;
                    } else {
                        var axisBGDivs = axisBGTemplate.querySelector('div');
                        var templateSet;
                        templateSet = document.importNode(axisBGDivs, true);
                        document.getElementById("axisbomber-wingmen").appendChild(templateSet);
                        if (axisBGElementNumber == 1) {
                            axisBGElementNumber++;
                        }
                        assignWingmanRole(axisBG, axisBGElementNumber, "axisBG-number", "axisBG", axisName, 'axisBG-pic', 'American');
                        axisBGElementNumber++;
                        axisBG++;
                    }
                }
            }
        }

        if (side == alliedSide) {
            //Allied Fighter Group A
            if (alliedFG.includes(alliedTeamA)) {
                if (alliedFighterSquadronAPosition.includes("Squadron")) {
                    document.getElementById('alliedfighterA-leader').innerHTML = alliedName;
                    document.getElementById('alliedfighterA-leader-pic').src = 'imgs/American/American' + imageNumber + ".jpg";
                } else {
                    if (alliedFighterSquadronAPosition.includes("Flight Lead") && checkLeader(flightForFighterSquadronA)) {
                        var alliedFGALeadDivs = alliedFGATemplateLead.querySelector('div');
                        var templateSet;
                        templateSet = document.importNode(alliedFGALeadDivs, true);
                        document.getElementById("alliedfighterA-lead").appendChild(templateSet);
                        document.getElementById("alliedFGA-lead" + alliedFGALeadElementNumber).innerHTML = alliedName;
                        document.getElementById('alliedFGA-pic-lead' + alliedFGALeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
                        setFlightLeaderText("alliedFGA-number-lead", alliedFGALeadElementNumber);
                        alliedFGALeadElementNumber++;
                    } else {
                        var alliedFGADivs = alliedFGATemplate.querySelector('div');
                        var alliedfightergroupAD;
                        alliedfightergroupAD = document.importNode(alliedFGADivs, true);
                        document.getElementById("alliedfighterA-wingmen").appendChild(alliedfightergroupAD);
                        if (alliedFGAElementNumber == 1) {
                            alliedFGAElementNumber++;
                        }
                        assignWingmanRole(alliedFGA, alliedFGAElementNumber, "alliedFGA-number", "alliedFGA", alliedName, 'alliedFGA-pic', 'American');
                        alliedFGAElementNumber++;
                        alliedFGA++;
                    }
                }
            }

            //Allied Fighter Group B
            if (alliedFG.includes(alliedTeamB)) {
                if (alliedFighterSquadronBPosition.includes("Squadron")) {
                    document.getElementById('alliedfighterB-leader').innerHTML = alliedName;
                    document.getElementById('alliedfighterB-leader-pic').src = 'imgs/American/American' + imageNumber + ".jpg";
                } else {
                    if (alliedFighterSquadronBPosition.includes("Flight Lead") && checkLeader(flightForFighterSquadronB)) {
                        var alliedFGBLeadDivs = alliedFGBTemplateLead.querySelector('div');
                        var templateSet;
                        templateSet = document.importNode(alliedFGBLeadDivs, true);
                        document.getElementById("alliedfighterB-lead").appendChild(templateSet);
                        document.getElementById("alliedFGB-lead" + alliedFGBLeadElementNumber).innerHTML = alliedName;
                        document.getElementById('alliedFGB-pic-lead' + alliedFGBLeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
                        setFlightLeaderText("alliedFGB-number-lead", alliedFGBLeadElementNumber);
                        alliedFGBLeadElementNumber++;
                    } else {
                        var alliedFGBDivs = alliedFGBTemplate.querySelector('div');
                        var templateSet;
                        templateSet = document.importNode(alliedFGBDivs, true);
                        document.getElementById("alliedfighterB-wingmen").appendChild(templateSet);
                        if (alliedFGBElementNumber == 1) {
                            alliedFGBElementNumber++;
                        }
                        assignWingmanRole(alliedFGB, alliedFGBElementNumber, "alliedFGB-number", "alliedFGB", alliedName, 'alliedFGB-pic', 'American');
                        alliedFGBElementNumber++;
                        alliedFGB++;
                    }
                }
            }


            //Allied Attacker Group
            if (alliedFG.includes(alliedAttackers)) {
                if (alliedAttackSquadronBPosition.includes("Squadron")) {
                    document.getElementById('alliedAttackerGroup-leader').innerHTML = alliedName;
                    document.getElementById('alliedAttackerGroup-leader-pic').src = 'imgs/American/American' + imageNumber + ".jpg";
                } else {
                    if (alliedAttackSquadronBPosition.includes("Flight Lead") && checkLeader(flightForAttackSquadron)) {
                        var alliedAGLeadDivs = alliedAGTemplateLead.querySelector('div');
                        var templateSet;
                        templateSet = document.importNode(alliedAGLeadDivs, true);
                        document.getElementById("alliedAttackerGroup-lead").appendChild(templateSet);
                        document.getElementById("alliedAG-lead" + alliedAGLeadElementNumber).innerHTML = alliedName;
                        document.getElementById('alliedAG-pic-lead' + alliedAGLeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
                        setFlightLeaderText("alliedAG-number-lead", alliedAGLeadElementNumber);
                        alliedAGLeadElementNumber++;
                    } else {
                        var alliedAGDivs = alliedAGTemplate.querySelector('div');
                        var templateSet;
                        templateSet = document.importNode(alliedAGDivs, true);
                        document.getElementById("alliedAttackerGroup-wingmen").appendChild(templateSet);
                        if (alliedAGElementNumber == 1) {
                            alliedAGElementNumber++;
                        }
                        assignWingmanRole(alliedAG, alliedAGElementNumber, "alliedAG-number", "alliedAG", alliedName, 'alliedAG-pic', 'American');
                        alliedAGElementNumber++;
                        alliedAG++;
                    }
                }
            }

            //Allied Bomber Group
            if (alliedFG.includes(alliedBomber)) {
                if (alliedBomberSquadronBPosition.includes("Squadron")) {
                    document.getElementById('alliedbomber-leader').innerHTML = alliedName;
                    document.getElementById('alliedbomber-leader-pic').src = 'imgs/American/American' + imageNumber + ".jpg";
                } else {
                    if (alliedBomberSquadronBPosition.includes("Flight Lead") && checkLeader(flightForBomberSquadron)) {
                        var alliedBGLeadDivs = alliedBGTemplateLead.querySelector('div');
                        var templateSet;
                        templateSet = document.importNode(alliedBGLeadDivs, true);
                        document.getElementById("alliedbomber-lead").appendChild(templateSet);
                        document.getElementById("alliedBG-lead" + alliedBGLeadElementNumber).innerHTML = alliedName;
                        document.getElementById('alliedBG-pic-lead' + alliedBGLeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
                        setFlightLeaderText("alliedBG-number-lead", alliedBGLeadElementNumber);
                        alliedBGLeadElementNumber++;
                    } else {
                        var alliedBGDivs = alliedBGTemplate.querySelector('div');
                        var templateSet;
                        templateSet = document.importNode(alliedBGDivs, true);
                        document.getElementById("alliedbomber-wingmen").appendChild(templateSet);
                        if (alliedBGElementNumber == 1) {
                            alliedBGElementNumber++;
                        }
                        assignWingmanRole(alliedBG, alliedBGElementNumber, "alliedBG-number", "alliedBG", alliedName, 'alliedBG-pic', 'American');
                        alliedBGElementNumber++;
                        alliedBG++;
                    }
                }
            }
        }
    }
    sortAxisWingmen();
    sortAlliedWingmen();

}
