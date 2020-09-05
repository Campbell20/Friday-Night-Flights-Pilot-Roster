$(document).ready(function () {

    //allied groups
    alliedFighterGroupA = "352nd Fighter Group";
    alliedFighterGroupB = "No.402 Squadron RCAF"
    alliedBomberGroup = "410th Bomber Group";

    //allied planes
    alliedPlaneA = "P51 Mustang";
    alliedPlaneB = "Spitfire MkIX/Tempest";
    alliedBomber = "A20/P47";

    //axis groups
    axisFighterGroupA = "I./JG1";
    axisFighterGroupB = "I./JG77";
    axisBomberGroup = "I./KG54";

    //axis planes
    axisPlaneA = "Bf109G14";
    axisPlaneB = "Fw190A8/Fw190D9";
    axisBomber = "BF110G2";

    eventDate = "September 11th";
    registration = true;


    function setFlightsAndPlanes() {
        document.getElementById("alliedfighterA").innerHTML = alliedFighterGroupA;
        document.getElementById("alliedfighterB").innerHTML = alliedFighterGroupB;
        document.getElementById("alliedbombergroup").innerHTML = alliedBomberGroup;

        document.getElementById("alliedfighterA-plane").innerHTML = alliedPlaneA;
        document.getElementById("alliedfighterB-plane").innerHTML = alliedPlaneB;
        document.getElementById("alliedbombergroup-plane").innerHTML = alliedBomber;

        document.getElementById("axisfighterA").innerHTML = axisFighterGroupA;
        document.getElementById("axisfighterB").innerHTML = axisFighterGroupB;
        document.getElementById("axisbombergroup").innerHTML = axisBomberGroup;

        document.getElementById("axisfighterA-plane").innerHTML = axisPlaneA;
        document.getElementById("axisfighterB-plane").innerHTML = axisPlaneB;
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