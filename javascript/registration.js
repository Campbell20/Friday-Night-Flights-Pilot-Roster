//Friday Event
FnFevent = "<em>Aerial Battlefield: Capture and Hold</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/35c793d9'>Event Time</a></strong>";
FnFregistration = true;

SeFevent = "<em>Aerial Battlefield: Capture and Hold</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/1e395139'>Event Time</a></strong>";
SeFregistration = true;

totalFnFRegistered = 85;
totalSeFRegistered = 85;


//allied groups
alliedFighterGroupA = "No. 3 Squadron RAF";
alliedFighterGroupB = "No. 404 Squadron RAF";
alliedAttackerGroup = "179th Expeditionary Fighter Squadron";
alliedBomberGroup = "125th Expeditionary Fighter Squadron";

//allied planes
alliedPlaneA = "P51b Mustang";
alliedPlaneB = "SpitfireXIV";
alliedAttacker = "P51D Mustang";
alliedBomber = "P38 Lighting";

//axis groups
axisFighterGroupA = "7./Jg27";
axisFighterGroupB = "II./Jg52";
axisAttackerGroup = "II./Kg4";
axisBomberGroup = "III./Kg6";

//axis planes
axisPlaneA = "Bf109 G6 Late";
axisPlaneB = "Bf109 K4";
axisAttacker = "Fw190A8";
axisBomber = "Fw190D9";

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
AlliedSquadronASkinRed = "Default" + "<br>" + channel10;
AlliedSquadronASkinBlue = "Default" + "<br>" + channel9;
AlliedSquadronASkinGreen = "Default" + "<br>" + channel8;
AlliedSquadronASkinBlack = "Default" + "<br>" + channel7;

AlliedSquadronBSkinGrowler = "Default" + "<br>" + channel6;
AlliedSquadronBSkinRaven = "Default" + "<br>" + channel5;
AlliedSquadronBSkinEagle = "Default" + "<br>" + channel4;
AlliedSquadronBSkinRipper = "Default" + "<br>" + channel3;

AlliedAttackSquadronSkinBear = "Default" + "<br>" + channel2;
AlliedAttackSquadronSkinRabbit = "Default" + "<br>" + channel2;
AlliedAttackSquadronSkinFox = "Default" + "<br>" + channel2;
AlliedAttackSquadronSkinBison = "Default" + "<br>" + channel2;

AlliedBomberSquadronSkinPelican = "Default" + "<br>" + channel2;
AlliedBomberSquadronSkinSwan = "Default" + "<br>" + channel2;
AlliedBomberSquadronSkinSeagull = "Default" + "<br>" + channel2;
AlliedBomberSquadronSkinCanary = "Default" + "<br>" + channel2;

//Axis Skins
AxisSquadronASkinRed = "Default" + "<br>" + channel10;
AxisSquadronASkinBlue = "Default" + "<br>" + channel9;
AxisSquadronASkinGreen = "Default" + "<br>" + channel8;
AxisSquadronASkinBlack = "Default" + "<br>" + channel7;

AxisSquadronBSkinGrowler = "Default" + "<br>" + channel6;
AxisSquadronBSkinRaven = "Default" + "<br>" + channel5;
AxisSquadronBSkinEagle = "Default" + "<br>" + channel4;
AxisSquadronBSkinRipper = "Default" + "<br>" + channel3;

AxisAttackSquadronSkinBear = "Default" + "<br>" + channel2;
AxisAttackSquadronSkinRabbit = "Default" + "<br>" + channel2;
AxisAttackSquadronSkinFox = "Default" + "<br>" + channel2;
AxisAttackSquadronSkinBison = "Default" + "<br>" + channel2;

AxisBomberSquadronSkinPelican = "Default" + "<br>" + channel2;
AxisBomberSquadronSkinSwan = "Default" + "<br>" + channel2;
AxisBomberSquadronSkinSeagull = "Default" + "<br>" + channel2;
AxisBomberSquadronSkinCanary = "Default" + "<br>" + channel2;

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
        $("#axis-fighter-group-a").addClass("hidden-templates"); 
    }
    if(hideAxisFighterGroupB) {
        $("#axis-fighter-group-b").addClass("hidden-templates");
    }
    if(hideAxisAttackerGroup){
        $("#axis-attacker-group").addClass("hidden-templates");
    }
    if(hideAxisBomberGroup) {
        $("#axis-bomber-group").addClass("hidden-templates");
    }

    if(hideAlliedFighterGroupA) {
        $("#allied-fighter-group-a").addClass("hidden-templates"); 
    }
    if(hideAlliedFighterGroupB) {
        $("#allied-fighter-group-b").addClass("hidden-templates");
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


