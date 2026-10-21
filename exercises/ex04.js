// the clicker button program

let count=0;

let colors=["green", "orange", "brown", "yellow", "gold", "purple", "red", "pink"];

let buttonText="";

$("#blankie-button").click( function(){
    // what to do when the button is clicked
    //first, set a new value for "count", which is the current value + 1

    count = count +1;

    console.log(count);
    console.log(colors[count-1]);

    buttonText="I was kicked " + count + " times and color is " + colors[count-1];

    $("#blankie-button").html(buttonText);

    $("body").html(buttonText);

    $("body").css("background-color", colors[count-1]);

});