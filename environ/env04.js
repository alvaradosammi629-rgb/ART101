const buttonElement = document.getElementById('changeButton');

buttonElement.addEventListener('click', function () {
    document.body.style.backgroundImage = "url('backrooms.jpg')";
});

let environmentTitle = "Everfree Forest"
let environmentElements = ["Butterflies", "Rainbow Dash", "Twilight Sparkle"]

$("#title-button").click( function(){
     $("#environment-output").html(
        "<h2>" + environmentTitle + "</h2>"
    );
});

$("#elements-button").click( function(){
    let output = "<ul>";

    environmentElements.forEach(function(element) {
        output += "<li>" + element + "</li>";
    });

    output += "</ul>";

    $("#environment-output").html(output);
});


