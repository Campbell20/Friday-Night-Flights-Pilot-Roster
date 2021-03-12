alliedredLeader = 0;
alliedblueLeader = 0;
alliedgreenLeader = 0;
alliedblackLeader = 0;
alliedgrowlerLeader = 0;
alliedravenLeader = 0;
alliedeagleLeader = 0;
alliedripperLeader = 0;
alliedbearLeader = 0;
alliedrabbitLeader = 0;
alliedfoxLeader = 0;
alliedbisonLeader = 0;
alliedpelicanLeader = 0;
alliedswanLeader = 0;
alliedseagullLeader = 0;
alliedcanaryLeader = 0;
alliedelseLeader = 0;

alliedredFlightNumber = 1;
alliedblueFlightNumber = 1;
alliedgreenFlightNumber = 1;
alliedblackFlightNumber = 1;
alliedgrowlerFlightNumber = 1;
alliedravenFlightNumber = 1;
alliedeagleFlightNumber = 1;
alliedripperFlightNumber = 1;
alliedbearFlightNumber = 1;
alliedrabbitFlightNumber = 1;
alliedfoxFlightNumber = 1;
alliedbisonFlightNumber = 1;
alliedpelicanFlightNumber = 1;
alliedswanFlightNumber = 1;
alliedseagullFlightNumber = 1;
alliedcanaryFlightNumber = 1;
alliedelseFlightNumber = 1;

axisredLeader = 0;
axisblueLeader = 0;
axisgreenLeader = 0;
axisblackLeader = 0;
axisgrowlerLeader = 0;
axisravenLeader = 0;
axiseagleLeader = 0;
axisripperLeader = 0;
axisbearLeader = 0;
axisrabbitLeader = 0;
axisfoxLeader = 0;
axisbisonLeader = 0;
axispelicanLeader = 0;
axisswanLeader = 0;
axisseagullLeader = 0;
axiscanaryLeader = 0;
axiselseLeader = 0;

axisredFlightNumber = 1;
axisblueFlightNumber = 1;
axisgreenFlightNumber = 1;
axisblackFlightNumber = 1;
axisgrowlerFlightNumber = 1;
axisravenFlightNumber = 1;
axiseagleFlightNumber = 1;
axisripperFlightNumber = 1;
axisbearFlightNumber = 1;
axisrabbitFlightNumber = 1;
axisfoxFlightNumber = 1;
axisbisonFlightNumber = 1;
axispelicanFlightNumber = 1;
axisswanFlightNumber = 1;
axisseagullFlightNumber = 1;
axiscanaryFlightNumber = 1;
axiselseFlightNumber = 1;



function assignWingmanRole(num, elementNum, elementIDNumber, elementID, elementNationName, elementPic, elementNationPic) {
    flight = ""
    flightElementNumber = 0;
    _elementIDNumber = elementIDNumber;
    _num = num

    if (flightForFighterSquadronA != "") {
        if (flightForFighterSquadronA == "It") {
            assignRandomFlightNumber(elementID, elementNum);
        } else {
            flight = flightForFighterSquadronA;
            if(flightElementNumber == 0) {
                flightElementNumber = elementNum + 5;
            }
            setFlightNumber();           
        }
    } else if (flightForFighterSquadronB != "") {
        if (flightForFighterSquadronB == "It") {
            assignRandomFlightNumber(elementID, elementNum);
        } else {
            flight = flightForFighterSquadronB;
            if(flightElementNumber == 0) {
                flightElementNumber = elementNum + 5;
            }
            setFlightNumber();
        }
    } else if (flightForAttackSquadron != "") {
        if (flightForAttackSquadron == "It") {
            assignRandomFlightNumber(elementID, elementNum);
        } else {
            flight = flightForAttackSquadron;
            if(flightElementNumber == 0) {
                flightElementNumber = elementNum + 5;
            }
            setFlightNumber();
        }
    } else {
        if (flightForBomberSquadron == "It") {
            assignRandomFlightNumber(elementID, elementNum);
        } else {
            flight = flightForBomberSquadron;
            if(flightElementNumber == 0) {
                flightElementNumber = elementNum + 5;
            }
            setFlightNumber();
        }
    }
    document.getElementById(_elementIDNumber + _num).innerHTML = flight + "-" + flightElementNumber;
    document.getElementById(elementID + num).innerHTML = elementNationName;
    document.getElementById(elementPic + num).src = "imgs/" + elementNationPic + "/" + elementNationPic + imageNumber + ".jpg";
}


