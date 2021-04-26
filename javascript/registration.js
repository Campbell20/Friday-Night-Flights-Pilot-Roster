//Friday Event
FnFevent = "<em>Late War</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/3c63ce78'>Event Time</a></strong>";
FnFregistration = true;

SeFevent = "<em>Late War</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/6206ecf1'>Event Time</a></strong>";
SeFregistration = true;

totalFnFRegistered = 85;
totalSeFRegistered = 85;


//allied groups
alliedFighterGroupA = "No. 1 Squadron RCAF (Canadian)";
alliedFighterGroupB = "370th Fighter Group";
alliedAttackerGroup = "479th Bomber Group";
alliedBomberGroup = "474th Bomber Group";

//allied planes
alliedPlaneA = "Spitfire XIV";
alliedPlaneB = "P38 Lighting";
alliedAttacker = "P47D22/P47D28";
alliedBomber = "A20 Havoc";

//axis groups
axisFighterGroupA = "III./JG7";
axisFighterGroupB = "II./JG11";
axisAttackerGroup = "II./ZG4";
axisBomberGroup = "I./ZG2";

//axis planes
axisPlaneA = "Bf109K4";
axisPlaneB = "Fw190A6";
axisAttacker = "BF110G2";
axisBomber = "";

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

AlliedSquadronBSkinGrowler = "429th FS" + "<br>" + channel6;
AlliedSquadronBSkinRaven = "SCRAPIRON IV" + "<br>" + channel5;
AlliedSquadronBSkinEagle = "Hey Stuff" + "<br>" + channel4;
AlliedSquadronBSkinRipper = "California Cutie" + "<br>" + channel3;

AlliedAttackSquadronSkinBear = "P47D22" + "<br>" + "RAF 2" + "<br>" + channel2;
AlliedAttackSquadronSkinRabbit = "P47D22" + "<br>" + "255th IAP" + "<br>" + channel2;
AlliedAttackSquadronSkinFox = "P47D28" + "<br>" + "Deacon Dandy" + "<br>" + channel2;
AlliedAttackSquadronSkinBison = "P47D28" + "<br" + "Passionate Patsy" + "<br>" + channel2;

AlliedBomberSquadronSkinPelican = "Sandy" + "<br>" + channel2;
AlliedBomberSquadronSkinSwan = "Wahoo" + "<br>" + channel2;
AlliedBomberSquadronSkinSeagull = "RAF" + "<br>" + channel2;
AlliedBomberSquadronSkinCanary = "Night interdiction" + "<br>" + channel2;

//Axis Skins
AxisSquadronASkinRed = "Deskau" + "<br>" + channel10;
AxisSquadronASkinBlue = "Blue 7" + "<br>" + channel9;
AxisSquadronASkinGreen = "Black 1" + "<br>" + channel8;
AxisSquadronASkinBlack = "White 6" + "<br>" + channel7;

AxisSquadronBSkinGrowler = "Schott" + "<br>" + channel6;
AxisSquadronBSkinRaven = "5./JG1" + "<br>" + channel5;
AxisSquadronBSkinEagle = "Pfiffer" + "<br>" + channel4;
AxisSquadronBSkinRipper = "Nowotny" + "<br>" + channel3;

AxisAttackSquadronSkinBear = "Oassmann" + "<br>" + channel2;
AxisAttackSquadronSkinRabbit = "Bley" + "<br>" + channel2;
AxisAttackSquadronSkinFox = "Johnen" + "<br>" + channel2;
AxisAttackSquadronSkinBison = "Becker" + "<br>" + channel2;

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
hideAxisBomberGroup = true;


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


