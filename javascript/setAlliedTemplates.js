function sortAlliedWingmen() {
  $('#alliedFighterGroupLeadSortA').sort(function (a, b) {
    if (a.textContent < b.textContent) {
      return -1;
    } else {
      return 1;
    }
  }).appendTo('#alliedfighterA-Lead');

  $('#alliedFighterGroupSortA').sort(function (a, b) {
    if (a.textContent < b.textContent) {
      return -1;
    } else {
      return 1;
    }
  }).appendTo('#alliedfighterA-wingmen');


  $('#alliedFighterGroupLeadSortB').sort(function (a, b) {
    if (a.textContent < b.textContent) {
      return -1;
    } else {
      return 1;
    }
  }).appendTo('#alliedfighterB-Lead');

  $('#alliedFighterGroupSortB').sort(function (a, b) {
    if (a.textContent < b.textContent) {
      return -1;
    } else {
      return 1;
    }
  }).appendTo('#alliedfighterB-wingmen');



  $('#alliedAttackerGroupSortLead').sort(function (a, b) {
    if (a.textContent < b.textContent) {
      return -1;
    } else {
      return 1;
    }
  }).appendTo('#alliedAttackerGroup-Lead');

  $('#alliedAttackerGroupSort').sort(function (a, b) {
    if (a.textContent < b.textContent) {
      return -1;
    } else {
      return 1;
    }
  }).appendTo('#alliedAttackerGroup-wingmen');


  $('#alliedBomberGroupSortLead').sort(function (a, b) {
    if (a.textContent < b.textContent) {
      return -1;
    } else {
      return 1;
    }
  }).appendTo('#alliedbomber-Lead');

  $('#alliedBomberGroupSort').sort(function (a, b) {
    if (a.textContent < b.textContent) {
      return -1;
    } else {
      return 1;
    }
  }).appendTo('#alliedbomber-wingmen');
}