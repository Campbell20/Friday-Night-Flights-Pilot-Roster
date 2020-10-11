$(document).ready(function () {

    //allied groups
    alliedFighterGroupA = "45th Fighter Air Regiment";
    alliedFighterGroupB = "16th Order Guard Fighter Air Regiment"
    alliedAttackerGroup = "190th Ground Attack Regiment"
    alliedBomberGroup = "134th Bomber Regiment";

    //allied planes
    alliedPlaneA = "Mig3";
    alliedPlaneB = "P40/LaGG3";
    alliedAttacker = "IL2m41/IL2m42"
    alliedBomber = "Pe2s87";

    //axis groups
    axisFighterGroupA = "II./Jg52";
    axisFighterGroupB = "22* Gruppo Autonomo C.T.";
    axisAttackerGroup = "III./St.G2"
    axisBomberGroup = "I./Zg1";

    //axis planes
    axisPlaneA = "Bf109E7/Bf109F2";
    axisPlaneB = "Mc202";
    axisAttacker = "Ju87"
    axisBomber = "Bf110E2";

    eventDate = "October 16th, 2020";
    registration = true;


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
    toggleRegistration();
    setEventDate();
});

