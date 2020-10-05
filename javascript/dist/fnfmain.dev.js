"use strict";

$(document).ready(function () {
  $.getJSON('https://spreadsheets.google.com/feeds/list/1L3xLMrObQItYs0vnazhZK06TAaIGamsxSBMaMOCffv4/1/public/full?alt=json').done(function (json) {
    //side names
    alliedSide = "Allied";
    axisSide = "Axis"; //allied flights

    alliedTeamA = "45th Fighter Air Regiment";
    alliedTeamB = "16th Order Guard Air Regiment";
    alliedAttackers = "190th Ground Attack Regiment";
    alliedBomber = "134th Bomber Regiment"; // axis flights

    axisTeamA = "II./Jg52";
    axisTeamB = "22* Gruppo Autonomo C.T.";
    axisAttackers = "III./St.G2";
    axisBomber = "I./Zg1";
    setAlliedTemplates(json, randomNumber);
    setAxisTemplates(json, randomNumber);
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
  });
});