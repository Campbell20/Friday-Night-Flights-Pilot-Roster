//Friday Event
FnFevent = "<em>Late War</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/fb93f378'>Event Time</a></strong>";
FnFregistration = false;

SeFevent = "<em>Late War</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/b195a0f2'>Event Time</a></strong>";
SeFregistration = false;

totalFnFRegistered = 85;
totalSeFRegistered = 85;


//allied groups
alliedFighterGroupA = "No. 1 Squadron RCAF (Canadian)";
alliedFighterGroupB = "370th Fighter Group";
alliedAttackerGroup = "479th Bomber Group";
alliedBomberGroup = "474th Bomber Group";

//allied planes
alliedPlaneA = "Spitfire XIV";
alliedPlaneB = "P51 Mustang";
alliedAttacker = "P47D22 Razorback";
alliedBomber = "P47D28 Thunderbolt";

//axis groups
axisFighterGroupA = "III./JG7";
axisFighterGroupB = "II./JG11";
axisAttackerGroup = "II./ZG4";
axisBomberGroup = "I./ZG2";

//axis planes
axisPlaneA = "Bf109K4";
axisPlaneB = "Fw190D9";
axisAttacker = "BF110G2";
axisBomber = "Fw190A6";

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
AlliedSquadronASkinRed = "RAF Mid-1944" + "<br>" + channel10;
AlliedSquadronASkinBlue = "Newberry" + "<br>" + channel9;
AlliedSquadronASkinGreen = "Dodd" + "<br>" + channel8;
AlliedSquadronASkinBlack = "Indian" + "<br>" + channel7;

AlliedSquadronBSkinGrowler = "MoonBeam McSwine" + "<br>" + channel6;
AlliedSquadronBSkinRaven = "Wilson" + "<br>" + channel5;
AlliedSquadronBSkinEagle = "Klem" + "<br>" + channel4;
AlliedSquadronBSkinRipper = "Lollipoop II" + "<br>" + channel3;

AlliedAttackSquadronSkinBear = "RAF 2" + "<br>" + channel2;
AlliedAttackSquadronSkinRabbit = "255th IAP" + "<br>" + channel2;
AlliedAttackSquadronSkinFox = "Okie" + "<br>" + channel2;
AlliedAttackSquadronSkinBison = "Easy's Angels" + "<br>" + channel2;

AlliedBomberSquadronSkinPelican = "Deacon Dandy" + "<br>" + channel2;
AlliedBomberSquadronSkinSwan = "Passionate Patsy" + "<br>" + channel2;
AlliedBomberSquadronSkinSeagull = "Lisi" + "<br>" + channel2;
AlliedBomberSquadronSkinCanary = "Winged Skull" + "<br>" + channel2;

//Axis Skins
AxisSquadronASkinRed = "Deskau" + "<br>" + channel10;
AxisSquadronASkinBlue = "Blue 7" + "<br>" + channel9;
AxisSquadronASkinGreen = "Black 1" + "<br>" + channel8;
AxisSquadronASkinBlack = "White 6" + "<br>" + channel7;

AxisSquadronBSkinGrowler = "Faber" + "<br>" + channel6;
AxisSquadronBSkinRaven = "Red 18" + "<br>" + channel5;
AxisSquadronBSkinEagle = "Yellow 13" + "<br>" + channel4;
AxisSquadronBSkinRipper = "White 11" + "<br>" + channel3;

AxisAttackSquadronSkinBear = "Oassmann" + "<br>" + channel2;
AxisAttackSquadronSkinRabbit = "Bley" + "<br>" + channel2;
AxisAttackSquadronSkinFox = "Johnen" + "<br>" + channel2;
AxisAttackSquadronSkinBison = "Becker" + "<br>" + channel2;

AxisBomberSquadronSkinPelican = "Schott" + "<br>" + channel2;
AxisBomberSquadronSkinSwan = "5./JG1" + "<br>" + channel2;
AxisBomberSquadronSkinSeagull = "Pfiffer" + "<br>" + channel2;
AxisBomberSquadronSkinCanary = "Nowotny" + "<br>" + channel2;

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


