//Friday Event
FnFevent = "<em>Yak Attack!</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/351cae1c'>Event Time</a></strong>";
FnFregistration = true;

SeFevent = "<em>Yak Attack!</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/633489bf'>Event Time</a></strong>";
SeFregistration = true;

totalFnFRegistered = 85;
totalSeFRegistered = 85;


//allied groups
alliedFighterGroupA = "No. 1 Squadron RCAF (Canadian)";
alliedFighterGroupB = "No. 66 Squadron RAF";
alliedAttackerGroup = "No. 235 Squadron RAF";
alliedBomberGroup = "Gunner Position";

//allied planes
alliedPlaneA = "Hurricane";
alliedPlaneB = "SpitfireVb";
alliedAttacker = "Pe2s87";
alliedBomber = "Gunner";

//axis groups
axisFighterGroupA = "III./JG7";
axisFighterGroupB = "22* Gruppo";
axisAttackerGroup = "II./ZG4";
axisBomberGroup = "I./ZG2";

//axis planes
axisPlaneA = "Bf109E7";
axisPlaneB = "MC202";
axisAttacker = "BF110E2";
axisBomber = "Hs129 Duck";

channel2 = "Channel 2";
channel3 = "Channel 3";
channel4 = "Channel 4";
channel5 = "Channel 5";
channel6 = "Channel 6";
channel7 = "Channel 7";
channel8 = "Channel 8";
channel9 = "Channel 9";
channel10 = "Channel 10";

//Allied Skins
AlliedSquadronASkinRed = "RAF Early" + "<br>" + channel10;
AlliedSquadronASkinBlue = "Desert" + "<br>" + channel9;
AlliedSquadronASkinGreen = "Night Reaper" + "<br>" + channel8;
AlliedSquadronASkinBlack = "Jessie" + "<br>" + channel7;

AlliedSquadronBSkinGrowler = "Early 'type A' Camo" + "<br>" + channel6;
AlliedSquadronBSkinRaven = "Desert Scheme" + "<br>" + channel5;
AlliedSquadronBSkinEagle = "Zumbach" + "<br>" + channel4;
AlliedSquadronBSkinRipper = "NightFighter" + "<br>" + channel3;

AlliedAttackSquadronSkinBear = "Testbed" + "<br>" + channel2;
AlliedAttackSquadronSkinRabbit = "Black Wave" + "<br>" + channel2;
AlliedAttackSquadronSkinFox = "White 43" + "<br>" + channel2;
AlliedAttackSquadronSkinBison = "White ARrow" + "<br>" + channel2;

AlliedBomberSquadronSkinPelican = "Gunner" + "<br>" + channel2;
AlliedBomberSquadronSkinSwan = "Gunner" + "<br>" + channel2;
AlliedBomberSquadronSkinSeagull = "Gunner" + "<br>" + channel2;
AlliedBomberSquadronSkinCanary = "Gunner" + "<br>" + channel2;

//Axis Skins
AxisSquadronASkinRed = "Red 3" + "<br>" + channel10;
AxisSquadronASkinBlue = "Marseille" + "<br>" + channel9;
AxisSquadronASkinGreen = "Black 4" + "<br>" + channel8;
AxisSquadronASkinBlack = "Night Fighter" + "<br>" + channel7;

AxisSquadronBSkinGrowler = "German" + "<br>" + channel6;
AxisSquadronBSkinRaven = "Reiner" + "<br>" + channel5;
AxisSquadronBSkinEagle = "386-1" + "<br>" + channel4;
AxisSquadronBSkinRipper = "378-4" + "<br>" + channel3;

AxisAttackSquadronSkinBear = "Smolle" + "<br>" + channel2;
AxisAttackSquadronSkinRabbit = "Jabs" + "<br>" + channel2;
AxisAttackSquadronSkinFox = "Vowinkel" + "<br>" + channel2;
AxisAttackSquadronSkinBison = "Kleedehn" + "<br>" + channel2;

AxisBomberSquadronSkinPelican = "Oswald" + "<br>" + channel2;
AxisBomberSquadronSkinSwan = "Meyer" + "<br>" + channel2;
AxisBomberSquadronSkinSeagull = "Yellow 3" + "<br>" + channel2;
AxisBomberSquadronSkinCanary = "White 327" + "<br>" + channel2;

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

    if(hideAxisFighterGroupA) {
        $("#axis-figher-group-a").addClass("hidden-templates"); 
    }
    if(hideAxisFighterGroupB) {
        $("#axis-figher-group-b").addClass("hidden-templates");
    }
    if(hideAxisAttackerGroup){
        $("#axis-attacker-group").addClass("hidden-templates");
    }
    if(hideAxisBomberGroup) {
        $("#axis-bomber-group").addClass("hidden-templates");
    }

    if(hideAlliedFighterGroupA) {
        $("#allied-figher-group-a").addClass("hidden-templates"); 
    }
    if(hideAlliedFighterGroupB) {
        $("#allied-figher-group-b").addClass("hidden-templates");
    }
    if(hideAlliedAttackerGroup){
        $("#allied-attacker-group").addClass("hidden-templates");
    }
    if(hideAlliedBomberGroup) {
        $("#allied-bomber-group").addClass("hidden-templates");
    }


}

function registrationFnFFull(side) {
    if (side == axisSide || side == alliedSide) {
        totalFnFRegistered--
        document.getElementById('slots-left').innerHTML = totalFnFRegistered;
    }
    if (totalFnFRegistered <= 1) {
        FnFregistration = false;
    }
}

function registrationSeFFull(side) {
    if (side == axisSide || side == alliedSide) {
        totalSeFRegistered--
        document.getElementById('slots-left').innerHTML = totalSeFRegistered;
    }
    if (totalSeFRegistered <= 1) {
        SeFregistration = false;
    }
}
$(document).ready(function () {
    setEvent();
});


