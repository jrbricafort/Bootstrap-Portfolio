var config = {
    apiKey: "AIzaSyADYQHhFmQ_FTJ1aEog5WW2Igj0JUm53F8",
    authDomain: "my-awesome-project-id-9cf5f.firebaseapp.com",
    databaseURL: "https://my-awesome-project-id-9cf5f.firebaseio.com",
    projectId: "my-awesome-project-id-9cf5f",
    storageBucket: "my-awesome-project-id-9cf5f.appspot.com",
    messagingSenderId: "422867390928"
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