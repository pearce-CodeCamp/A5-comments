// Write your JavaScript code here!

window.addEventListener("load", function () {

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })
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