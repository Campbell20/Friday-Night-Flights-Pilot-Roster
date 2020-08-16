
$(document).ready(function () {
    var randomNumber;

    $.getJSON('https://spreadsheets.google.com/feeds/list/1L3xLMrObQItYs0vnazhZK06TAaIGamsxSBMaMOCffv4/1/public/full?alt=json').done(function (json) {
        console.log(json);
        createGridsFromTemplate(json);
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

    function createGridsFromTemplate(json) {
        jsonLength = Object.keys(json.feed.entry).length;
        // console.log(firstNamesUSA);
        //allied planes
        alliedTeamA = "352nd";
        alliedTeamB = "402 Squadron";
        alliedBomber = "410th";
        //axis planes
        axisTeamA = "I./JG1";
        axisTeamB = "I./JG77";
        axisBomber = "I./KG54";

        var alliedFGATemplateLead = document.getElementsByTagName("template-alliedFGA-Lead")[0];
        var alliedFGATemplate = document.getElementsByTagName("template-alliedFGA")[0];
        
        var alliedFGBTemplateLead = document.getElementsByTagName("template-alliedFGB-Lead")[0];
        var alliedFGBTemplate = document.getElementsByTagName("template-alliedFGB")[0];

        var alliedBomberTemplateLead = document.getElementsByTagName("template-alliedBG-Lead")[0];
        var alliedBomberTemplate = document.getElementsByTagName("template-alliedBG")[0];

        FlightColor = "";

        //Allied Fight Group A
        alliedFGALeader = 0;
        alliedFGA = 0;
        alliedFGALeadElementNumber = 0;
        alliedFGAElementNumber = 1;

        //Allied Fighter Group B
        alliedFGBLeader = 0;
        alliedFGB = 0;
        alliedFGBLeadElementNumber = 0;
        alliedFGBElementNumber = 1;

        //Allied Bomber Group
        alliedBGLeader = 0;
        alliedBGColor = "Red";
        alliedBG = 0;
        alliedBGLeadElementNumber = 0;
        alliedBGElementNumber = 1;

        var axisFGATemplateLead = document.getElementsByTagName("template-axisFGA-Lead")[0];
        var axisFGATemplate = document.getElementsByTagName("template-axisFGA")[0];
        
        var axisFGBTemplateLead = document.getElementsByTagName("template-axisFGB-Lead")[0];
        var axisFGBTemplate = document.getElementsByTagName("template-axisFGB")[0];
     
        var axisBomberTemplateLead = document.getElementsByTagName("template-axisBG-Lead")[0];
        var axisBomberTemplate = document.getElementsByTagName("template-axisBG")[0];

        FlightColor = "";

        //Axis Fight Group A
        axisFGALeader = 0;
        axisFGA = 0;
        axisFGALeadElementNumber = 0;
        axisFGAElementNumber = 1;

        //Axis Fighter Group B
        axisFGBLeader = 0;
        axisFGB = 0;
        axisFGBLeadElementNumber = 0;
        axisFGBElementNumber = 1;

        //Axis Bomber Group
        axisBGLeader = 0;
        axisBGColor = "Red";
        axisBG = 0;
        axisBGLeadElementNumber = 0;
        axisBGElementNumber = 1;

        for (i = 0; i < jsonLength; i++) {
            side = json.feed.entry[i].gsx$whichsideoftheconflictwouldyouliketobeon.$t;
            imageNumber = parseInt(randomNumber[i]);
            alliedFG = json.feed.entry[i].gsx$selectflightgroup.$t;
            alliedName = firstNamesUSA[imageNumber] + " \"" + json.feed.entry[i].gsx$enterpilotnickname.$t + "\" " + lastNamesUSA[imageNumber];
            alliedPosition = json.feed.entry[i].gsx$selectpilotposition.$t;
            axisFG = json.feed.entry[i].gsx$selectflightgroup_2.$t;
            axisName = firstNamesGermany[imageNumber] + " \"" + json.feed.entry[i].gsx$enterpilotnickname_2.$t + "\" " + lastNamesGermany[imageNumber];
            axisPosition = json.feed.entry[i].gsx$selectpilotposition_2.$t;


            createIds();

            if (side == "Allied") {
                //Allied Fighter Group A
                if (alliedFG.includes(alliedTeamA)) {
                    if (alliedPosition.includes("Squadron")) {
                        document.getElementById('alliedfighterA-leader').innerHTML = alliedName;
                        document.getElementById('alliedfighterA-leader-pic').src = 'imgs/American/American' + imageNumber + ".jpg";
                    }
                    else {
                        if (alliedPosition.includes("Flight Lead")) {
                            var alliedFGALeadDivs = alliedFGATemplateLead.querySelector('div');
                            var alliedfightergroupADLead;
                            alliedfightergroupADLead = document.importNode(alliedFGALeadDivs, true);
                            document.getElementById("alliedfighterA-lead").appendChild(alliedfightergroupADLead);
                            document.getElementById("alliedFGA-lead" + alliedFGALeadElementNumber).innerHTML = alliedName;
                            document.getElementById('alliedFGA-pic-lead' + alliedFGALeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
                            document.getElementById("alliedFGA-number-lead" + alliedFGALeadElementNumber).innerHTML = "Flight Lead";
                            alliedFGALeadElementNumber++;
                        }
                        else {
                            var alliedFGADivs = alliedFGATemplate.querySelector('div');
                            var alliedfightergroupAD;
                            alliedfightergroupAD = document.importNode(alliedFGADivs, true);
                            document.getElementById("alliedfighterA-wingmen").appendChild(alliedfightergroupAD);
                            if (alliedFGA <= 3) {
                                FlightColor = "Red";
                            }
                            else if (alliedFGA > 3 &&
                                alliedFGA <= 7) {
                                if (alliedFGA == 4) {
                                    alliedFGAElementNumber = 1;
                                }
                                FlightColor = "Green";
                            }
                            else if (alliedFGA > 7 &&
                                alliedFGA <= 11) {
                                if (alliedFGA == 8) {
                                    alliedFGAElementNumber = 1;
                                }
                                FlightColor = "Yellow";
                            }
                            else if (alliedFGA > 11 &&
                                alliedFGA <= 15) {
                                if (alliedFGA == 12) {
                                    alliedFGAElementNumber = 1;
                                }
                                FlightColor = "Black";
                            }
                            else if (alliedFGA > 15 &&
                                alliedFGA <= 19) {
                                if (alliedFGA == 16) {
                                    alliedFGAElementNumber = 1;
                                }
                                FlightColor = "Orange";
                            }
                            else if (alliedFGA > 19 &&
                                alliedFGA <= 23) {
                                if (alliedFGA == 20) {
                                    alliedFGAElementNumber = 1;
                                }
                                FlightColor = "Purple";
                            }
                            alliedFGAElementNumber++;
                            document.getElementById("alliedFGA-number" + alliedFGA).innerHTML = FlightColor + "-" + alliedFGAElementNumber;
                            document.getElementById("alliedFGA" + alliedFGA).innerHTML = alliedName;
                            document.getElementById('alliedFGA-pic' + alliedFGA).src = 'imgs/American/American' + imageNumber + ".jpg";
                            alliedFGA++;
                        }
                    }
                }

                //Allied Fighter Group B
                if (alliedFG.includes(alliedTeamB)) {
                    if (alliedPosition.includes("Squadron")) {
                        document.getElementById('alliedfighterB-leader').innerHTML = alliedName;
                        document.getElementById('alliedfighterB-leader-pic').src = 'imgs/American/American' + imageNumber + ".jpg";
                    }
                    else {
                        if (alliedPosition.includes("Flight Lead")) {
                            var alliedFGBLeadDivs = alliedFGBTemplateLead.querySelector('div');
                            var alliedfightergroupBDLead;
                            alliedfightergroupBDLead = document.importNode(alliedFGBLeadDivs, true);
                            document.getElementById("alliedfighterB-lead").appendChild(alliedfightergroupBDLead);
                            document.getElementById("alliedFGB-lead" + alliedFGBLeadElementNumber).innerHTML = alliedName;
                            document.getElementById('alliedFGB-pic-lead' + alliedFGBLeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
                            document.getElementById("alliedFGB-number-lead" + alliedFGBLeadElementNumber).innerHTML = "Flight Lead";
                            alliedFGBLeadElementNumber++;
                        }
                        else {
                            var alliedFGBDivs = alliedFGBTemplate.querySelector('div');
                            var alliedfightergroupBD;
                            alliedfightergroupBD = document.importNode(alliedFGBDivs, true);
                            document.getElementById("alliedfighterB-wingmen").appendChild(alliedfightergroupBD);
                            if (alliedFGB <= 3) {
                                FlightColor = "Red";
                            }
                            else if (alliedFGB > 3 &&
                                alliedFGB <= 7) {
                                if (alliedFGB == 4) {
                                    alliedFGBElementNumber = 1;
                                }
                                FlightColor = "Green";
                            }
                            else if (alliedFGB > 7 &&
                                alliedFGB <= 11) {
                                if (alliedFGB == 8) {
                                    alliedFGBElementNumber = 1;
                                }
                                FlightColor = "Yellow";
                            }
                            else if (alliedFGB > 11 &&
                                alliedFGB <= 15) {
                                if (alliedFGB == 12) {
                                    alliedFGBElementNumber = 1;
                                }
                                FlightColor = "Black";
                            }
                            else if (alliedFGB > 15 &&
                                alliedFGB <= 19) {
                                if (alliedFGB == 16) {
                                    alliedFGBElementNumber = 1;
                                }
                                FlightColor = "Orange";
                            }
                            else if (alliedFGB > 19 &&
                                alliedFGB <= 23) {
                                if (alliedFGB == 20) {
                                    alliedFGBElementNumber = 1;
                                }
                                FlightColor = "Purple";
                            }
                            alliedFGBElementNumber++;
                            document.getElementById("alliedFGB-number" + alliedFGB).innerHTML = FlightColor + "-" + alliedFGBElementNumber;
                            document.getElementById("alliedFGB" + alliedFGB).innerHTML = alliedName;
                            document.getElementById('alliedFGB-pic' + alliedFGB).src = 'imgs/American/American' + imageNumber + ".jpg";
                            alliedFGB++;
                        }
                    }
                }
                //Allied Bomber Group
                if (alliedFG.includes(alliedBomber)) {
                    if (alliedPosition.includes("Squadron")) {
                        document.getElementById('alliedbomber-leader').innerHTML = alliedName;
                        document.getElementById('alliedbomber-leader-pic').src = 'imgs/American/American' + imageNumber + ".jpg";
                    }
                    else {
                        if (alliedPosition.includes("Flight Lead")) {
                            var alliedBGLeadDivs = alliedBomberTemplateLead.querySelector('div');
                            var alliedBGLead;
                            alliedBGLead = document.importNode(alliedBGLeadDivs, true);
                            document.getElementById("alliedbomber-lead").appendChild(alliedBGLead);

                            document.getElementById("alliedBG-lead" + alliedBGLeadElementNumber).innerHTML = alliedName;
                            document.getElementById('alliedBG-pic-lead' + alliedBGLeadElementNumber).src = 'imgs/American/American' + imageNumber + ".jpg";
                            document.getElementById("alliedBG-number-lead" + alliedBGLeadElementNumber).innerHTML = "Flight Lead";
                            alliedBGLeadElementNumber++;
                        }
                        else {
                            var alliedBGDivs = alliedBomberTemplate.querySelector('div');
                            var alliedBomberGroupBD;
                            alliedBomberGroupBD = document.importNode(alliedBGDivs, true);
                            document.getElementById("alliedbomber-wingmen").appendChild(alliedBomberGroupBD);

                            if (alliedBG <= 3) {
                                FlightColor = "Red";
                            }
                            else if (alliedBG > 3 &&
                                alliedFGB <= 7) {
                                if (alliedBG == 4) {
                                    alliedBGElementNumber = 1;
                                }
                                FlightColor = "Green";
                            }
                            else if (alliedBG > 7 &&
                                alliedBG <= 11) {
                                if (alliedBG == 8) {
                                    alliedBGElementNumber = 1;
                                }
                                FlightColor = "Yellow";
                            }
                            else if (alliedBG > 11 &&
                                alliedBG <= 15) {
                                if (alliedBG == 12) {
                                    alliedBGElementNumber = 1;
                                }
                                FlightColor = "Black";
                            }
                            else if (alliedBG > 15 &&
                                alliedBG <= 19) {
                                if (alliedBG == 16) {
                                    alliedBGElementNumber = 1;
                                }
                                FlightColor = "Orange";
                            }
                            else if (alliedBG > 19 &&
                                alliedBG <= 23) {
                                if (alliedBG == 20) {
                                    alliedBGElementNumber = 1;
                                }
                                FlightColor = "Purple";
                            }
                            alliedBGElementNumber++;
                            document.getElementById("alliedBG-number" + alliedBG).innerHTML = FlightColor + "-" + alliedBGElementNumber;
                            document.getElementById("alliedBomberGroup" + alliedBG).innerHTML = alliedName;
                            document.getElementById('alliedBG-pic' + alliedBG).src = 'imgs/American/American' + imageNumber + ".jpg";
                            alliedBG++;
                        }
                    }
                }
            }




            if (side == "Axis") {
                //Axis Fighter Group A
                if (axisFG.includes(axisTeamA)) {
                    if (axisPosition.includes("Squadron")) {
                        document.getElementById('axisfighterA-leader').innerHTML = axisName;
                        document.getElementById('axisfighterA-leader-pic').src = 'imgs/German/German' + imageNumber + ".jpg";
                    }
                    else {
                        if (axisPosition.includes("Flight Lead")) {
                            var axisFGALeadDivs = axisFGATemplateLead.querySelector('div');
                            var axisfightergroupADLead;
                            axisfightergroupADLead = document.importNode(axisFGALeadDivs, true);
                            document.getElementById("axisfighterA-lead").appendChild(axisfightergroupADLead);
                            document.getElementById("axisFGA-lead" + axisFGALeadElementNumber).innerHTML = axisName;
                            document.getElementById('axisFGA-pic-lead' + axisFGALeadElementNumber).src = 'imgs/German/German' + imageNumber + ".jpg";
                            document.getElementById("axisFGA-number-lead" + axisFGALeadElementNumber).innerHTML = "Flight Lead";
                            axisFGALeadElementNumber++;
                        }
                        else {
                            var axisFGADivs = axisFGATemplate.querySelector('div');
                            var axisfightergroupAD;
                            axisfightergroupAD = document.importNode(axisFGADivs, true);
                            document.getElementById("axisfighterA-wingmen").appendChild(axisfightergroupAD);
                            if (axisFGA <= 3) {
                                FlightColor = "Red";
                            }
                            else if (axisFGA > 3 &&
                                axisFGA <= 7) {
                                if (axisFGA == 4) {
                                    axisFGAElementNumber = 1;
                                }
                                FlightColor = "Green";
                            }
                            else if (axisFGA > 7 &&
                                axisFGA <= 11) {
                                if (axisFGA == 8) {
                                    axisFGAElementNumber = 1;
                                }
                                FlightColor = "Yellow";
                            }
                            else if (axisFGA > 11 &&
                                axisFGA <= 15) {
                                if (axisFGA == 12) {
                                    axisFGAElementNumber = 1;
                                }
                                FlightColor = "Black";
                            }
                            else if (axisFGA > 15 &&
                                axisFGA <= 19) {
                                if (axisFGA == 16) {
                                    axisFGAElementNumber = 1;
                                }
                                FlightColor = "Orange";
                            }
                            else if (axisFGA > 19 &&
                                axisFGA <= 23) {
                                if (axisFGA == 20) {
                                    axisFGAElementNumber = 1;
                                }
                                FlightColor = "Purple";
                            }
                            axisFGAElementNumber++;
                            document.getElementById("axisFGA-number" + axisFGA).innerHTML = FlightColor + "-" + axisFGAElementNumber;
                            document.getElementById("axisFGA" + axisFGA).innerHTML = axisName;
                            document.getElementById('axisFGA-pic' + axisFGA).src = 'imgs/German/German' + imageNumber + ".jpg";
                            axisFGA++;
                        }
                    }
                }

                //Axis Fighter Group B
                if (axisFG.includes(axisTeamB)) {
                    if (axisPosition.includes("Squadron")) {
                        document.getElementById('axisfighterB-leader').innerHTML = axisName;
                        document.getElementById('axisfighterB-leader-pic').src = 'imgs/German/German' + imageNumber + ".jpg";
                    }
                    else {
                        if (axisPosition.includes("Flight Lead")) {
                            var axisFGBLeadDivs = axisFGBTemplateLead.querySelector('div');
                            var axisfightergroupBDLead;
                            axisfightergroupBDLead = document.importNode(axisFGBLeadDivs, true);
                            document.getElementById("axisfighterB-lead").appendChild(axisfightergroupBDLead);
                            document.getElementById("axisFGB-lead" + axisFGBLeadElementNumber).innerHTML = axisName;
                            document.getElementById('axisFGB-pic-lead' + axisFGBLeadElementNumber).src = 'imgs/German/German' + imageNumber + ".jpg";
                            document.getElementById("axisFGB-number-lead" + axisFGBLeadElementNumber).innerHTML = "Flight Lead";
                            axisFGBLeadElementNumber++;
                        }
                        else {
                            var axisFGBDivs = axisFGBTemplate.querySelector('div');
                            var axisfightergroupBD;
                            axisfightergroupBD = document.importNode(axisFGBDivs, true);
                            document.getElementById("axisfighterB-wingmen").appendChild(axisfightergroupBD);
                            if (axisFGB <= 3) {
                                FlightColor = "Red";
                            }
                            else if (axisFGB > 3 &&
                                axisFGB <= 7) {
                                if (axisFGB == 4) {
                                    axisFGBElementNumber = 1;
                                }
                                FlightColor = "Green";
                            }
                            else if (axisFGB > 7 &&
                                axisFGB <= 11) {
                                if (axisFGB == 8) {
                                    axisFGBElementNumber = 1;
                                }
                                FlightColor = "Yellow";
                            }
                            else if (axisFGB > 11 &&
                                axisFGB <= 15) {
                                if (axisFGB == 12) {
                                    axisFGBElementNumber = 1;
                                }
                                FlightColor = "Black";
                            }
                            else if (axisFGB > 15 &&
                                axisFGB <= 19) {
                                if (axisFGB == 16) {
                                    axisFGBElementNumber = 1;
                                }
                                FlightColor = "Orange";
                            }
                            else if (axisFGB > 19 &&
                                axisFGB <= 23) {
                                if (axisFGB == 20) {
                                    axisFGBElementNumber = 1;
                                }
                                FlightColor = "Purple";
                            }
                            axisFGBElementNumber++;
                            document.getElementById("axisFGB-number" + axisFGB).innerHTML = FlightColor + "-" + axisFGBElementNumber;
                            document.getElementById("axisFGB" + axisFGB).innerHTML = axisName;
                            document.getElementById('axisFGB-pic' + axisFGB).src = 'imgs/German/German' + imageNumber + ".jpg";
                            axisFGB++;
                        }
                    }
                }
                //Axis Bomber Group
                if (axisFG.includes(axisBomber)) {
                    if (axisPosition.includes("Squadron")) {
                        document.getElementById('axisbomber-leader').innerHTML = axisName;
                        document.getElementById('axisbomber-leader-pic').src = 'imgs/German/German' + imageNumber + ".jpg";
                    }
                    else {
                        if (axisPosition.includes("Flight Lead")) {
                            var axisBGLeadDivs = axisBomberTemplateLead.querySelector('div');
                            var axisBGLead;
                            axisBGLead = document.importNode(axisBGLeadDivs, true);
                            document.getElementById("axisbomber-lead").appendChild(axisfightergroupBDLead);
                            document.getElementById("axisBG-lead" + axisBGLeadElementNumber).innerHTML = axisName;
                            document.getElementById('axisBG-pic-lead' + axisBGLeadElementNumber).src = 'imgs/German/German' + imageNumber + ".jpg";
                            document.getElementById("axisBG-number-lead" + axisBGLeadElementNumber).innerHTML = "Flight Lead";
                            axisBGLeadElementNumber++;
                        }
                        else {
                            var axisBGDivs = axisBomberTemplate.querySelector('div');
                            var axisBomberGroupBD;
                            axisBomberGroupBD = document.importNode(axisBGDivs, true);
                            document.getElementById("axisbomber-wingmen").appendChild(axisBomberGroupBD);
                            if (axisBG <= 3) {
                                FlightColor = "Red";
                            }
                            else if (axisBG > 3 &&
                                axisFGB <= 7) {
                                if (axisBG == 4) {
                                    axisFGBElementNumber = 1;
                                }
                                FlightColor = "Green";
                            }
                            else if (axisBG > 7 &&
                                axisBG <= 11) {
                                if (axisBG == 8) {
                                    axisFGBElementNumber = 1;
                                }
                                FlightColor = "Yellow";
                            }
                            else if (axisBG > 11 &&
                                axisBG <= 15) {
                                if (axisBG == 12) {
                                    axisFGBElementNumber = 1;
                                }
                                FlightColor = "Black";
                            }
                            else if (axisBG > 15 &&
                                axisBG <= 19) {
                                if (axisBG == 16) {
                                    axisFGBElementNumber = 1;
                                }
                                FlightColor = "Orange";
                            }
                            else if (axisBG > 19 &&
                                axisBG <= 23) {
                                if (axisBG == 20) {
                                    axisFGBElementNumber = 1;
                                }
                                FlightColor = "Purple";
                            }
                            axisFGBElementNumber++;
                            document.getElementById("axisBG-number" + axisBG).innerHTML = FlightColor + "-" + axisFGBElementNumber;
                            document.getElementById("axisBG" + axisBG).innerHTML = axisName;
                            document.getElementById('axisBG-pic' + axisBG).src = 'imgs/German/German' + imageNumber + ".jpg";
                            axisBG++;
                        }
                    }
                }

            }
        }


    }


    function createIds() {
        /**** ALLIED *****/
        //allied fighter group A lead
        $(".alliedFGA-number-lead").each(function (i) {
            $(this).attr('id', "alliedFGA-number-lead" + i);
        });
        $(".alliedFGA-lead").each(function (i) {
            $(this).attr('id', "alliedFGA-lead" + i);
        });
        $(".alliedFGA-pic-lead").each(function (i) {
            $(this).attr('id', "alliedFGA-pic-lead" + i);
        });

        //allied fighter group A
        $(".alliedFGA-background-color").each(function (i) {
            $(this).attr('id', "alliedFGA-background-color" + i);
        });
        $(".alliedFGA-number").each(function (i) {
            $(this).attr('id', "alliedFGA-number" + i);
        });
        $(".alliedFGA").each(function (i) {
            $(this).attr('id', "alliedFGA" + i);
        });
        $(".alliedFGA-pic").each(function (i) {
            $(this).attr('id', "alliedFGA-pic" + i);
        });

        //allied fighter group B lead
        $(".alliedFGB-number-lead").each(function (i) {
            $(this).attr('id', "alliedFGB-number-lead" + i);
        });
        $(".alliedFGB-lead").each(function (i) {
            $(this).attr('id', "alliedFGB-lead" + i);
        });
        $(".alliedFGB-pic-lead").each(function (i) {
            $(this).attr('id', "alliedFGB-pic-lead" + i);
        });

        //allied fighter group B
        $(".alliedFGB-number").each(function (i) {
            $(this).attr('id', "alliedFGB-number" + i);
        });
        $(".alliedFGB").each(function (i) {
            $(this).attr('id', "alliedFGB" + i);
        });
        $(".alliedFGB-pic").each(function (i) {
            $(this).attr('id', "alliedFGB-pic" + i);
        });

        ///allied bomber group lead
        $(".alliedBG-number-lead").each(function (i) {
            $(this).attr('id', "alliedBG-number-lead" + i);
        });
        $(".alliedBG-lead").each(function (i) {
            $(this).attr('id', "alliedBG-lead" + i);
        });
        $(".alliedBG-pic-lead").each(function (i) {
            $(this).attr('id', "alliedBG-pic-lead" + i);
        });

        //allied bomber group
        $(".alliedBG-number").each(function (i) {
            $(this).attr('id', "alliedBG-number" + i);
        });
        $(".alliedBG").each(function (i) {
            $(this).attr('id', "alliedBomberGroup" + i);
        });
        $(".alliedBG-pic").each(function (i) {
            $(this).attr('id', "alliedBG-pic" + i);
        });

        //axis
        //axis fighter group A lead
        $(".axisFGA-number-lead").each(function (i) {
            $(this).attr('id', "axisFGA-number-lead" + i);
        });
        $(".axisFGA-lead").each(function (i) {
            $(this).attr('id', "axisFGA-lead" + i);
        });
        $(".axisFGA-pic-lead").each(function (i) {
            $(this).attr('id', "axisFGA-pic-lead" + i);
        });
        //axis fighter group A
        $(".axisFGA-background-color").each(function (i) {
            $(this).attr('id', "axisFGA-background-color" + i);
        });
        $(".axisFGA-number").each(function (i) {
            $(this).attr('id', "axisFGA-number" + i);
        });
        $(".axisFGA").each(function (i) {
            $(this).attr('id', "axisFGA" + i);
        });
        $(".axisFGA-pic").each(function (i) {
            $(this).attr('id', "axisFGA-pic" + i);
        });

        //axis fighter group B lead
        $(".axisFGB-number-lead").each(function (i) {
            $(this).attr('id', "axisFGB-number-lead" + i);
        });
        $(".axisFGB-lead").each(function (i) {
            $(this).attr('id', "axisFGB-lead" + i);
        });
        $(".axisFGB-pic-lead").each(function (i) {
            $(this).attr('id', "axisFGB-pic-lead" + i);
        });
        //axis fighter group B
        $(".axisFGB-number").each(function (i) {
            $(this).attr('id', "axisFGB-number" + i);
        });
        $(".axisFGB").each(function (i) {
            $(this).attr('id', "axisFGB" + i);
        });
        $(".axisFGB-pic").each(function (i) {
            $(this).attr('id', "axisFGB-pic" + i);
        });

        ///axis bomber group lead
        $(".axisBG-number-lead").each(function (i) {
            $(this).attr('id', "axisBG-number-lead" + i);
        });
        $(".axisBG-lead").each(function (i) {
            $(this).attr('id', "axisBG-lead" + i);
        });
        $(".axisBG-pic-lead").each(function (i) {
            $(this).attr('id', "axisBG-pic-lead" + i);
        });

        //axis bomber group
        $(".axisBG-number").each(function (i) {
            $(this).attr('id', "axisBG-number" + i);
        });
        $(".axisBG").each(function (i) {
            $(this).attr('id', "axisBG" + i);
        });
        $(".axisBG-pic").each(function (i) {
            $(this).attr('id', "axisBG-pic" + i);
        });
    };

});

