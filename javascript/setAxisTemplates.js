function sortAxisWingmen() {
    $('#axisFighterGroupLeadSortA').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisfighterA-Lead');

    $('#axisFighterGroupSortA').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisfighterA-wingmen');


    $('#axisFighterGroupLeadSortB').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisfighterB-Lead');

    $('#axisFighterGroupSortB').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisfighterB-wingmen');



    $('#axisAttackerGroupSortLead').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisAttackerGroup-Lead');

    $('#axisAttackerGroupSort').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisAttackerGroup-wingmen');


    $('#axisBomberGroupSortLead').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisbomber-Lead');

    $('#axisBomberGroupSort').sort(function (a, b) {
        if (a.textContent < b.textContent) {
            return -1;
        } else {
            return 1;
        }
    }).appendTo('#axisbomber-wingmen');
}