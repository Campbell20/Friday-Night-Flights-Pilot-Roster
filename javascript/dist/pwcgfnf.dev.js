"use strict";

$(document).ready(function () {
  var randomNumber;
  $.getJSON('https://spreadsheets.google.com/feeds/list/1L3xLMrObQItYs0vnazhZK06TAaIGamsxSBMaMOCffv4/1/public/full?alt=json').done(function (json) {
    console.log(json);
    createGridsFromTemplate(json);
  });
  $.get('data/randomNumbers.txt', function (ranNum) {
    randomNumber = ranNum.split('\n');
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
  }); //side names

  alliedSide = "Allied";
  axisSide = "Axis"; //allied flights

  alliedTeamA = "45th Fighter Air Regiment";
  alliedTeamB = "16th Order Guard Fighter Air Regiment";
  alliedAttackers = "190th Ground Attack Regiment";
  alliedBomber = "134th Bomber Regiment"; // axis flights

  axisTeamA = "II./Jg52";
  axisTeamB = "22* Gruppo Autonomo C.T.";
  axisAttackers = "III./St.G2";
  axisBomber = "I./Zg1";
  setAlliedTemplates(json);

  function setFlightLeaderText(groupNumberLead, LeadElementNumber) {
    //Adjust text for Flight Leader
    if ($(window).width() <= 509) {
      if (fighterSquadronA != "") {
        document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = fighterSquadronA + " Flight Lead";
      } else if (fighterSquadronB != "") {
        document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = fighterSquadronB + " Flight Lead";
      } else if (attackSquadron != "") {
        document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = attackSquadron + " Flight Lead";
      } else {
        document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = bomberSquadron + " Flight Lead";
      }
    } else if ($(window).width() > 991 && $(window).width() <= 1209) {
      document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = "";
    } else if ($(window).width() >= 1210 && $(window).width() <= 1529) {
      document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = "FL";
    } else if ($(window).width() >= 1530 && $(window).width() <= 1950) {
      if (fighterSquadronA != "") {
        document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = fighterSquadronA + " Flight Lead";
      } else if (fighterSquadronB != "") {
        document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = fighterSquadronB + " Flight Lead";
      } else if (attackSquadron != "") {
        document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = attackSquadron + " Flight Lead";
      } else {
        document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = bomberSquadron + " Flight Lead";
      }
    } else {
      if (fighterSquadronA != "") {
        document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = fighterSquadronA + " Flight Leader";
      } else if (fighterSquadronB != "") {
        document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = fighterSquadronB + " Flight Leader";
      } else if (attackSquadron != "") {
        document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = attackSquadron + " Flight Leader";
      } else {
        document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = bomberSquadron + " Flight Leader";
      }
    }
  }

  function assignRole(num, elementNum, elementIDNumber, elementID, elementNationName, elementPic, elementNationPic) {
    if (num <= 2) {
      FlightColor = "Red";

      if (elementID == "alliedFGB" || elementID == "axisFGB") {
        FlightColor = "Bumper";
      }

      if (elementID == "alliedBomberGroup" || elementID == "axisBG") {
        FlightColor = "Swan";
      }
    } else if (num > 2 && num <= 5) {
      elementNum = elementNum - 3;
      FlightColor = "Green";

      if (elementID == "alliedFGB" || elementID == "axisFGB") {
        FlightColor = "Kudos";
      }

      if (elementID == "alliedBomberGroup" || elementID == "axisBG") {
        FlightColor = "Canary";
      }
    } else if (num > 5 && num <= 8) {
      elementNum = elementNum - 6;
      FlightColor = "Yellow";

      if (elementID == "alliedFGB" || elementID == "axisFGB") {
        FlightColor = "Growler";
      }

      if (elementID == "alliedBomberGroup" || elementID == "axisBG") {
        FlightColor = "Pelican";
      }
    } else if (num > 8 && num <= 11) {
      elementNum = elementNum - 9;
      FlightColor = "Black";

      if (elementID == "alliedFGB" || elementID == "axisFGB") {
        FlightColor = "Mitor";
      }

      if (elementID == "alliedBomberGroup" || elementID == "axisBG") {
        FlightColor = "Vulture";
      }
    } else if (num > 11 && num <= 14) {
      elementNum = elementNum - 12;
      FlightColor = "Purple";

      if (elementID == "alliedFGB" || elementID == "axisFGB") {
        FlightColor = "Molly";
      }

      if (elementID == "alliedBomberGroup" || elementID == "axisBG") {
        FlightColor = "Condor";
      }
    } else if (num > 14) {
      elementNum = elementNum - 15;
      FlightColor = "Orange";

      if (elementID == "alliedFGB" || elementID == "axisFGB") {
        FlightColor = "Angus";
      }

      if (elementID == "alliedBomberGroup" || elementID == "axisBG") {
        FlightColor = "Kingfish";
      }
    }

    document.getElementById(elementIDNumber + num).innerHTML = FlightColor + "-" + elementNum;
    document.getElementById(elementID + num).innerHTML = elementNationName;
    document.getElementById(elementPic + num).src = "imgs/" + elementNationPic + "/" + elementNationPic + imageNumber + ".jpg";
  }
});