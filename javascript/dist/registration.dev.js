"use strict";

//Friday Event
FnFevent = "<em>Early War</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/b5f6c918'>Event Time</a></strong>";
FnFregistration = false;
SeFevent = "<em>Early War</em>&nbsp;-&nbsp;<strong><a href='https://everytimezone.com/s/2c224d75'>Event Time</a></strong>";
SeFregistration = true;
totalFnFRegistered = 85;
totalSeFRegistered = 85;

function setEvent() {
  title = document.getElementById("title").innerHTML;

  if (title.includes("Friday")) {
    if (FnFregistration == false) {
      document.getElementById("FnFevent-closed").innerHTML = FnFevent;
      $("#FnFevent-open").addClass("hidden-templates");
      $("#FnFevent-btn").addClass("hidden-templates");
      $("#FnFevent-main-btn").addClass("disabled");
    } else {
      document.getElementById("FnFevent-open").innerHTML = FnFevent;
      $("#FnFevent-closed").addClass("hidden-templates");
    }
  }

  if (title.includes("Saturday")) {
    if (SeFregistration == false) {
      document.getElementById("SeFevent-closed").innerHTML = SeFevent;
      $("#SeFevent-open").addClass("hidden-templates");
      $("#SeFevent-btn").addClass("hidden-templates");
    } else {
      document.getElementById("SeFevent-open").innerHTML = SeFevent;
      $("#SeFevent-closed").addClass("hidden-templates");
    }
  }
}

function registrationFnFFull(side) {
  if (side == axisSide || side == alliedSide) {
    totalFnFRegistered--;
    document.getElementById('slots-left').innerHTML = totalFnFRegistered;
  }

  if (totalFnFRegistered <= 1) {
    FnFregistration = false;
  }
}

function registrationSeFFull(side) {
  if (side == axisSide || side == alliedSide) {
    totalSeFRegistered--;
    document.getElementById('slots-left').innerHTML = totalSeFRegistered;
  }

  if (totalSeFRegistered <= 1) {
    SeFregistration = false;
  }
}

setEvent();