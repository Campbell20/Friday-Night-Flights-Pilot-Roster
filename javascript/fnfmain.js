$(document).ready(function () {

    //allied groups
    alliedFighterGroupA = "La5F";
    alliedFighterGroupB = "SpitfireIX"
    alliedAttackerGroup = "IL21942"
    alliedBomberGroup = "A20s";

    //allied planes
    alliedPlaneA = "La5F";
    alliedPlaneB = "SpitfireIX";
    alliedAttacker = "IL21942"
    alliedBomber = "A20";

    //axis groups
    axisFighterGroupA = "109G6Late (no MW50)";
    axisFighterGroupB = "109F4";
    axisAttackerGroup = "190A5"
    axisBomberGroup = "Bf110G2";

    //axis planes
    axisPlaneA = "109G6Late (no MW50)";
    axisPlaneB = "109F4";
    axisAttacker = "190A5"
    axisBomber = "Bf110G2";

    eventDate = "<em>1943 Plane Set</em> - <strong>December 4th, 2020 at 9pm Eastern</strong>";
    registration = false;

    $.getJSON('https://spreadsheets.google.com/feeds/list/1L3xLMrObQItYs0vnazhZK06TAaIGamsxSBMaMOCffv4/1/public/full?alt=json').done(function (json) {
        //side names
        alliedSide = "Allied";
        axisSide = "Axis";

        //allied flights
        alliedTeamA = alliedFighterGroupA;
        alliedTeamB = alliedFighterGroupB;
        alliedAttackers = alliedAttackerGroup;
        alliedBomber = alliedBomberGroup;

        // axis flights
        axisTeamA = axisFighterGroupA;
        axisTeamB = axisFighterGroupB;
        axisAttackers = axisAttackerGroup;
        axisBomber = axisBomberGroup;

        setAlliedTemplates(json, randomNumber);
        setAxisTemplates(json, randomNumber);
    });

    $.get('data/randomNumbers.txt', function (ranNum) {
        randomNumber = ranNum.split('\n');
    });

    $.get('data/Names/FirstNamesUSA.txt', function (fnUSA) {
        firstNamesUSA = fnUSA.split('\n');
    });
    $.get('data/Names/LastNamesUSA.txt', function (lnUSA) {
        lastNamesUSA = lnUSA.split('\n');
    });
    $.get('data/Names/FirstNamesGermany.txt', function (fnGermany) {
        firstNamesGermany = fnGermany.split('\n');
    });
    $.get('data/Names/LastNamesGermany.txt', function (lnGermany) {
        lastNamesGermany = lnGermany.split('\n');
    });

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
