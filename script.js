// Write your JavaScript code here!
// make sure you delete any imports of any scripHelper functions
// if you are getting an indentifier 'functionName' has already declared error,
// you probably have an import statement at the top of this file 
// that you need to delete

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // based on these console statements, we now know that listedPlanets
        // is our arrray of fetched planet json
        // we now have access to our fetched planets, so we need to select a random
        // planet from the list with our pickPlanet function, then update the text of our 
        // missionTarget div from index.html to display data about this random planet

        // Below this comment call the appropriate helper function to pick a planet 
        // fom the list of planets and add that information to your destination.
        // invoke pickPlanet and pass it our list of planets and store that in a 
        // variable

        // we can then use that randomly selected planet object to fill in our template
        // all planet objects have the properties: name, star, diameter, distance, 
        // image, moons
        // so we can simply access these properties in our template and then add
        // this template literal in to the missionTarget div using the same idea
        // we did for updating things like the pilotStatus and copilotStatus
        /*`<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${}</li>
            <li>Diameter: ${}</li>
            <li>Star: ${}</li>
            <li>Distance from Earth: ${}</li>
            <li>Number of Moons: ${}</li>
        </ol>
        <img src="${}">`*/
    })
    // On Adding Validation
    // first, we are already inside a window load event listener!
    // before we even worry about validating the form inputs, we need to
    // select the form and listen for the submit event
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        // default behavior is that when we submit HTML forms, the form
        // sends an HTTP request and refreshes the page
        // we don't want this to happen, we just want the code in our
        // form submit event listener to execute
        event.preventDefault();
        // the rest of our code in this form event listener should go below this line

        // We now need to validate our form inputs using the DOM and some conditionals
        // we are going to use the formSubmission function to validate the values
        // of each of our form inputs: pilotName, copilotName, fuelLevel, cargoMass
        // Before we can validate the input values, we need to select
        // all of the form inputs with the DOM (Chapter 25.9.2 is helpful)
        // let someInput = /select an input here using DOM/
        // We'll want to do this four times, once for each element

        // Now that we have all four form input elements selected,
        // we can pass their VALUES into our formSubmission function
        // very important to understand the difference between an 
        // HTML element and its value!!!
        // this is where we will invoke our formSubmission function
        // eventually

    });

});