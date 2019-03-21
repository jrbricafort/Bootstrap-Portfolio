var config = {
    apiKey: "AIzaSyDHCYJRM6qUVWLPX-V2K-2tn9Y-4OaY1og",
    authDomain: "contact-me-4e79c.firebaseapp.com",
    databaseURL: "https://contact-me-4e79c.firebaseio.com",
    projectId: "contact-me-4e79c",
    storageBucket: "contact-me-4e79c.appspot.com",
    messagingSenderId: "278243987231"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var contactName = $("#contactName").val().trim();
    var contactEmail = $("#contactEmail").val().trim();
    var contactMessage = $("#contactMessage").val().trim();

    // Creates local "temporary" object for holding employee data
    var newContact = {
        name: contactName,
        email: contactEmail,
        message: contactMessage,

    };

    // Uploads employee data to the database
    database.ref().push(newContact);

    // Logs everything to console
    console.log(newContact.name);
    console.log(newContact.email);
    console.log(newContact.message);

    alert("information successfully added");

    // Clears all of the text-boxes
    $("#contactName").val("");
    $("#contactEmail").val("");
    $("#contactMessage").val("");
});