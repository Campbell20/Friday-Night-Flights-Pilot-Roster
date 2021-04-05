function setAlliedTemplates(json, randomNumber) {
  //console.log(json);
  jsonLength = Object.keys(json.feed.entry).length;
 
  var alliedFGATemplateLead = document.getElementsByTagName("template-alliedFGA-Lead")[0];
  var alliedFGATemplate = document.getElementsByTagName("template-alliedFGA")[0];
  var alliedFGBTemplateLead = document.getElementsByTagName("template-alliedFGB-Lead")[0];
  var alliedFGBTemplate = document.getElementsByTagName("template-alliedFGB")[0];
  var alliedAGTemplateLead = document.getElementsByTagName("template-alliedAttackerGroup-Lead")[0];
  var alliedAGTemplate = document.getElementsByTagName("template-alliedAttackerGroup")[0];
  var alliedBGTemplateLead = document.getElementsByTagName("template-alliedBG-Lead")[0];
  var alliedBGTemplate = document.getElementsByTagName("template-alliedBG")[0]; //Allied Fight Group A

  alliedFGAnumbers = 0;
  alliedFGBnumbers = 0;
  alliedAGnumbers = 0;
  alliedBGnumbers = 0;


  alliedFGALeader = 0;
  alliedFGA = 0;
  alliedFGALeadElementNumber = 0;
  alliedFGAElementNumber = 1; //Allied Fighter Group B

  alliedFGBLeader = 0;
  alliedFGB = 0;
  alliedFGBLeadElementNumber = 0;
  alliedFGBElementNumber = 1; //Allied Attacker Group

  alliedAGLeader = 0;
  alliedAG = 0;
  alliedAGLeadElementNumber = 0;
  alliedAGElementNumber = 1; //Allied Bomber Group

  alliedBGLeader = 0;
  alliedBG = 0;
  alliedBGLeadElementNumber = 0;
  alliedBGElementNumber = 1;

  alliedNumbers = 0

  _randomNumber = randomNumber.map(function (x) {
    return parseInt(x, 10);
  });



  for (i = 0; i < jsonLength; i++) {
    createIds();
    side = json.feed.entry[i].gsx$whichsideoftheconflictwouldyouliketobeon.$t;
    imageNumber = _randomNumber[i];
    if (imageNumber == undefined || imageNumber == NaN) {
      imageNumber = getRandomInt(1, 50);
    }
    alliedFG = json.feed.entry[i].gsx$selectflightgroup.$t;
    alliedName = json.feed.entry[i].gsx$enterpilotnickname.$t // pilot chosen position

    alliedFighterSquadronAPosition = json.feed.entry[i].gsx$selectpilotposition.$t;
    alliedFighterSquadronBPosition = json.feed.entry[i].gsx$selectpilotposition_2.$t;
    alliedAttackSquadronPosition = json.feed.entry[i].gsx$selectpilotposition_3.$t;
    alliedBomberSquadronPosition = json.feed.entry[i].gsx$selectpilotposition_4.$t; // Flights in each Squadron

    flightForFighterSquadronA = json.feed.entry[i].gsx$whichflightdoyouwishtobein.$t.split(" ")[0];
    flightForFighterSquadronB = json.feed.entry[i].gsx$whichflightdoyouwishtobein_2.$t.split(" ")[0];
    flightForAttackSquadron = json.feed.entry[i].gsx$whichflightdoyouwishtobein_3.$t.split(" ")[0];
    flightForBomberSquadron = json.feed.entry[i].gsx$whichflightdoyouwishtobein_4.$t.split(" ")[0];

    skinChoice = setAlliedPlaneSkin();

    if (side == alliedSide) {
      alliedNumbers++;
    }

    if (side == alliedSide) {
      //Allied Fighter Group A
      if (alliedFG.includes(alliedTeamA)) {
        if (alliedFighterSquadronAPosition.includes("Flight Lead") && checkLeader(flightForFighterSquadronA)) {
          var alliedFGALeadDivs = alliedFGATemplateLead.querySelector('div');
          var templateSet;
          templateSet = document.importNode(alliedFGALeadDivs, true);
          document.getElementById("alliedfighterA-lead").appendChild(templateSet);
          document.getElementById("alliedFGA-lead" + alliedFGALeadElementNumber).innerHTML = alliedName;
          document.getElementById('alliedFGA-pic-lead' + alliedFGALeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
          setFlightLeaderText("alliedFGA-number-lead", alliedFGALeadElementNumber);
          document.getElementById("alliedFGA-skin-lead" + alliedFGALeadElementNumber).innerHTML = skinChoice;
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
          document.getElementById("alliedFGA-skin" + alliedFGA).innerHTML = skinChoice;
          alliedFGAElementNumber++;
          alliedFGA++;

        }
        alliedFGAnumbers++;
        document.getElementById('alliedFGAnumbers').innerHTML = alliedFGAnumbers;
      } //Allied Fighter Group B


      if (alliedFG.includes(alliedTeamB)) {
        if (alliedFighterSquadronBPosition.includes("Flight Lead") && checkLeader(flightForFighterSquadronB)) {
          var alliedFGBLeadDivs = alliedFGBTemplateLead.querySelector('div');
          var templateSet;
          templateSet = document.importNode(alliedFGBLeadDivs, true);
          document.getElementById("alliedfighterB-lead").appendChild(templateSet);
          document.getElementById("alliedFGB-lead" + alliedFGBLeadElementNumber).innerHTML = alliedName;
          document.getElementById('alliedFGB-pic-lead' + alliedFGBLeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
          setFlightLeaderText("alliedFGB-number-lead", alliedFGBLeadElementNumber);
          document.getElementById("alliedFGB-skin-lead" + alliedFGBLeadElementNumber).innerHTML = skinChoice;
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
          document.getElementById("alliedFGB-skin" + alliedFGB).innerHTML = skinChoice;
          alliedFGBElementNumber++;
          alliedFGB++;
        }
        alliedFGBnumbers++;
        document.getElementById('alliedFGBnumbers').innerHTML = alliedFGBnumbers;

      } //Allied Attacker Group


      if (alliedFG.includes(alliedAttackers)) {
        if (alliedAttackSquadronPosition.includes("Flight Lead") && checkLeader(flightForAttackSquadron)) {
          var alliedAGLeadDivs = alliedAGTemplateLead.querySelector('div');
          var templateSet;
          templateSet = document.importNode(alliedAGLeadDivs, true);
          document.getElementById("alliedAttackerGroup-lead").appendChild(templateSet);
          document.getElementById("alliedAG-lead" + alliedAGLeadElementNumber).innerHTML = alliedName;
          document.getElementById('alliedAG-pic-lead' + alliedAGLeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
          setFlightLeaderText("alliedAG-number-lead", alliedAGLeadElementNumber);
          document.getElementById("alliedAG-skin-lead" + alliedAGLeadElementNumber).innerHTML = skinChoice;
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
          document.getElementById("alliedAG-skin" + alliedAG).innerHTML = skinChoice;
          alliedAGElementNumber++;
          alliedAG++;
        }
        alliedAGnumbers++;
        document.getElementById('alliedAGnumbers').innerHTML = alliedAGnumbers;

      }

      //Allied Bomber Group
      if (alliedFG.includes(alliedBomber)) {
        if (alliedBomberSquadronPosition.includes("Flight Lead") && checkLeader(flightForBomberSquadron)) {
          var alliedBGLeadDivs = alliedBGTemplateLead.querySelector('div');
          var templateSet;
          templateSet = document.importNode(alliedBGLeadDivs, true);
          document.getElementById("alliedbomber-lead").appendChild(templateSet);
          document.getElementById("alliedBG-lead" + alliedBGLeadElementNumber).innerHTML = alliedName;
          document.getElementById('alliedBG-pic-lead' + alliedBGLeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
          setFlightLeaderText("alliedBG-number-lead", alliedBGLeadElementNumber);
          document.getElementById("alliedBG-skin-lead" + alliedBGLeadElementNumber).innerHTML = skinChoice;
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
          document.getElementById("alliedBG-skin" + alliedBG).innerHTML = skinChoice;
          alliedBGElementNumber++;
          alliedBG++;

        }
        alliedBGnumbers++;
        document.getElementById('alliedBGnumbers').innerHTML = alliedBGnumbers;
      }
    }
  }
  document.getElementById("allied-numbers").innerHTML = alliedNumbers;
  setTimeout(() => {
    sortWingmen();
  }, 200);
}

function setAlliedPlaneSkin() {
  if (flightForFighterSquadronA == "Red") {
    return AlliedSquadronASkinRed;
  }
  if (flightForFighterSquadronA == "Blue") {
    return AlliedSquadronASkinBlue;
  }
  if (flightForFighterSquadronA == "Green") {
    return AlliedSquadronASkinGreen;
  }
  if (flightForFighterSquadronA == "Black") {
    return AlliedSquadronASkinBlack;
  }

  if (flightForFighterSquadronB == "Growler") {
    return AlliedSquadronBSkinGrowler;
  }
  if (flightForFighterSquadronB == "Raven") {
    return AlliedSquadronBSkinRaven;
  }
  if (flightForFighterSquadronB == "Eagle") {
    return AlliedSquadronBSkinEagle;
  }
  if (flightForFighterSquadronB == "Ripper") {
    return AlliedSquadronBSkinRipper;
  }

  if (flightForAttackSquadron == "Bear") {
    return AlliedAttackSquadronSkinBear;
  }
  if (flightForAttackSquadron == "Rabbit") {
    return AlliedAttackSquadronSkinRabbit;
  }
  if (flightForAttackSquadron == "Fox") {
    return AlliedAttackSquadronSkinFox;
  }
  if (flightForAttackSquadron == "Bison") {
    return AlliedAttackSquadronSkinBison;
  }

  if (flightForBomberSquadron == "Pelican") {
    return AlliedBomberSquadronSkinPelican;
  }
  if (flightForBomberSquadron == "Swan") {
    return AlliedBomberSquadronSkinSwan;
  }
  if (flightForBomberSquadron == "Seagull") {
    return AlliedBomberSquadronSkinSeagull;
  }
  if (flightForBomberSquadron == "Canary") {
    return AlliedBomberSquadronSkinCanary;
  }
}