function setFlightNumber() {
    var wing = "Wingman";
    if (side == alliedSide) {
        if (alliedFighterSquadronAPosition.includes(wing) || alliedFighterSquadronBPosition.includes(wing) || alliedAttackSquadronPosition.includes(wing) || alliedBomberSquadronPosition.includes(wing)) {
            switch (flight) {
                case "Red":
                    alliedredFlightNumber++;
                    return flightElementNumber = alliedredFlightNumber;
                case "Growler":
                    alliedgrowlerFlightNumber++;
                    return flightElementNumber = alliedgrowlerFlightNumber;
                case "Bear":
                    alliedbearFlightNumber++;
                    return flightElementNumber = alliedbearFlightNumber;
                case "Pelican":
                    alliedpelicanFlightNumber++;
                    return flightElementNumber = alliedpelicanFlightNumber;
                case "Blue":
                    alliedblueFlightNumber++;
                    return flightElementNumber = alliedblueFlightNumber;
                case "Raven":
                    alliedravenFlightNumber++;
                    return flightElementNumber = alliedravenFlightNumber;
                case "Rabbit":
                    alliedrabbitFlightNumber++;
                    return flightElementNumber = alliedrabbitFlightNumber;
                case "Swan":
                    alliedswanFlightNumber++;
                    return flightElementNumber = alliedswanFlightNumber;
                case "Green":
                    alliedgreenFlightNumber++;
                    return flightElementNumber = alliedgreenFlightNumber;
                case "Eagle":
                    alliedeagleFlightNumber++;
                    return flightElementNumber = alliedeagleFlightNumber;
                case "Fox":
                    alliedfoxFlightNumber++;
                    return flightElementNumber = alliedfoxFlightNumber;
                case "Seagull":
                    alliedseagullFlightNumber++;
                    return flightElementNumber = alliedseagullFlightNumber;
                case "Black":
                    alliedblackFlightNumber++;
                    return flightElementNumber = alliedblackFlightNumber;
                case "Ripper":
                    alliedripperFlightNumber++;
                    return flightElementNumber = alliedripperFlightNumber;
                case "Bison":
                    alliedbisonFlightNumber++;
                    return flightElementNumber = alliedbisonFlightNumber;
                case "Canary":
                    alliedcanaryFlightNumber++;
                    return flightElementNumber = alliedcanaryFlightNumber++
                default:
                    alliedelseFlightNumber++;
                    return flightElementNumber = alliedelseFlightNumber;
            }
        }
    }

    if (side == axisSide) {
        if (axisFighterSquadronAPosition.includes(wing) || axisFighterSquadronBPosition.includes(wing) || axisAttackSquadronPosition.includes(wing) || axisBomberSquadronPosition.includes(wing)) {
            switch (flight) {
                case "Red":
                    axisredFlightNumber++;
                    return flightElementNumber = axisredFlightNumber;
                case "Growler":
                    axisgrowlerFlightNumber++;
                    return flightElementNumber = axisgrowlerFlightNumber;
                case "Bear":
                    axisbearFlightNumber++;
                    return flightElementNumber = axisbearFlightNumber;
                case "Pelican":
                    axispelicanFlightNumber++;
                    return flightElementNumber = axispelicanFlightNumber;
                case "Blue":
                    axisblueFlightNumber++;
                    return flightElementNumber = axisblueFlightNumber;
                case "Raven":
                    axisravenFlightNumber++;
                    return flightElementNumber = axisravenFlightNumber;
                case "Rabbit":
                    axisrabbitFlightNumber++;
                    return flightElementNumber = axisrabbitFlightNumber;
                case "Swan":
                    axisswanFlightNumber++;
                    return flightElementNumber = axisswanFlightNumber;
                case "Green":
                    axisgreenFlightNumber++;
                    return flightElementNumber = axisgreenFlightNumber;
                case "Eagle":
                    axiseagleFlightNumber++;
                    return flightElementNumber = axiseagleFlightNumber;
                case "Fox":
                    axisfoxFlightNumber++;
                    return flightElementNumber = axisfoxFlightNumber;
                case "Seagull":
                    axisseagullFlightNumber++;
                    return flightElementNumber = axisseagullFlightNumber;
                case "Black":
                    axisblackFlightNumber++;
                    return flightElementNumber = axisblackFlightNumber;
                case "Ripper":
                    axisripperFlightNumber++;
                    return flightElementNumber = axisripperFlightNumber;
                case "Bison":
                    axisbisonFlightNumber++;
                    return flightElementNumber = axisbisonFlightNumber;
                case "Canary":
                    axiscanaryFlightNumber++;
                    return flightElementNumber = axiscanaryFlightNumber++
                default:
                    axiselseFlightNumber++;
                    return flightElementNumber = axiselseFlightNumber;
            }
        }
    }
}

