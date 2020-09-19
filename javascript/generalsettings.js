$(document).ready(function () {

    //allied groups
    alliedFighterGroupA = "Fighters";
    alliedFighterGroupB = ""
    alliedBomberGroup = "Bombers";

    //allied planes
    alliedPlaneA = "WW1 Fighters";
    alliedPlaneB = "";
    alliedBomber = "WW1 Bombers";

    //axis groups
    axisFighterGroupA = "Fighters";
    axisFighterGroupB = "";
    axisBomberGroup = "Bombers";

    //axis planes
    axisPlaneA = "WW1 Fighters";
    axisPlaneB = "";
    axisBomber = "WW1 Bombers";

    eventDate = "September 25th";
    registration = true;


    function setFlightsAndPlanes() {
        document.getElementById("alliedfighterA").innerHTML = alliedFighterGroupA;
        // document.getElementById("alliedfighterB").innerHTML = alliedFighterGroupB;
        document.getElementById("alliedbombergroup").innerHTML = alliedBomberGroup;

        document.getElementById("alliedfighterA-plane").innerHTML = alliedPlaneA;
        // document.getElementById("alliedfighterB-plane").innerHTML = alliedPlaneB;
        document.getElementById("alliedbombergroup-plane").innerHTML = alliedBomber;

        document.getElementById("axisfighterA").innerHTML = axisFighterGroupA;
        // document.getElementById("axisfighterB").innerHTML = axisFighterGroupB;
        document.getElementById("axisbombergroup").innerHTML = axisBomberGroup;

        document.getElementById("axisfighterA-plane").innerHTML = axisPlaneA;
        // document.getElementById("axisfighterB-plane").innerHTML = axisPlaneB;
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
        }
        else {
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