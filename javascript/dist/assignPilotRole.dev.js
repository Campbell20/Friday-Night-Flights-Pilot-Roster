"use strict";

redLeader = 0;
blueLeader = 0;
greenLeader = 0;
blackLeader = 0;
growlerLeader = 0;
ravenLeader = 0;
eagleLeader = 0;
ripperLeader = 0;
bearLeader = 0;
rabbitLeader = 0;
foxLeader = 0;
bisonLeader = 0;
pelicanLeader = 0;
swanLeader = 0;
seagullLeader = 0;
canaryLeader = 0;
elseLeader = 0;
redFlightNumber = 1;
blueFlightNumber = 1;
greenFlightNumber = 1;
blackFlightNumber = 1;
growlerFlightNumber = 1;
ravenFlightNumber = 1;
eagleFlightNumber = 1;
ripperFlightNumber = 1;
bearFlightNumber = 1;
rabbitFlightNumber = 1;
foxFlightNumber = 1;
bisonFlightNumber = 1;
pelicanFlightNumber = 1;
swanFlightNumber = 1;
seagullFlightNumber = 1;
canaryFlightNumber = 1;
elseFlightNumber = 1;

function assignWingmanRole(num, elementNum, elementIDNumber, elementID, elementNationName, elementPic, elementNationPic) {
  flight = "";
  flightElementNumber = 0;
  _elementIDNumber = elementIDNumber;
  _num = num;

  if (flightForFighterSquadronA != "") {
    if (flightForFighterSquadronA == "It") {
      //give random name to flight
      assignRandomFlight(elementID, elementNum);
      setFlightNumber();
    } else {
      flight = flightForFighterSquadronA;
      setFlightNumber();
    }
  } else if (flightForFighterSquadronB != "") {
    if (flightForFighterSquadronB == "It") {
      assignRandomFlight(elementID, elementNum);
    } else {
      flight = flightForFighterSquadronB;
      setFlightNumber();
    }
  } else if (flightForAttackSquadron != "") {
    if (flightForAttackSquadron == "It") {
      assignRandomFlight(elementID, elementNum);
    } else {
      flight = flightForAttackSquadron;
      setFlightNumber();
    }
  } else {
    if (flightForBomberSquadron == "It") {
      assignRandomFlightColor(elementID, elementNum);
    } else {
      flight = flightForBomberSquadron;
      setFlightNumber();
    }
  }

  document.getElementById(_elementIDNumber + _num).innerHTML = flight + "-" + flightElementNumber;
  document.getElementById(elementID + num).innerHTML = elementNationName;
  document.getElementById(elementPic + num).src = "imgs/" + elementNationPic + "/" + elementNationPic + imageNumber + ".jpg";
}

function setFlightNumber() {
  switch (flight) {
    case "Red":
      redFlightNumber++;
      return flightElementNumber = redFlightNumber;

    case "Growler":
      growlerFlightNumber++;
      return flightElementNumber = growlerFlightNumber;

    case "Bear":
      bearFlightNumber++;
      return flightElementNumber = bearFlightNumber;

    case "Pelican":
      pelicanFlightNumber++;
      return flightElementNumber = pelicanFlightNumber;

    case "Blue":
      blueFlightNumber++;
      return flightElementNumber = blueFlightNumber;

    case "Raven":
      ravenFlightNumber++;
      return flightElementNumber = ravenFlightNumber;

    case "Rabbit":
      rabbitFlightNumber++;
      return flightElementNumber = rabbitFlightNumber;

    case "Swan":
      swanFlightNumber++;
      return flightElementNumber = swanFlightNumber;

    case "Green":
      greenFlightNumber++;
      return flightElementNumber = greenFlightNumber;

    case "Eagle":
      eagleFlightNumber++;
      return flightElementNumber = eagleFlightNumber;

    case "Fox":
      foxFlightNumber++;
      return flightElementNumber = foxFlightNumber;

    case "Seagull":
      seagullFlightNumber++;
      return flightElementNumber = seagullFlightNumber;

    case "Black":
      blackFlightNumber++;
      return flightElementNumber = blackFlightNumber;

    case "Ripper":
      ripperFlightNumber++;
      return flightElementNumber = ripperFlightNumber;

    case "Bison":
      bisonFlightNumber++;
      return flightElementNumber = bisonFlightNumber;

    case "Canary":
      canaryFlightNumber++;
      return flightElementNumber = canaryFlightNumber++;

    default:
      elseFlightNumber++;
      return flightElementNumber = elseFlightNumber;
  }
}

