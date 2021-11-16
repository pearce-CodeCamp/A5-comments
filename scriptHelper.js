// Write your helper functions here!
require('isomorphic-fetch');

// we don't need to worry about implementing this function
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

// let's forget about this function, we don't need to implement it
function validateInput(testInput) {

}

// On implementing formSubmission
// this formSubmission function will be invoked inside the 
// form submit event listener in script.js to validate all of our inputs
// it has 6 parameters: 
/*  -document, which is just the document object so you just pass it document as 
    its first parameter when you invoke it
    -list, which is the faultyItems div
    -pilot, which is the value of our pilotName input
    -copilot, which is the value of our copilotName input
    -fuelLevel, value of fuelLevel input
    -cargoMass, value of cargoMass input
*/
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // well given all of these inputs, we now need to determine what are our conditions?
    // note this will be a sizeable series of if and else if blocks
    /*CONDITION 1: all fields are required! 
        if any value is empty, we need to send alert that reads "All Fields Required!"
    CONDITION 2: make sure the data inputted in each field is the right data type
        else if pilot and/or copilot are numbers, alert the user
        else if fuelLevel and/or cargoLevel are not numbers, alert the user
        (refer to the hint on using the isNaN function)
    Based on these conditions, if we have gotten to this point and haven't had to alert the
    user they entered bad data, we can assume that we have validated the input and 
    we are good to go to start checking our fuel and cargo levels.. updating our HTML
    accordingly!

    What if fuelLevel AND cargoLevel are LESS than 10000?
    What if they are both greater than 10000?
    What if one is greater and one is less than? or the other way around?
    What should we as result of these conditions?

    In any of these cases, our list parameter (faulyItems), should become visible.
    Also, the pilotStatus and copilotStatus text should be updated using a template
    literal that would read something like 'nameOfPilot/nameofCopilot is ready for launch'.
    How do we update the text/html inside of an HTML element?
    Do we already have the pilotStatus and copilotStatus HTML elements selected, or
    do we still need to select those to update them?

    If we are ready for launch, that means we have enough fuel and our cargo mass
    is low enough. In any other case, we are not ready for launch. We'll need to update the
    launchStatus text and color to reflect whether or not we are ready for launch as well.
    Just like pilotStatus and copilotStatus, do we need to select launchStatus?

    You might select all your necessary elements before running all the conditionals
    to stay organized!
    */
}

// this has been implemented for us
async function myFetch() {
    let planetsReturned;
    // this function executes the fetch to our planets url
    // then it returns the json array we get as a Promise
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

// Implement the pick planet function
// it takes a array of planet objects
// creates a random index, and uses that index to select
// a random element from the inputted planets array
// Link to randomly select an element from an array in book:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/objects-and-math/math-applications.html#random-selection-from-an-array

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
