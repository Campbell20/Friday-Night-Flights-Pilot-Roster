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
    alliedName = firstNamesUSA[imageNumber] + " \"" + json.feed.entry[i].gsx$enterpilotnickname.$t + "\" " + lastNamesUSA[imageNumber]; // pilot chosen position

    alliedFighterSquadronAPosition = json.feed.entry[i].gsx$selectpilotposition.$t;
    alliedFighterSquadronBPosition = json.feed.entry[i].gsx$selectpilotposition_2.$t;
    alliedAttackSquadronPosition = json.feed.entry[i].gsx$selectpilotposition_3.$t;
    alliedBomberSquadronPosition = json.feed.entry[i].gsx$selectpilotposition_4.$t; // Flights in each Squadron

    flightForFighterSquadronA = json.feed.entry[i].gsx$whichflightdoyouwishtobein.$t.split(" ")[0];
    flightForFighterSquadronB = json.feed.entry[i].gsx$whichflightdoyouwishtobein_2.$t.split(" ")[0];
    flightForAttackSquadron = json.feed.entry[i].gsx$whichflightdoyouwishtobein_3.$t.split(" ")[0];
    flightForBomberSquadron = json.feed.entry[i].gsx$whichflightdoyouwishtobein_4.$t.split(" ")[0];

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
  setTimeout(() => {
    sortAlliedWingmen();
  }, 200);
}


function sortAlliedWingmen() {
  var alliedFighterALeadlist = $('#alliedfighterA-lead');
  var alliedFighterALeadlistitems = alliedFighterALeadlist.children('div').get();

  alliedFighterALeadlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(alliedFighterALeadlistitems, function (index, item) {
    alliedFighterALeadlist.append(item);
  });


  var alliedFighterAlist = $('#alliedfighterA-wingmen');
  var alliedFighterAlistitems = alliedFighterAlist.children('div').get();

  alliedFighterAlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(alliedFighterAlistitems, function (index, item) {
    alliedFighterAlist.append(item);
  });


  var alliedFighterBLeadlist = $('#alliedfighterB-lead');
  var alliedFighterBLeadlistitems = alliedFighterBLeadlist.children('div').get();

  alliedFighterBLeadlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(alliedFighterBLeadlistitems, function (index, item) {
    alliedFighterBLeadlist.append(item);
  });


  var alliedFighterBlist = $('#alliedfighterB-wingmen');
  var alliedFighterBlistitems = alliedFighterBlist.children('div').get();

  alliedFighterBlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(alliedFighterBlistitems, function (index, item) {
    alliedFighterBlist.append(item);
  });


  var alliedAttackerLeadlist = $('#alliedAttackerGroup-lead');
  var alliedAttackerLeadlistitems = alliedAttackerLeadlist.children('div').get();

  alliedAttackerLeadlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(alliedAttackerLeadlistitems, function (index, item) {
    alliedAttackerLeadlist.append(item);
  });


  var alliedAttackerLeadlist = $('#alliedAttackerGroup-lead');
  var alliedAttackerLeadlistitems = alliedAttackerLeadlist.children('div').get();

  alliedAttackerLeadlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(alliedAttackerLeadlistitems, function (index, item) {
    alliedAttackerLeadlist.append(item);
  });


  var alliedBomberLeadlist = $('#alliedbomber-lead');
  var alliedBomberLeadlistitems = alliedBomberLeadlist.children('div').get();

  alliedBomberLeadlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(alliedBomberLeadlistitems, function (index, item) {
    alliedBomberLeadlist.append(item);
  });


  var alliedBomberlist = $('#alliedbomber-wingmen');
  var alliedBomberlistitems = alliedBomberlist.children('div').get();

  alliedBomberlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(alliedBomberlistitems, function (index, item) {
    alliedBomberlist.append(item);
  });


  var axisFighterALeadlist = $('#axisfighterA-lead');
  var axisFighterALeadlistitems = axisFighterALeadlist.children('div').get();

  axisFighterALeadlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(axisFighterALeadlistitems, function (index, item) {
    axisFighterALeadlist.append(item);
  });


  var axisFighterAlist = $('#axisfighterA-wingmen');
  var axisFighterAlistitems = axisFighterAlist.children('div').get();

  axisFighterAlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(axisFighterAlistitems, function (index, item) {
    axisFighterAlist.append(item);
  });


  var axisFighterBLeadlist = $('#axisfighterB-lead');
  var axisFighterBLeadlistitems = axisFighterBLeadlist.children('div').get();

  axisFighterBLeadlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(axisFighterBLeadlistitems, function (index, item) {
    axisFighterBLeadlist.append(item);
  });


  var axisFighterBlist = $('#axisfighterB-wingmen');
  var axisFighterBlistitems = axisFighterBlist.children('div').get();

  axisFighterBlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(axisFighterBlistitems, function (index, item) {
    axisFighterBlist.append(item);
  });


  var axisAttackerLeadlist = $('#axisAttackerGroup-lead');
  var axisAttackerLeadlistitems = axisAttackerLeadlist.children('div').get();


  axisAttackerLeadlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(axisAttackerLeadlistitems, function (index, item) {
    axisAttackerLeadlist.append(item);
  });


  var axisAttackerLeadlist = $('#axisAttackerGroup-lead');
  var axisAttackerLeadlistitems = axisAttackerLeadlist.children('div').get();

  axisAttackerLeadlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(axisAttackerLeadlistitems, function (index, item) {
    axisAttackerLeadlist.append(item);
  });


  var axisBomberLeadlist = $('#axisbomber-lead');
  var axisBomberLeadlistitems = axisBomberLeadlist.children('div').get();

  axisBomberLeadlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(axisBomberLeadlistitems, function (index, item) {
    axisBomberLeadlist.append(item);
  });


  var axisBomberlist = $('#axisbomber-wingmen');
  var axisBomberlistitems = axisBomberlist.children('div').get();

  axisBomberlistitems.sort(function (a, b) {
    return $(a).text().localeCompare($(b).text());
  });

  $.each(axisBomberlistitems, function (index, item) {
    axisBomberlist.append(item);
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}