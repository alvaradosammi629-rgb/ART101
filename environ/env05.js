const buttonElement = document.getElementById('changeButton');

buttonElement.addEventListener('click', function () {
    document.body.style.backgroundImage = "url('backrooms.jpg')";
});

let environmentTitle = "Everfree Forest"
let environmentElements = ["Butterflies", "Rainbow Dash", "Twilight Sparkle"]

let following = false;

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

function change(){
    document.getElementById("text").style.display = "none";
}

$("#ts").hover(
    function () {
        $("#thought").stop(true, true).slideDown(300);
    },

    function () {
        $("#thought").stop(true, true).slideUp(300);
    }
);

$("#rd").hover(
    function () {
        $("#remark").stop(true, true).slideDown(300);
    },

    function () {
        $("#remark").stop(true, true).slideUp(300);
    }
);

$("#butterflies").hover(
    function () {
        $("#sigh").stop(true, true).slideDown(300);
    },

    function () {
        $("#sigh").stop(true, true).slideUp(300);
    }
);

$(document).keydown(function(event) {
    if (event.key === "" || event.code === "Space") {
        event.preventDefault();

        following = !following;
        $("#butterflies").toggleClass("following");
    }
});

$(document).mousemove(function (event) {
    if (following === true) {
        $("#butterflies").css({
            left: event.pageX - $("#scene").offset().left + 30,
            top: event.pageY - $("#scene").offset().top + 30
        })
    }
});
