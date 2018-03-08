'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

	//each lab element needs to be yellow
})

// Function that is called when the document is ready.
function initializePage() {

	console.log("Page initialisation");
    $.get('/lab/today', onServerResponse);

}

// Function that is called when the server responds to the AJAX call
function onServerResponse(data){

	console.log("onServerResponse");
    var labElementId = getLabElementId(data.id);
    console.log("Getting id");
    var labElement = $(labElementId);
    labElement.css({'background': 'yellow'});
    //how do I use this ot set those pieces yellow?
}


// Function to format the CSS selector
function getLabElementId(id){
    var labElementId = '#lab-' + id;
    return labElementId;
}