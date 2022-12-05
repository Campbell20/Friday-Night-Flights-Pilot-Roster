$(document).ready(function () {

  $.getJSON('https://docs.google.com/spreadsheets/d/1L3xLMrObQItYs0vnazhZK06TAaIGamsxSBMaMOCffv4/gviz/tq').done(function (json) {
    console.log(json.stringify());
    //$.getJSON('https://spreadsheets.google.com/feeds/list/1L3xLMrObQItYs0vnazhZK06TAaIGamsxSBMaMOCffv4/1/public/full?alt=json').done(function (json) {
    //side names
    alliedSide = "Allied";
    axisSide = "Axis";
    //allied flights
    alliedTeamA = alliedFighterGroupA;
    alliedTeamB = alliedFighterGroupB;
    alliedAttackers = alliedAttackerGroup;
    alliedBomber = alliedBomberGroup;

    // axis flights
    axisTeamA = axisFighterGroupA;
    axisTeamB = axisFighterGroupB;
    axisAttackers = axisAttackerGroup;
    axisBomber = axisBomberGroup;

    setAlliedTemplates(json, randomNumber);
    setAxisTemplates(json, randomNumber);
  });

  $.get('data/randomNumbers.txt', function (ranNum) {
    randomNumber = ranNum.split('\n');
  });

  function setFlightsAndPlanes() {
    document.getElementById("alliedfighterA").innerHTML = alliedFighterGroupA;
    document.getElementById("alliedfighterB").innerHTML = alliedFighterGroupB;
    document.getElementById("alliedattackergroup").innerHTML = alliedAttackerGroup;
    document.getElementById("alliedbombergroup").innerHTML = alliedBomberGroup;

    document.getElementById("alliedfighterA-plane").innerHTML = alliedPlaneA;
    document.getElementById("alliedfighterB-plane").innerHTML = alliedPlaneB;
    document.getElementById("alliedattacker-plane").innerHTML = alliedAttacker;
    document.getElementById("alliedbombergroup-plane").innerHTML = alliedBomber;

    document.getElementById("axisfighterA").innerHTML = axisFighterGroupA;
    document.getElementById("axisfighterB").innerHTML = axisFighterGroupB;
    document.getElementById("axisattackergroup").innerHTML = axisAttackerGroup;
    document.getElementById("axisbombergroup").innerHTML = axisBomberGroup;

    document.getElementById("axisfighterA-plane").innerHTML = axisPlaneA;
    document.getElementById("axisfighterB-plane").innerHTML = axisPlaneB;
    document.getElementById("axisattacker-plane").innerHTML = axisAttacker;
    document.getElementById("axisbombergroup-plane").innerHTML = axisBomber;
  }


  setFlightsAndPlanes();

  setTimeout(() => {
    setEvent();
  }, 300);
});



function sortWingmen() {
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
