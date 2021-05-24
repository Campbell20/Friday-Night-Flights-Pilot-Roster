"use strict";

//Friday Event
FnFevent = "<em>Faux Pacific Battles</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/6048f77e'>Event Time</a></strong>";
FnFregistration = true;
SeFevent = "<em>Faux Pacific Battles</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/1100fc02'>Event Time</a></strong>";
SeFregistration = true;
totalFnFRegistered = 85;
totalSeFRegistered = 85; //allied groups

alliedFighterGroupA = "Marine Aircraft Group 12";
alliedFighterGroupB = "Marine Aircraft Group 24";
alliedAttackerGroup = "Marine Aircraft Group 36";
alliedBomberGroup = "Marine Aircraft Group 18"; //allied planes

alliedPlaneA = "P38 Lighting";
alliedPlaneB = "P40 Warhawk";
alliedAttacker = "P39 Airacobra";
alliedBomber = "A20 Havoc"; //axis groups

axisFighterGroupA = "11th Sentai";
axisFighterGroupB = "68th Sentai";
axisAttackerGroup = "13th Sentai";
axisBomberGroup = "45th Sentai"; //axis planes

axisPlaneA = "Ki-84 Frank (Fw190A8)";
axisPlaneB = "Ki-61 Tony (Mc202)";
axisAttacker = "Ki-43 Oscar (LA5F)";
axisBomber = "Ki-49 Helen (Ju88)";
channel2 = "Channel 2";
channel3 = "Channel 3";
channel4 = "Channel 4";
channel5 = "Channel 5";
channel6 = "Channel 6";
channel7 = "Channel 7";
channel8 = "Channel 8";
channel9 = "Channel 9";
channel10 = "Channel 10"; //Allied Skins

AlliedSquadronASkinRed = "Default" + "<br>" + channel10;
AlliedSquadronASkinBlue = "Default" + "<br>" + channel9;
AlliedSquadronASkinGreen = "Default" + "<br>" + channel8;
AlliedSquadronASkinBlack = "Default" + "<br>" + channel7;
AlliedSquadronBSkinGrowler = "Pacific 1942" + "<br>" + channel6;
AlliedSquadronBSkinRaven = "Pacific 1942" + "<br>" + channel5;
AlliedSquadronBSkinEagle = "Pacific 1942" + "<br>" + channel4;
AlliedSquadronBSkinRipper = "Pacific 1942" + "<br>" + channel3;
AlliedAttackSquadronSkinBear = "Winburn" + "<br>" + channel2;
AlliedAttackSquadronSkinRabbit = "Winburn" + "<br>" + channel2;
AlliedAttackSquadronSkinFox = "Winburn" + "<br>" + channel2;
AlliedAttackSquadronSkinBison = "Winburn" + "<br>" + channel2;
AlliedBomberSquadronSkinPelican = "Sandy" + "<br>" + channel2;
AlliedBomberSquadronSkinSwan = "Sandy" + "<br>" + channel2;
AlliedBomberSquadronSkinSeagull = "Wahoo" + "<br>" + channel2;
AlliedBomberSquadronSkinCanary = "Wahoo" + "<br>" + channel2; //Axis Skins

AxisSquadronASkinRed = "Ki-84" + "<br>" + channel10;
AxisSquadronASkinBlue = "Ki-84" + "<br>" + channel9;
AxisSquadronASkinGreen = "Ki-84" + "<br>" + channel8;
AxisSquadronASkinBlack = "Ki-84" + "<br>" + channel7;
AxisSquadronBSkinGrowler = "Ki-61 Tony" + "<br>" + channel6;
AxisSquadronBSkinRaven = "Ki-61 Tony" + "<br>" + channel5;
AxisSquadronBSkinEagle = "Ki-61 Tony" + "<br>" + channel4;
AxisSquadronBSkinRipper = "Ki-61 Tony" + "<br>" + channel3;
AxisAttackSquadronSkinBear = "Ki-43" + "<br>" + channel2;
AxisAttackSquadronSkinRabbit = "Ki-43" + "<br>" + channel2;
AxisAttackSquadronSkinFox = "Ki-43" + "<br>" + channel2;
AxisAttackSquadronSkinBison = "Ki-43" + "<br>" + channel2;
AxisBomberSquadronSkinPelican = "Ki-49 Donryu" + "<br>" + channel2;
AxisBomberSquadronSkinSwan = "Ki-49 Donryu" + "<br>" + channel2;
AxisBomberSquadronSkinSeagull = "Ki-49 Donryu" + "<br>" + channel2;
AxisBomberSquadronSkinCanary = "Ki-49 Donryu" + "<br>" + channel2;
hideAlliedFighterGroupA = false;
hideAlliedFighterGroupB = false;
hideAlliedAttackerGroup = false;
hideAlliedBomberGroup = false;
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