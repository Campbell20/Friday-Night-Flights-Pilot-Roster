//Friday Event
FnFevent = "<em>Yak Attack!</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/351cae1c'>Event Time</a></strong>";
FnFregistration = true;

SeFevent = "<em>Yak Attack!</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/633489bf'>Event Time</a></strong>";
SeFregistration = true;

totalFnFRegistered = 85;
totalSeFRegistered = 85;


//allied groups
alliedFighterGroupA = "586th Fighter Aviation Regiment";
alliedFighterGroupB = "470th Fighter Aviation Regiment";
alliedAttackerGroup = "4th Guards Bomber Regiment";
alliedBomberGroup = "125th Guards Bomber Regiment";

//allied planes
alliedPlaneA = "Yak1s127/Yak7bs36";
alliedPlaneB = "LA5F";
alliedAttacker = "IL2 1942";
alliedBomber = "A20 Havoc";

//axis groups
axisFighterGroupA = "III./JG77";
axisFighterGroupB = "III./JG11";
axisAttackerGroup = "II./ZG4";
axisBomberGroup = "I./KG26";

//axis planes
axisPlaneA = "Bf109F4";
axisPlaneB = "Fw190A3";
axisAttacker = "Bf110E2";
axisBomber = "Ju88A2";

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
AlliedSquadronASkinRed = "Yak1s127<br>Red Tail" + "<br>" + channel10;
AlliedSquadronASkinBlue = "Yak1s127<br>Shark" + "<br>" + channel9;
AlliedSquadronASkinGreen = "Yak7bs36<br>Hasin" + "<br>" + channel8;
AlliedSquadronASkinBlack = "Yak7bs36<br>Latvian Rifleman" + "<br>" + channel7;

AlliedSquadronBSkinGrowler = "White Tail" + "<br>" + channel6;
AlliedSquadronBSkinRaven = "Shades of Grey" + "<br>" + channel5;
AlliedSquadronBSkinEagle = "Kostylev, Early" + "<br>" + channel4;
AlliedSquadronBSkinRipper = "Pierced Heart" + "<br>" + channel3;

AlliedAttackSquadronSkinBear = "Red Thunderbolt" + "<br>" + channel2;
AlliedAttackSquadronSkinRabbit = "The Special One" + "<br>" + channel2;
AlliedAttackSquadronSkinFox = "White Sash" + "<br>" + channel2;
AlliedAttackSquadronSkinBison = "Default" + "<br>" + channel2;

AlliedBomberSquadronSkinPelican = "British" + "<br>" + channel2;
AlliedBomberSquadronSkinSwan = "Bombing Gull" + "<br>" + channel2;
AlliedBomberSquadronSkinSeagull = "Lyublin" + "<br>" + channel2;
AlliedBomberSquadronSkinCanary = "Leo" + "<br>" + channel2;

//Axis Skins
AxisSquadronASkinRed = "Shultz" + "<br>" + channel10;
AxisSquadronASkinBlue = "Marseille" + "<br>" + channel9;
AxisSquadronASkinGreen = "Philipp" + "<br>" + channel8;
AxisSquadronASkinBlack = "Ubben" + "<br>" + channel7;

AxisSquadronBSkinGrowler = "Hondt" + "<br>" + channel6;
AxisSquadronBSkinRaven = "Maack" + "<br>" + channel5;
AxisSquadronBSkinEagle = "Kunze" + "<br>" + channel4;
AxisSquadronBSkinRipper = "Hartmann" + "<br>" + channel3;

AxisAttackSquadronSkinBear = "Smolle" + "<br>" + channel2;
AxisAttackSquadronSkinRabbit = "Jabs" + "<br>" + channel2;
AxisAttackSquadronSkinFox = "Vowinkel" + "<br>" + channel2;
AxisAttackSquadronSkinBison = "Kleedehn" + "<br>" + channel2;

AxisBomberSquadronSkinPelican = "Finn" + "<br>" + channel2;
AxisBomberSquadronSkinSwan = "Black Greek" + "<br>" + channel2;
AxisBomberSquadronSkinSeagull = "Meander" + "<br>" + channel2;
AxisBomberSquadronSkinCanary = "Paepcke" + "<br>" + channel2;

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


