"use strict";

//Friday Event
FnFevent = "<em>RAF versus Axis</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/351cae1c'>Event Time</a></strong>";
FnFregistration = true;
SeFevent = "<em>RAF versus Axis</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/633489bf'>Event Time</a></strong>";
SeFregistration = true;
totalFnFRegistered = 85;
totalSeFRegistered = 85; //allied groups

alliedFighterGroupA = "No. 89 Squadron (RAF)";
alliedFighterGroupB = "No. 87 Squadron (RAF)";
alliedAttackerGroup = "No. 97 Squadron (RAF)";
alliedBomberGroup = ""; //allied planes

alliedPlaneA = "SpitfireIX";
alliedPlaneB = "Tempest";
alliedAttacker = "A20 Boston";
alliedBomber = ""; //axis groups

axisFighterGroupA = "III./JG77";
axisFighterGroupB = "III./JG11";
axisAttackerGroup = "II./ZG4";
axisBomberGroup = "I./KG26"; //axis planes

axisPlaneA = "Bf109K4";
axisPlaneB = "Fw190D9";
axisAttacker = "Bf110G2";
axisBomber = "Ju88A2";
channel2 = "Channel 2";
channel3 = "Channel 3";
channel4 = "Channel 4";
channel5 = "Channel 5";
channel6 = "Channel 6";
channel7 = "Channel 7";
channel8 = "Channel 8";
channel9 = "Channel 9";
channel10 = "Channel 10"; //Allied Skins

AlliedSquadronASkinRed = "East Indies" + "<br>" + channel10;
AlliedSquadronASkinBlue = "Savoy" + "<br>" + channel9;
AlliedSquadronASkinGreen = "Clostermann" + "<br>" + channel8;
AlliedSquadronASkinBlack = "RAF Late 1944" + "<br>" + channel7;
AlliedSquadronBSkinGrowler = "Clostermann" + "<br>" + channel6;
AlliedSquadronBSkinRaven = "Fairbanks" + "<br>" + channel5;
AlliedSquadronBSkinEagle = "Wray" + "<br>" + channel4;
AlliedSquadronBSkinRipper = "Invasion" + "<br>" + channel3;
AlliedAttackSquadronSkinBear = "RAF" + "<br>" + channel2;
AlliedAttackSquadronSkinRabbit = "Night Interdiction" + "<br>" + channel2;
AlliedAttackSquadronSkinFox = "RAF D-Day" + "<br>" + channel2;
AlliedAttackSquadronSkinBison = "RAF Late 1944" + "<br>" + channel2;
AlliedBomberSquadronSkinPelican = "Red Thunderbolt";
AlliedBomberSquadronSkinSwan = "Special One";
AlliedBomberSquadronSkinSeagull = "White Sash";
AlliedBomberSquadronSkinCanary = "Default"; //Axis Skins

AxisSquadronASkinRed = "Blue 7" + "<br>" + channel10;
AxisSquadronASkinBlue = "Yellow 5" + "<br>" + channel9;
AxisSquadronASkinGreen = "White 5" + "<br>" + channel8;
AxisSquadronASkinBlack = "Red 1" + "<br>" + channel7;
AxisSquadronBSkinGrowler = "Faber" + "<br>" + channel6;
AxisSquadronBSkinRaven = "Yellow 13" + "<br>" + channel5;
AxisSquadronBSkinEagle = "Dortenmann" + "<br>" + channel4;
AxisSquadronBSkinRipper = "Hagen" + "<br>" + channel3;
AxisAttackSquadronSkinBear = "Ossmann" + "<br>" + channel2;
AxisAttackSquadronSkinRabbit = "Stratmann" + "<br>" + channel2;
AxisAttackSquadronSkinFox = "Johnen" + "<br>" + channel2;
AxisAttackSquadronSkinBison = "Becker" + "<br>" + channel2;
AxisBomberSquadronSkinPelican = "Finn" + "<br>" + channel2;
AxisBomberSquadronSkinSwan = "Black Greek" + "<br>" + channel2;
AxisBomberSquadronSkinSeagull = "Meander" + "<br>" + channel2;
AxisBomberSquadronSkinCanary = "Paepcke" + "<br>" + channel2;
hideAlliedFighterGroupA = false;
hideAlliedFighterGroupB = false;
hideAlliedAttackerGroup = false;
hideAlliedBomberGroup = true;
hideAxisFighterGroupA = false;
hideAxisFighterGroupB = false;
hideAxisAttackerGroup = false;
hideAxisBomberGroup = false;

function setEvent() {
  title = document.getElementById("title").innerHTML;
  console.log(title);

  if (title.includes("Friday")) {
    if (FnFregistration == false) {
      $("#FnFevent-open").addClass("hidden-templates");
      $("#FnFevent-btn").addClass("hidden-templates");
    } else {
      document.getElementById("FnFevent-open").innerHTML = FnFevent;
      $("#FnFevent-closed").addClass("hidden-templates");
    }
  }

  if (title.includes("Saturday")) {
    if (SeFregistration == false) {
      $("#SeFevent-open").addClass("hidden-templates");
      $("#SeFevent-btn").addClass("hidden-templates");
    } else {
      document.getElementById("SeFevent-open").innerHTML = SeFevent;
      $("#SeFevent-closed").addClass("hidden-templates");
    }
  }

  if (hideAxisFighterGroupA) {
    $("#axis-figher-group-a").addClass("hidden-templates");
  }

  if (hideAxisFighterGroupB) {
    $("#axis-figher-group-b").addClass("hidden-templates");
  }

  if (hideAxisAttackerGroup) {
    $("#axis-attacker-group").addClass("hidden-templates");
  }

  if (hideAxisBomberGroup) {
    $("#axis-bomber-group").addClass("hidden-templates");
  }

  if (hideAlliedFighterGroupA) {
    $("#allied-figher-group-a").addClass("hidden-templates");
  }

  if (hideAlliedFighterGroupB) {
    $("#allied-figher-group-b").addClass("hidden-templates");
  }

  if (hideAlliedAttackerGroup) {
    $("#allied-attacker-group").addClass("hidden-templates");
  }

  if (hideAlliedBomberGroup) {
    $("#allied-bomber-group").addClass("hidden-templates");
  }
}

function registrationFnFFull(side) {
  if (side == axisSide || side == alliedSide) {
    totalFnFRegistered--;
    document.getElementById('slots-left').innerHTML = totalFnFRegistered;
  }

  if (totalFnFRegistered <= 1) {
    FnFregistration = false;
  }
}

function registrationSeFFull(side) {
  if (side == axisSide || side == alliedSide) {
    totalSeFRegistered--;
    document.getElementById('slots-left').innerHTML = totalSeFRegistered;
  }

  if (totalSeFRegistered <= 1) {
    SeFregistration = false;
  }
}

$(document).ready(function () {
  setEvent();
});