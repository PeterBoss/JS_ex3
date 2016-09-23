window.addEventListener("load", function () {

    $(".t1").click(function () {
        if ($(this).html() === '=') {
            $(".t4").text( eval($(".t4").html()));
        } else {
            $(".t4").append($(this).html());
        }
    });

});


