$(document).ready(function() {
    $("#card-button").click(() => {
        alert("Hello World!");
    });

    $("#home-button").click(() => {
        $("body").css("animation", "exit");
        $("body").css("animation-duration", "3s");
    }
});