function checkLeader(flight) {
  if (flight == "Red") {
    redLeader++;

    if (redLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (flight == "Growler") {
    growlerLeader++;

    if (growlerLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (flight == "Bear") {
    bearLeader++;

    if (bearLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (flight == "Pelican") {
    pelicanLeader++;

    if (pelicanLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (flight == "Blue") {
    blueLeader++;

    if (blueLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (flight == "Raven") {
    ravenLeader++;

    if (ravenLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (flight == "Rabbit") {
    rabbitLeader++;

    if (rabbitLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (flight == "Swan") {
    swanLeader++;

    if (swanLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (flight == "Green") {
    greenLeader++;

    if (greenLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (flight == "Eagle") {
    eagleLeader++;

    if (eagleLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (flight == "Fox") {
    foxLeader++;

    if (foxLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (flight == "Seagull") {
    seagullLeader++;

    if (seagullLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (flight == "Black") {
    blackLeader++;

    if (blackLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (flight == "Ripper") {
    ripperLeader++;

    if (ripperLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (flight == "Bison") {
    bisonLeader++;

    if (bisonLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }

  if (flight == "Canary") {
    canaryLeader++;

    if (canaryLeader <= 1) {
      return true;
    } else {
      return false;
    }
  }
}

function setFlightLeaderText(groupNumberLead, LeadElementNumber) {
  //Adjust text for Flight Leader
  if ($(window).width() <= 509) {
    if (flightForFighterSquadronA != "") {
      document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForFighterSquadronA + " Flight Lead";
    } else if (flightForFighterSquadronB != "") {
      document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForFighterSquadronB + " Flight Lead";
    } else if (flightForAttackSquadron != "") {
      document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForAttackSquadron + " Flight Lead";
    } else {
      document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = flightForBomberSquadron + " Flight Lead";
    }
  } else if ($(window).width() > 991 && $(window).width() <= 1209) {
    document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = "";
  } else if ($(window).width() >= 1210 && $(window).width() <= 1529) {
    document.getElementById(groupNumberLead + LeadElementNumber).innerHTML = "FL";
  } else if ($(window).width() >= 1530 && $(window).width() <= 1950) {
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

function assignRandomFlight() {
  if (alliedFG.includes(alliedTeamA)) {
    if (redFlightNumber <= 4) {
      flight = "Red";
      redFlightNumber++;
      return flightElementNumber = redFlightNumber;
    } else if (blueFlightNumber <= 4) {
      flight = "Blue";
      blueFlightNumber++;
      return flightElementNumber = blueFlightNumber;
    } else if (greenFlightNumber <= 4) {
      flight = "Green";
      greenFlightNumber++;
      return flightElementNumber = growlerFlightNumber;
    } else if (blackFlightNumber <= 4) {
      flight = "Black";
      blackFlightNumber++;
      return flightElementNumber = blackFlightNumber;
    } else {
      flight = "Purple";
      elseFlightNumber++;
      return flightElementNumber = elseFlightNumber;
    }
  } else if (alliedFG.includes(alliedTeamB)) {
    if (growlerFlightNumber <= 4) {
      flight = "Growler";
      growlerFlightNumber++;
      return flightElementNumber = growlerFlightNumber;
    } else if (ravenFlightNumber <= 4) {
      flight = "Raven";
      ravenFlightNumber++;
      return flightElementNumber = ravenFlightNumber;
    } else if (eagleFlightNumber <= 4) {
      flight = "Eagle";
      eagleFlightNumber++;
      return flightElementNumber = eagleFlightNumber;
    } else if (ripperFlightNumber <= 4) {
      flight = "Ripper";
      ripperFlightNumber++;
      return flightElementNumber = ripperFlightNumber;
    } else {
      flight = "Penguin";
      elseFlightNumber++;
      return flightElementNumber = elseFlightNumber;
    }
  } else if (alliedFG.includes(alliedAttackers)) {
    if (bearFlightNumber <= 4) {
      flight = "Bear";
      bearFlightNumber++;
      return flightElementNumber = bearFlightNumber;
    } else if (rabbitFlightNumber <= 4) {
      flight = "Rabbit";
      rabbitFlightNumber++;
      return flightElementNumber = rabbitFlightNumber;
    } else if (foxFlightNumber <= 4) {
      flight = "Fox";
      foxFlightNumber++;
      return flightElementNumber = foxFlightNumber;
    } else if (bisonFlightNumber <= 4) {
      flight = "Bison";
      bisonFlightNumber++;
      return flightElementNumber = bisonFlightNumber;
    } else {
      flight = "Wolf";
      elseFlightNumber++;
      return flightElementNumber = elseFlightNumber;
    }
  } else {
    if (pelicanFlightNumber <= 4) {
      flight = "Pelican";
      pelicanFlightNumber++;
      return flightElementNumber = pelicanFlightNumber;
    } else if (swanFlightNumber <= 4) {
      flight = "Swan";
      swanFlightNumber++;
      return flightElementNumber = swanFlightNumber;
    } else if (seagullFlightNumber <= 4) {
      flight = "Seagull";
      seagullFlightNumber++;
      return flightElementNumber = seagullFlightNumber;
    } else if (canaryFlightNumber <= 4) {
      flight = "Canary";
      canaryFlightNumber++;
      return flightElementNumber = canaryFlightNumber;
    } else {
      flight = "Mockingbird";
      elseFlightNumber++;
      return flightElementNumber = elseFlightNumber;
    }
  }
}