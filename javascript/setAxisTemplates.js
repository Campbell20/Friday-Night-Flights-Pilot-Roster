function setAxisTemplates(json, randomNumber) {
    var _json = json;
    console.log(json);
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
  
    for (i = 0; i < jsonLength; i++) {
      createIds();
      side = json.feed.entry[i].gsx$whichsideoftheconflictwouldyouliketobeon.$t;
      imageNumber = parseInt(randomNumber[i]);
      axisFG = json.feed.entry[i].gsx$selectflightgroup_2.$t;
      axisName = firstNamesGermany[imageNumber] + " \"" + json.feed.entry[i].gsx$enterpilotnickname_2.$t + "\" " + lastNamesGermany[imageNumber]; // pilot chosen position
  
      axisFighterSquadronAPosition = json.feed.entry[i].gsx$selectpilotposition.$t;
      axisFighterSquadronBPosition = json.feed.entry[i].gsx$selectpilotposition_2.$t;
      axisAttackSquadronBPosition = json.feed.entry[i].gsx$selectpilotposition_3.$t;
      axisBomberSquadronBPosition = json.feed.entry[i].gsx$selectpilotposition_4.$t; // Flights in each Squadron
  
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
        } //Axis Fighter Group B
  
  
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
        } //Axis Attacker Group
  
  
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
        } //Axis Bomber Group
  
  
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
    }
  
    sortAxisWingmen();
  }


function sortAxisWingmen() {
    $('#axisFighterGroupLeadSortA').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisfighterA-Lead');

    $('#axisFighterGroupSortA').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisfighterA-wingmen');


    $('#axisFighterGroupLeadSortB').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisfighterB-Lead');

    $('#axisFighterGroupSortB').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisfighterB-wingmen');



    $('#axisAttackerGroupSortLead').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisAttackerGroup-Lead');

    $('#axisAttackerGroupSort').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisAttackerGroup-wingmen');


    $('#axisBomberGroupSortLead').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisbomber-Lead');

    $('#axisBomberGroupSort').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisbomber-wingmen');
}