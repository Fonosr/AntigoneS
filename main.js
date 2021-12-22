var currentMousePos = { x: -1, y: -1 };

$(document).ready(function() {

    $("body").hover(function() {
        $(".innerMouseIndicator, .mouseIndicator").addClass("show");
    }, function() {
        $(".innerMouseIndicator, .mouseIndicator").removeClass("show");
    });

    $(window).mousemove(function(event) {
        $(".innerMouseIndicator, .mouseIndicator").addClass("show");
        var currentX = currentMousePos.x = event.pageX;
        var currentY = currentMousePos.x = event.pageY - $(window).scrollTop();
        $(".innerMouseIndicator").css({ "transform": "translate3d(" + currentX + "px, " + currentY + "px, 0)" });
        setTimeout(function() {
            $(".mouseIndicator").css({ "transform": "translate3d(" + currentX + "px, " + currentY + "px, 0)" });
        }, 100);
    });

    $(".activeMouse").hover(function() {
        $(".mouseIndicator").addClass("active");
    }, function() {
        $(".mouseIndicator").removeClass("active");
    });

});
/* Cursor style Done at: 2021.12.21. 15:55*/