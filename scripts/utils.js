var debug = true;

greyColour = "#252525";
blackColour = "#000000";
whiteColour = "white";
yellowColour = " #FCE200";
primaryYellowColour = " #FFCC00";
greenColour = "00833E";
redColour = "DB0032";
primaryRedColour = "DC0032";
orangeColour = "FF8300";
blueColour = "2081C4";
purpleColour = "8A529C";
maroonColour = "A32035";
lightGreenColour = "93D500";

function convertCategoryNameTextColour(catNameText, teamCategory) {
    switch (teamCategory) {
        case "Men":
            catNameText.style.fill = blackColour;
            break;
        case "Women":
            catNameText.style.fill = blackColour;
            break;
        case "Mixed":
            catNameText.style.fill = whiteColour;
            break;
        case "Masters":
            catNameText.style.fill = whiteColour;
            break;
        case "Grand Masters":
            catNameText.style.fill = whiteColour;
            break;
        case "MEN":
            catNameText.style.fill = blackColour;
            break;
        case "WOMEN":
            catNameText.style.fill = blackColour;
            break;
        case "MIXED":
            catNameText.style.fill = whiteColour;
            break;
        case "MASTERS":
            catNameText.style.fill = whiteColour;
            break;
        case "GRAND MASTERS":
            catNameText.style.fill = whiteColour;
            break;
    }
}

function convertCategoryToColour(teamCategory) {

    switch (teamCategory) {
        case "Men":
            return "#FCE200";
        case "Women":
            return "#FF8300";
        case "Mixed":
            return "#00833E";
        case "Masters":
            return "#2081C4";
        case "Grand Masters":
            return "#8A529C";
        case "MEN":
            return "#FCE200";
        case "WOMEN":
            return "#FF8300";
        case "MIXED":
            return "#00833E";
        case "MASTERS":
            return "#2081C4";
        case "GRAND MASTERS":
            return "#8A529C";
    }
}

function findElementLocations(animation) {

    for (i = 0; i < animation.renderer.elements.length; i++) {

        var renderElement = animation.renderer.elements[i].elements;

        if (renderElement !== undefined) {

            renderElement.forEach(function (element, j, o) {

                try {
                    element.canResizeFont(true);
                    element.updateDocumentData({
                            t: ("[" + i + "][" + j + "]").toString()
                        },
                        0
                    );

                } catch (err) {

                }

                if (element.elements !== undefined) {
                    element.elements.forEach(function (el, k, r) {
                        try {

                            el.canResizeFont(true);
                            el.updateDocumentData({
                                    t: ("[" + i + "][" + j + "][" + k + "]").toString()
                                },
                                0
                            );

                        } catch (err) {

                        }



                        if (el.elements !== undefined) {
                            el.elements.forEach(function (em, a, b) {
                                try {

                                    em.canResizeFont(true);
                                    em.updateDocumentData({
                                            t: ("[" + i + "][" + j + "][" + k + "][" + a + "]").toString()
                                        },
                                        0
                                    );

                                } catch (err) {

                                }


                                if (em.elements !== undefined) {
                                    em.elements.forEach(function (ep, c, b) {
                                        try {

                                            ep.canResizeFont(true);
                                            ep.updateDocumentData({
                                                    t: ("[" + i + "][" + j + "][" + k + "][" + a + "][" + c + "]").toString()
                                                },
                                                0
                                            );

                                        } catch (err) {

                                        }

                                    });


                                }

                            });


                        }


                    });


                }
            });
        }
    }
}