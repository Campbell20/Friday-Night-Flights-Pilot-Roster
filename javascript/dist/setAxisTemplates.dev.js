// function createGridsFromTemplate(json) {
//     jsonLength = Object.keys(json.feed.entry).length;
//     // axis flights
//     axisTeamA = "II./Jg52";
//     axisTeamB = "22* Gruppo Autonomo C.T.";
//     axisAttackers = "III./St.G2";
//     axisBomber = "I./Zg1";
//     FlightColor = "";
//     var axisFGATemplateLead = document.getElementsByTagName("template-axisFGA-Lead")[0];
//     var axisFGATemplate = document.getElementsByTagName("template-axisFGA")[0];
//     var axisFGBTemplateLead = document.getElementsByTagName("template-axisFGB-Lead")[0];
//     var axisFGBTemplate = document.getElementsByTagName("template-axisFGB")[0];
//     var axisBomberTemplateLead = document.getElementsByTagName("template-axisBG-Lead")[0];
//     var axisBomberTemplate = document.getElementsByTagName("template-axisBG")[0];
//     FlightColor = "";
//     //Axis Fight Group A
//     axisFGALeader = 0;
//     axisFGA = 0;
//     axisFGALeadElementNumber = 0;
//     axisFGAElementNumber = 1;
//     //Axis Fighter Group B
//     axisFGBLeader = 0;
//     axisFGB = 0;
//     axisFGBLeadElementNumber = 0;
//     axisFGBElementNumber = 1;
//     //Axis Bomber Group
//     axisBGLeader = 0;
//     axisBG = 0;
//     axisBGLeadElementNumber = 0;
//     axisBGElementNumber = 1;
//     for (i = 0; i < jsonLength; i++) {
//         side = json.feed.entry[i].gsx$whichsideoftheconflictwouldyouliketobeon.$t;
//         imageNumber = parseInt(randomNumber[i]);
//         alliedFG = json.feed.entry[i].gsx$selectflightgroup.$t;
//         alliedName = firstNamesUSA[imageNumber] + " \"" + json.feed.entry[i].gsx$enterpilotnickname.$t + "\" " + lastNamesUSA[imageNumber];
//         alliedPosition = json.feed.entry[i].gsx$selectpilotposition.$t;
//         axisFG = json.feed.entry[i].gsx$selectflightgroup_2.$t;
//         axisName = firstNamesGermany[imageNumber] + " \"" + json.feed.entry[i].gsx$enterpilotnickname_2.$t + "\" " + lastNamesGermany[imageNumber];
//         axisPosition = json.feed.entry[i].gsx$selectpilotposition_2.$t;
//         // Squadrons
//         fighterSquadronA = json.feed.entry[i].gsx$whichflightdoyouwishtobein.$t.split(" ")[0];
//         fighterSquadronB = json.feed.entry[i].gsx$whichflightdoyouwishtobein_2.$t.split(" ")[0];
//         attackSquadron = json.feed.entry[i].gsx$whichflightdoyouwishtobein_3.$t.split(" ")[0];
//         bomberSquadron = json.feed.entry[i].gsx$whichflightdoyouwishtobein_4.$t.split(" ")[0];
//         console.log(fighterSquadronA);
//         console.log(fighterSquadronB);
//         console.log(attackSquadron);
//         console.log(bomberSquadron);
//         createIds();
//         if (side == alliedSide) {
//             //Allied Fighter Group A
//             if (alliedFG.includes(alliedTeamA)) {
//                 if (alliedPosition.includes("Squadron")) {
//                     document.getElementById('alliedfighterA-leader').innerHTML = alliedName;
//                     document.getElementById('alliedfighterA-leader-pic').src = 'imgs/American/American' + imageNumber + ".jpg";
//                 } else {
//                     if (alliedPosition.includes("Flight Lead")) {
//                         var alliedFGALeadDivs = alliedFGATemplateLead.querySelector('div');
//                         var alliedfightergroupADLead;
//                         alliedfightergroupADLead = document.importNode(alliedFGALeadDivs, true);
//                         document.getElementById("alliedfighterA-lead").appendChild(alliedfightergroupADLead);
//                         document.getElementById("alliedFGA-lead" + alliedFGALeadElementNumber).innerHTML = alliedName;
//                         document.getElementById('alliedFGA-pic-lead' + alliedFGALeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
//                         setFlightLeaderText("alliedFGA-number-lead", alliedFGALeadElementNumber);
//                         alliedFGALeadElementNumber++;
//                     } else {
//                         var alliedFGADivs = alliedFGATemplate.querySelector('div');
//                         var alliedfightergroupAD;
//                         alliedfightergroupAD = document.importNode(alliedFGADivs, true);
//                         document.getElementById("alliedfighterA-wingmen").appendChild(alliedfightergroupAD);
//                         if (alliedFGAElementNumber == 1) {
//                             alliedFGAElementNumber++;
//                         }
//                         assignRole(alliedFGA, alliedFGAElementNumber, "alliedFGA-number", "alliedFGA", alliedName, 'alliedFGA-pic', 'American');
//                         alliedFGAElementNumber++;
//                         alliedFGA++;
//                     }
//                 }
//             }
//             //Allied Fighter Group B
//             // if (alliedFG.includes(alliedTeamB)) {
//             //     if (alliedPosition.includes("Squadron")) {
//             //         document.getElementById('alliedfighterB-leader').innerHTML = alliedName;
//             //         document.getElementById('alliedfighterB-leader-pic').src = 'imgs/American/American' + imageNumber + ".jpg";
//             //     }
//             //     else {
//             //         if (alliedPosition.includes("Flight Lead")) {
//             //             var alliedFGBLeadDivs = alliedFGBTemplateLead.querySelector('div');
//             //             var alliedfightergroupBDLead;
//             //             alliedfightergroupBDLead = document.importNode(alliedFGBLeadDivs, true);
//             //             document.getElementById("alliedfighterB-lead").appendChild(alliedfightergroupBDLead);
//             //             document.getElementById("alliedFGB-lead" + alliedFGBLeadElementNumber).innerHTML = alliedName;
//             //             document.getElementById('alliedFGB-pic-lead' + alliedFGBLeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
//             //             document.getElementById("alliedFGB-number-lead" + alliedFGBLeadElementNumber).innerHTML = "Flight Lead";
//             //             alliedFGBLeadElementNumber++;
//             //         }
//             //         else {
//             //             var alliedFGBDivs = alliedFGBTemplate.querySelector('div');
//             //             var alliedfightergroupBD;
//             //             alliedfightergroupBD = document.importNode(alliedFGBDivs, true);
//             //             document.getElementById("alliedfighterB-wingmen").appendChild(alliedfightergroupBD);
//             //             if(alliedFGBElementNumber == 1){
//             //                 alliedFGBElementNumber++;
//             //             }
//             //             assignRole(alliedFGB, alliedFGBElementNumber, "alliedFGB-number", "alliedFGB", alliedName, 'alliedFGB-pic', 'American');
//             //             alliedFGBElementNumber++;
//             //             alliedFGB++;
//             //         }
//             //     }
//             // }
//             //Allied Bomber Group
//             if (alliedFG.includes(alliedBomber)) {
//                 if (alliedPosition.includes("Squadron")) {
//                     document.getElementById('alliedbomber-leader').innerHTML = alliedName;
//                     document.getElementById('alliedbomber-leader-pic').src = 'imgs/American/American' + imageNumber + ".jpg";
//                 } else {
//                     if (alliedPosition.includes("Flight Lead")) {
//                         var alliedBGLeadDivs = alliedBomberTemplateLead.querySelector('div');
//                         var alliedBGLead;
//                         alliedBGLead = document.importNode(alliedBGLeadDivs, true);
//                         document.getElementById("alliedbomber-lead").appendChild(alliedBGLead);
//                         document.getElementById("alliedBG-lead" + alliedBGLeadElementNumber).innerHTML = alliedName;
//                         document.getElementById('alliedBG-pic-lead' + alliedBGLeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
//                         document.getElementById("alliedBG-number-lead" + alliedBGLeadElementNumber).innerHTML = "Flight Lead";
//                         alliedBGLeadElementNumber++;
//                     } else {
//                         var alliedBGDivs = alliedBomberTemplate.querySelector('div');
//                         var alliedBomberGroupBD;
//                         alliedBomberGroupBD = document.importNode(alliedBGDivs, true);
//                         document.getElementById("alliedbomber-wingmen").appendChild(alliedBomberGroupBD);
//                         if (alliedBGElementNumber == 1) {
//                             alliedBGElementNumber++;
//                         }
//                         assignRole(alliedBG, alliedBGElementNumber, "alliedBG-number", "alliedBomberGroup", alliedName, 'alliedBG-pic', 'American');
//                         alliedBGElementNumber++;
//                         alliedBG++;
//                     }
//                 }
//             }
//         }
//         if (side == axisSide) {
//             //Axis Fighter Group A
//             if (axisFG.includes(axisTeamA)) {
//                 if (axisPosition.includes("Squadron")) {
//                     document.getElementById('axisfighterA-leader').innerHTML = axisName;
//                     document.getElementById('axisfighterA-leader-pic').src = 'imgs/German/German' + imageNumber + ".jpg";
//                 } else {
//                     if (axisPosition.includes("Flight Lead")) {
//                         var axisFGALeadDivs = axisFGATemplateLead.querySelector('div');
//                         var axisfightergroupADLead;
//                         axisfightergroupADLead = document.importNode(axisFGALeadDivs, true);
//                         document.getElementById("axisfighterA-lead").appendChild(axisfightergroupADLead);
//                         document.getElementById("axisFGA-lead" + axisFGALeadElementNumber).innerHTML = axisName;
//                         document.getElementById('axisFGA-pic-lead' + axisFGALeadElementNumber).src = 'imgs/German/German' + imageNumber + ".jpg";
//                         document.getElementById("axisFGA-number-lead" + axisFGALeadElementNumber).innerHTML = "Flight Lead";
//                         axisFGALeadElementNumber++;
//                     } else {
//                         var axisFGADivs = axisFGATemplate.querySelector('div');
//                         var axisfightergroupAD;
//                         axisfightergroupAD = document.importNode(axisFGADivs, true);
//                         document.getElementById("axisfighterA-wingmen").appendChild(axisfightergroupAD);
//                         if (axisFGAElementNumber == 1) {
//                             axisFGAElementNumber++;
//                         }
//                         assignRole(axisFGA, axisFGAElementNumber, "axisFGA-number", "axisFGA", axisName, 'axisFGA-pic', 'German');
//                         axisFGAElementNumber++;
//                         axisFGA++;
//                     }
//                 }
//             }
//             //Axis Fighter Group B
//             // if (axisFG.includes(axisTeamB)) {
//             //     if (axisPosition.includes("Squadron")) {
//             //         document.getElementById('axisfighterB-leader').innerHTML = axisName;
//             //         document.getElementById('axisfighterB-leader-pic').src = 'imgs/German/German' + imageNumber + ".jpg";
//             //     }
//             //     else {
//             //         if (axisPosition.includes("Flight Lead")) {
//             //             var axisFGBLeadDivs = axisFGBTemplateLead.querySelector('div');
//             //             var axisfightergroupBDLead;
//             //             axisfightergroupBDLead = document.importNode(axisFGBLeadDivs, true);
//             //             document.getElementById("axisfighterB-lead").appendChild(axisfightergroupBDLead);
//             //             document.getElementById("axisFGB-lead" + axisFGBLeadElementNumber).innerHTML = axisName;
//             //             document.getElementById('axisFGB-pic-lead' + axisFGBLeadElementNumber).src = 'imgs/German/German' + imageNumber + ".jpg";
//             //             document.getElementById("axisFGB-number-lead" + axisFGBLeadElementNumber).innerHTML = "Flight Lead";
//             //             axisFGBLeadElementNumber++;
//             //         }
//             //         else {
//             //             var axisFGBDivs = axisFGBTemplate.querySelector('div');
//             //             var axisfightergroupBD;
//             //             axisfightergroupBD = document.importNode(axisFGBDivs, true);
//             //             document.getElementById("axisfighterB-wingmen").appendChild(axisfightergroupBD);
//             //             if(axisFGBElementNumber == 1){
//             //                 axisFGBElementNumber++;
//             //             }
//             //             assignRole(axisFGB, axisFGBElementNumber, "axisFGB-number", "axisFGB", axisName, 'axisFGB-pic', 'German');
//             //             axisFGBElementNumber++;
//             //             axisFGB++;
//             //         }
//             //     }
//             // }
//             //Axis Bomber Group
//             if (axisFG.includes(axisBomber)) {
//                 if (axisPosition.includes("Squadron")) {
//                     document.getElementById('axisbomber-leader').innerHTML = axisName;
//                     document.getElementById('axisbomber-leader-pic').src = 'imgs/German/German' + imageNumber + ".jpg";
//                 } else {
//                     if (axisPosition.includes("Flight Lead")) {
//                         var axisBGLeadDivs = axisBomberTemplateLead.querySelector('div');
//                         var axisBomberGroupLead;
//                         axisBomberGroupLead = document.importNode(axisBGLeadDivs, true);
//                         document.getElementById("axisbomber-lead").appendChild(axisBomberGroupLead);
//                         document.getElementById("axisBG-lead" + axisBGLeadElementNumber).innerHTML = axisName;
//                         document.getElementById('axisBG-pic-lead' + axisBGLeadElementNumber).src = 'imgs/German/German' + imageNumber + ".jpg";
//                         document.getElementById("axisBG-number-lead" + axisBGLeadElementNumber).innerHTML = "Flight Lead";
//                         axisBGLeadElementNumber++;
//                     } else {
//                         var axisBGDivs = axisBomberTemplate.querySelector('div');
//                         var axisBomberGroupBD;
//                         axisBomberGroupBD = document.importNode(axisBGDivs, true);
//                         document.getElementById("axisbomber-wingmen").appendChild(axisBomberGroupBD);
//                         if (axisBGElementNumber == 1) {
//                             axisBGElementNumber++;
//                         }
//                         assignRole(axisBG, axisBGElementNumber, "axisBG-number", "axisBG", axisName, 'axisBG-pic', 'German')
//                         axisBGElementNumber++;
//                         axisBG++;
//                     }
//                 }
//             }
//         }
//     }
// }
"use strict";