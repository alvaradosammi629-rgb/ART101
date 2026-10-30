// A says
let messagesA=["How are you doing", "Sorry to hear that", "What color would you like it to be"]
let counterA=0

// B says
let messagesB=["Terrible", "Color of the background sucks", "Not this one"]
let counterB=0

//when A is clicked
$("#character-a").click(function() {

    $("#chat").append("<p>jake: "+messagesA[counterA]+"</p>")

    counterA=counterA+1;

});

$("#character-b").click(function() {

    $("#chat").append("<p>finn: "+messagesB[counterB]+"</p>")

    counterB=counterB+1;

});