function checkLeader(flight) {
    if (side == alliedSide) {
        if (flight == "Red") {
            alliedredLeader++;
            if (alliedredLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Growler") {
            alliedgrowlerLeader++;
            if (alliedgrowlerLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Bear") {
            alliedbearLeader++;
            if (alliedbearLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Pelican") {
            alliedpelicanLeader++;
            if (alliedpelicanLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Blue") {
            alliedblueLeader++;
            if (alliedblueLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Raven") {
            alliedravenLeader++;
            if (alliedravenLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Rabbit") {
            alliedrabbitLeader++;
            if (alliedrabbitLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Swan") {
            alliedswanLeader++;
            if (alliedswanLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Green") {
            alliedgreenLeader++;
            if (alliedgreenLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Eagle") {
            alliedeagleLeader++;
            if (alliedeagleLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Fox") {
            alliedfoxLeader++;
            if (alliedfoxLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Seagull") {
            alliedseagullLeader++;
            if (alliedseagullLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Black") {
            alliedblackLeader++;
            if (alliedblackLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Ripper") {
            alliedripperLeader++;
            if (alliedripperLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Bison") {
            alliedbisonLeader++;
            if (alliedbisonLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Canary") {
            alliedcanaryLeader++;
            if (alliedcanaryLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
    }

    if (side == axisSide) {
        if (flight == "Red") {
            axisredLeader++;
            if (axisredLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Growler") {
            axisgrowlerLeader++;
            if (axisgrowlerLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Bear") {
            axisbearLeader++;
            if (axisbearLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Pelican") {
            axispelicanLeader++;
            if (axispelicanLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Blue") {
            axisblueLeader++;
            if (axisblueLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Raven") {
            axisravenLeader++;
            if (axisravenLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Rabbit") {
            axisrabbitLeader++;
            if (axisrabbitLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Swan") {
            axisswanLeader++;
            if (axisswanLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Green") {
            axisgreenLeader++;
            if (axisgreenLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Eagle") {
            axiseagleLeader++;
            if (axiseagleLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Fox") {
            axisfoxLeader++;
            if (axisfoxLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Seagull") {
            axisseagullLeader++;
            if (axisseagullLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Black") {
            axisblackLeader++;
            if (axisblackLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Ripper") {
            axisripperLeader++;
            if (axisripperLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Bison") {
            axisbisonLeader++;
            if (axisbisonLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
        if (flight == "Canary") {
            axiscanaryLeader++;
            if (axiscanaryLeader <= 1) {
                return true;
            } else {
                return false;
            }
        }
    }
}



function setFlightLeaderText(groupNumberLead, LeadElementNumber) {
    //Adjust text for Flight Leader
    if ($(window).width() < 509) {
        if (flightForFighterSquadronA != "") {
            document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForFighterSquadronA + " Flight Lead";
        } else if (flightForFighterSquadronB != "") {
            document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForFighterSquadronB + " Flight Lead";
        } else if (flightForAttackSquadron != "") {
            document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForAttackSquadron + " Flight Lead";
        } else {
            document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForBomberSquadron + " Flight Lead";
        }
    } else if ($(window).width() > 991 && $(window).width() < 1209) {
        document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = "";
    } else if ($(window).width() >= 1210 && $(window).width() < 1529) {
        document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = "FL";
    } else if ($(window).width() >= 1530 && $(window).width() < 1950) {
        if (flightForFighterSquadronA != "") {
            document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForFighterSquadronA + " Flight Lead";
        } else if (flightForFighterSquadronB != "") {
            document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForFighterSquadronB + " Flight Lead";
        } else if (flightForAttackSquadron != "") {
            document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForAttackSquadron + " Flight Lead";
        } else {
            document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForBomberSquadron + " Flight Lead";
        }
    } else {
        if (flightForFighterSquadronA != "") {
            document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForFighterSquadronA + " Flight Leader";
        } else if (flightForFighterSquadronB != "") {
            document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForFighterSquadronB + " Flight Leader";
        } else if (flightForAttackSquadron != "") {
            document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForAttackSquadron + " Flight Leader";
        } else {
            document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForBomberSquadron + " Flight Leader";
        }
    }
}

function assignRandomFlightNumber() {
    if (alliedFG.includes(alliedTeamA)) {
        if (alliedredFlightNumber < 4) {
            flight = "Red";
            alliedredFlightNumber++;
            return flightElementNumber = alliedredFlightNumber;
        } else if (alliedblueFlightNumber < 4) {
            flight = "Blue";
            alliedblueFlightNumber++;
            return flightElementNumber = alliedblueFlightNumber;
        } else if (alliedgreenFlightNumber < 4) {
            flight = "Green";
            alliedgreenFlightNumber++;
            return flightElementNumber = alliedgrowlerFlightNumber;
        } else if (alliedblackFlightNumber < 4) {
            flight = "Black";
            alliedblackFlightNumber++;
            return flightElementNumber = alliedblackFlightNumber;
        } else {
            flight = "Purple";
                alliedelseFlightNumber++;
            return flightElementNumber = alliedelseFlightNumber;
        }

    } else if (alliedFG.includes(alliedTeamB)) {
        if (alliedgrowlerFlightNumber < 4) {
                alliedgrowlerFlightNumber++;
            flight = "Growler";
            return flightElementNumber = alliedgrowlerFlightNumber;
        } else if (alliedravenFlightNumber < 4) {
            flight = "Raven";
                alliedravenFlightNumber++;
            return flightElementNumber = alliedravenFlightNumber;
        } else if (alliedeagleFlightNumber < 4) {
            flight = "Eagle";
                alliedeagleFlightNumber++;
            return flightElementNumber = alliedeagleFlightNumber;
        } else if (alliedripperFlightNumber < 4) {
            flight = "Ripper";
                alliedripperFlightNumber++;
            return flightElementNumber = alliedripperFlightNumber;
        } else {
            flight = "Penguin"
                alliedelseFlightNumber++;
            return flightElementNumber = alliedelseFlightNumber;
        }

    } else if (alliedFG.includes(alliedAttackers)) {
        if (alliedbearFlightNumber < 4) {
            flight = "Bear";
                alliedbearFlightNumber++;
            return flightElementNumber = alliedbearFlightNumber;
        } else if (alliedrabbitFlightNumber < 4) {
            flight = "Rabbit";
                alliedrabbitFlightNumber++;
            return flightElementNumber = alliedrabbitFlightNumber;
        } else if (alliedfoxFlightNumber < 4) {
            flight = "Fox";
                alliedfoxFlightNumber++;
            return flightElementNumber = alliedfoxFlightNumber;
        } else if (alliedbisonFlightNumber < 4) {
            flight = "Bison";
                alliedbisonFlightNumber++;
            return flightElementNumber = alliedbisonFlightNumber;
        } else {
            flight = "Wolf";
                alliedelseFlightNumber++;
            return flightElementNumber = alliedelseFlightNumber;
        }


    } else if (alliedFG.includes(alliedBomber)) {
        if (alliedpelicanFlightNumber < 4) {
            flight = "Pelican";
                alliedpelicanFlightNumber++;
            return flightElementNumber = alliedpelicanFlightNumber;
        } else if (alliedswanFlightNumber < 4) {
            flight = "Swan";
                alliedswanFlightNumber++;
            return flightElementNumber = alliedswanFlightNumber;
        } else if (alliedseagullFlightNumber < 4) {
            flight = "Seagull";
                alliedseagullFlightNumber++;
            return flightElementNumber = alliedseagullFlightNumber;
        } else if (alliedcanaryFlightNumber < 4) {
            flight = "Canary";
                alliedcanaryFlightNumber++;
            return flightElementNumber = alliedcanaryFlightNumber;
        } else {
            flight = "Mockingbird";
                alliedelseFlightNumber++;
            return flightElementNumber = alliedelseFlightNumber;
        }
    }


    if (axisFG.includes(axisTeamA)) {
        if (axisredFlightNumber < 4) {
            flight = "Red";
                axisredFlightNumber++;
            return flightElementNumber = axisredFlightNumber;
        } else if (axisblueFlightNumber < 4) {
            flight = "Blue";
                axisblueFlightNumber++;
            return flightElementNumber = axisblueFlightNumber;
        } else if (axisgreenFlightNumber < 4) {
            flight = "Green";
                axisgreenFlightNumber++;
            return flightElementNumber = axisgrowlerFlightNumber;
        } else if (axisblackFlightNumber < 4) {
            flight = "Black";
                axisblackFlightNumber++;
            return flightElementNumber = axisblackFlightNumber;
        } else {
            flight = "Purple";
                axiselseFlightNumber++;
            return flightElementNumber = axiselseFlightNumber;
        }

    } else if (axisFG.includes(axisTeamB)) {
        if (axisgrowlerFlightNumber < 4) {
                axisgrowlerFlightNumber++;
            flight = "Growler";
            return flightElementNumber = axisgrowlerFlightNumber;
        } else if (axisravenFlightNumber < 4) {
            flight = "Raven";
                axisravenFlightNumber++;
            return flightElementNumber = axisravenFlightNumber;
        } else if (axiseagleFlightNumber < 4) {
            flight = "Eagle";
                axiseagleFlightNumber++;
            return flightElementNumber = axiseagleFlightNumber;
        } else if (axisripperFlightNumber < 4) {
            flight = "Ripper";
                axisripperFlightNumber++;
            return flightElementNumber = axisripperFlightNumber;
        } else {
            flight = "Penguin"
                axiselseFlightNumber++;
            return flightElementNumber = axiselseFlightNumber;
        }

    } else if (axisFG.includes(axisAttackers)) {
        if (axisbearFlightNumber < 4) {
            flight = "Bear";
                axisbearFlightNumber++;
            return flightElementNumber = axisbearFlightNumber;
        } else if (axisrabbitFlightNumber < 4) {
            flight = "Rabbit";
                axisrabbitFlightNumber++;
            return flightElementNumber = axisrabbitFlightNumber;
        } else if (axisfoxFlightNumber < 4) {
            flight = "Fox";
                axisfoxFlightNumber++;
            return flightElementNumber = axisfoxFlightNumber;
        } else if (axisbisonFlightNumber < 4) {
            flight = "Bison";
                axisbisonFlightNumber++;
            return flightElementNumber = axisbisonFlightNumber;
        } else {
            flight = "Wolf";
                axiselseFlightNumber++;
            return flightElementNumber = axiselseFlightNumber;
        }


    } else if (axisFG.includes(axisBomber)) {
        if (axispelicanFlightNumber < 4) {
            flight = "Pelican";
                axispelicanFlightNumber++;
            return flightElementNumber = axispelicanFlightNumber;
        } else if (axisswanFlightNumber < 4) {
            flight = "Swan";
                axisswanFlightNumber++;
            return flightElementNumber = axisswanFlightNumber;
        } else if (axisseagullFlightNumber < 4) {
            flight = "Seagull";
                axisseagullFlightNumber++;
            return flightElementNumber = axisseagullFlightNumber;
        } else if (axiscanaryFlightNumber < 4) {
            flight = "Canary";
                axiscanaryFlightNumber++;
            return flightElementNumber = axiscanaryFlightNumber;
        } else {
            flight = "Mockingbird";
                axiselseFlightNumber++;
            return flightElementNumber = axiselseFlightNumber;
        }
    }
}
