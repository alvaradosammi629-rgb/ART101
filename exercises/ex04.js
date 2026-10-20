// the clicker button program

let counter=0;

$("#blankie-button").click( function(){
    // what to do when the button is clicked
    counter = counter + 2;
    $("#blankie-button").html("There are now " + counter + " scottish fold kittens");
});

