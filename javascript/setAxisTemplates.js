function setAxisTemplates(json, randomNumber) {
    // console.log(json);
    jsonLength = Object.keys(json.feed.entry).length;
    var axisFGATemplateLead = document.getElementsByTagName("template-axisFGA-Lead")[0];
    var axisFGATemplate = document.getElementsByTagName("template-axisFGA")[0];
    var axisFGBTemplateLead = document.getElementsByTagName("template-axisFGB-Lead")[0];
    var axisFGBTemplate = document.getElementsByTagName("template-axisFGB")[0];
    var axisAGTemplateLead = document.getElementsByTagName("template-axisAttackerGroup-Lead")[0];
    var axisAGTemplate = document.getElementsByTagName("template-axisAttackerGroup")[0];
    var axisBGTemplateLead = document.getElementsByTagName("template-axisBG-Lead")[0];
    var axisBGTemplate = document.getElementsByTagName("template-axisBG")[0]; //Axis Fight Group A

    axisFGALeader = 0;
    axisFGA = 0;
    axisFGALeadElementNumber = 0;
    axisFGAElementNumber = 1; //Axis Fighter Group B

    axisFGBLeader = 0;
    axisFGB = 0;
    axisFGBLeadElementNumber = 0;
    axisFGBElementNumber = 1; //Axis Attacker Group

    axisAGLeader = 0;
    axisAG = 0;
    axisAGLeadElementNumber = 0;
    axisAGElementNumber = 1; //Axis Bomber Group

    axisBGLeader = 0;
    axisBG = 0;
    axisBGLeadElementNumber = 0;
    axisBGElementNumber = 1;

    

    _randomNumber = randomNumber.map(function (x) { 
        return parseInt(x, 10); 
      });

    for (i = 0; i < jsonLength; i++) {
        createIds();
        side = json.feed.entry[i].gsx$whichsideoftheconflictwouldyouliketobeon.$t;
        imageNumber = _randomNumber[i];
        if(imageNumber == undefined || imageNumber == NaN){
            imageNumber = getRandomInt(1, 50);
        }
        axisFG = json.feed.entry[i].gsx$selectflightgroup_2.$t;
        axisName = firstNamesGermany[imageNumber] + " \"" + json.feed.entry[i].gsx$enterpilotnickname_2.$t + "\" " + lastNamesGermany[imageNumber]; // pilot chosen position

        axisFighterSquadronAPosition = json.feed.entry[i].gsx$selectpilotposition.$t;
        axisFighterSquadronBPosition = json.feed.entry[i].gsx$selectpilotposition_2.$t;
        axisAttackSquadronPosition = json.feed.entry[i].gsx$selectpilotposition_3.$t;
        axisBomberSquadronPosition = json.feed.entry[i].gsx$selectpilotposition_4.$t; // Flights in each Squadron

        flightForFighterSquadronA = json.feed.entry[i].gsx$whichflightdoyouwishtobein.$t.split(" ")[0];
        flightForFighterSquadronB = json.feed.entry[i].gsx$whichflightdoyouwishtobein_2.$t.split(" ")[0];
        flightForAttackSquadron = json.feed.entry[i].gsx$whichflightdoyouwishtobein_3.$t.split(" ")[0];
        flightForBomberSquadron = json.feed.entry[i].gsx$whichflightdoyouwishtobein_4.$t.split(" ")[0];

        if (side == axisSide) {
            //Axis Fighter Group A
            if (axisFG.includes(axisTeamA)) {
               if (axisFighterSquadronAPosition.includes("Flight Lead") && checkLeader(flightForFighterSquadronA)) {
                    var axisFGALeadDivs = axisFGATemplateLead.querySelector('div');
                    var templateSet;
                    templateSet = document.importNode(axisFGALeadDivs, true);
                    document.getElementById("axisfighterA-lead").appendChild(templateSet);
                    document.getElementById("axisFGA-lead" + axisFGALeadElementNumber).innerHTML = axisName;
                    document.getElementById('axisFGA-pic-lead' + axisFGALeadElementNumber).src = 'imgs/German/German' + imageNumber + ".jpg";
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

                    assignWingmanRole(axisFGA, axisFGAElementNumber, "axisFGA-number", "axisFGA", axisName, 'axisFGA-pic', 'German');
                    axisFGAElementNumber++;
                    axisFGA++;
                }
            }
            //Axis Fighter Group B


            if (axisFG.includes(axisTeamB)) {
                if (axisFighterSquadronBPosition.includes("Flight Lead") && checkLeader(flightForFighterSquadronB)) {
                    var axisFGBLeadDivs = axisFGBTemplateLead.querySelector('div');
                    var templateSet;
                    templateSet = document.importNode(axisFGBLeadDivs, true);
                    document.getElementById("axisfighterB-lead").appendChild(templateSet);
                    document.getElementById("axisFGB-lead" + axisFGBLeadElementNumber).innerHTML = axisName;
                    document.getElementById('axisFGB-pic-lead' + axisFGBLeadElementNumber).src = 'imgs/German/German' + imageNumber + ".jpg";
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

                    assignWingmanRole(axisFGB, axisFGBElementNumber, "axisFGB-number", "axisFGB", axisName, 'axisFGB-pic', 'German');
                    axisFGBElementNumber++;
                    axisFGB++;
                }
            }
            //Axis Attacker Group


            if (axisFG.includes(axisAttackers)) {
                if (axisAttackSquadronPosition.includes("Flight Lead") && checkLeader(flightForAttackSquadron)) {
                    var axisAGLeadDivs = axisAGTemplateLead.querySelector('div');
                    var templateSet;
                    templateSet = document.importNode(axisAGLeadDivs, true);
                    document.getElementById("axisAttackerGroup-lead").appendChild(templateSet);
                    document.getElementById("axisAG-lead" + axisAGLeadElementNumber).innerHTML = axisName;
                    document.getElementById('axisAG-pic-lead' + axisAGLeadElementNumber).src = 'imgs/German/German' + imageNumber + ".jpg";
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

                    assignWingmanRole(axisAG, axisAGElementNumber, "axisAG-number", "axisAG", axisName, 'axisAG-pic', 'German');
                    axisAGElementNumber++;
                    axisAG++;
                }

            } //Axis Bomber Group


            if (axisFG.includes(axisBomber)) {
               if (axisBomberSquadronPosition.includes("Flight Lead") && checkLeader(flightForBomberSquadron)) {
                    var axisBGLeadDivs = axisBGTemplateLead.querySelector('div');
                    var templateSet;
                    templateSet = document.importNode(axisBGLeadDivs, true);
                    document.getElementById("axisbomber-lead").appendChild(templateSet);
                    document.getElementById("axisBG-lead" + axisBGLeadElementNumber).innerHTML = axisName;
                    document.getElementById('axisBG-pic-lead' + axisBGLeadElementNumber).src = 'imgs/German/German' + imageNumber + ".jpg";
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

                    assignWingmanRole(axisBG, axisBGElementNumber, "axisBG-number", "axisBG", axisName, 'axisBG-pic', 'German');
                    axisBGElementNumber++;
                    axisBG++;
                }
            }

        }


    }

}
