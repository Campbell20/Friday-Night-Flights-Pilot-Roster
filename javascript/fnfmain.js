$(document).ready(function () {

  //allied groups
  alliedFighterGroupA = "486th Fighter Squadron";
  alliedFighterGroupB = "487th Fighter Squadron";
  alliedAttackerGroup = "328th Fighter Squadron";
  alliedBomberGroup = "458th Bomber Squadron";

  //allied planes
  alliedPlaneA = "P47D22";
  alliedPlaneB = "P47D28";
  alliedAttacker = "P40 Attackers"
  alliedBomber = "A20 Havoc";

  //axis groups
  axisFighterGroupA = "III./JG77";
  axisFighterGroupB = "III./JG11";
  axisAttackerGroup = "II./JG4";
  axisBomberGroup = "I./JG26";

  //axis planes
  axisPlaneA = "Bf109G6Late (No MW50)";
  axisPlaneB = "Bf109G6";
  axisAttacker = "Bf109G4";
  axisBomber = "Bf110G2";

  eventDate = "<em>Jugs vs Messers</em> - <strong>March 26th, 2021 at 9pm Eastern</strong>";
  registration = true;
  totalRegistered = 85;

  $.getJSON('https://spreadsheets.google.com/feeds/list/1L3xLMrObQItYs0vnazhZK06TAaIGamsxSBMaMOCffv4/1/public/full?alt=json').done(function (json) {
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

  // $.get('data/Names/FirstNamesUSA.txt', function (fnUSA) {
  //     firstNamesUSA = fnUSA.split('\n');
  // });
  // $.get('data/Names/LastNamesUSA.txt', function (lnUSA) {
  //     lastNamesUSA = lnUSA.split('\n');
  // });
  // $.get('data/Names/FirstNamesGermany.txt', function (fnGermany) {
  //     firstNamesGermany = fnGermany.split('\n');
  // });
  // $.get('data/Names/LastNamesGermany.txt', function (lnGermany) {
  //     lastNamesGermany = lnGermany.split('\n');
  // });

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

  function toggleRegistration() {
    var d = new Date();
    var n = d.getDay()
    //0 = Sunday
    //1 = Monday
    //2 = Tuesday
    //3 = Wednesday
    //4 = Thursday
    //5 = Friday
    //6 = Saturday
    if (registration == false) {
      document.getElementById("registration-closed").style.display = "flex";
      document.getElementById("registration-opened").style.display = "none";
    } else {
      document.getElementById("registration-opened").style.display = "flex";
      document.getElementById("registration-closed").style.display = "none";
    }
  }

  function setEventDate() {
    document.getElementById("event-date0").innerHTML = eventDate;
    document.getElementById("event-date1").innerHTML = eventDate;
  }

  setFlightsAndPlanes();
  setEventDate();
  
  setTimeout(() => {
    toggleRegistration();
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


function registrationFull(side) {
  if (side == axisSide || side == alliedSide) {
    totalRegistered--
    document.getElementById('slots-left').innerHTML = totalRegistered;
  }
  if(totalRegistered <= 1) {
    registration = false;
  }  
}