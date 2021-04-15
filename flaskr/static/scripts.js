$(document).ready(function () {
    $('.search-button').on('click', function() {
        $(this).parent().toggleClass('open');
    });
    $(document).click(e=> {

        var $target = $( e.target );

        if (!$target.closest(".search-button").length &&
        !$target.closest(".search-box").length &&
        $(".search-button").parent().hasClass("open")) {
            $(".search-button").parent().toggleClass('open');
        }
    });
});

// $('.search-button').click(function(){
//     $(this).parent().toggleClass('open');
// });