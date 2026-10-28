function paintPage (color) {
    $("body").css("background-color", color);
}

paintPage("lavender"); 

// the clicker button progrm 

// we create a variable named "count", the initia; value is 0

let count=0;
let colorsCount=0;

// an indexed array of data
let colors=["green", "orange", "brown", "yellow", "gold", "purple", "red", "pink"];

let buttonText="";

// we listened for when an htnl element with id "needy-button" is clicked and then...

$("#needy-button").click( function(){ 

    // what to do when the button is clicked
    // first, set a new value for "count", which is the current value + 1

    count = count +1;

    console.log(count);
    console.log(colors[colorsCount]);

    // now let's find our button and set a new text for it

    buttonText="I was kicked " + count + " times and color is " + colors[colorsCount];

    $("#needy-button").html( buttonText ); 

    paintPage(colors[colorsCount]);

    $("body").css( "background-color", colors[colorsCount] );

    //$("body").append("<img width='50' src='" +colors[colorsCount]  +".jpg'>");

    if (count >= 16) { $("#needy_button").after("<p>my mood is... wild!</p>"); }
    else if (count >= 13) { $("#needy_button").after("<p>my mood is... really agitated</p>"); }
    else if (count >= 5) { $("#needy_button").after("<p>my mood is... agitated</p>"); } 

    // if(( count >= 5 ) && (count < 13)) { $("#needy_button").after("<p>my mood is... agitated</p>"); }

    // if( count >= 13 ) { $("#needy_button").after("<p>my mood is... really agitated</p>"); }

    // if( count >= 16 ) { $("#needy_button").after("<p>my mood is... wild!</p>"); }

    colorsCount = colorsCount +1;

    // if we are running out of colors start from the first one anew

    if (colorsCount >= 8) {colorsCount = 0; }

});