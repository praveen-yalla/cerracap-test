$(document).ready(function() {
    var flg = true;
    $('.rd-mr').on("click", function() {
        if (flg) {
            $(this).parent().parent().find(".job-item").css("max-height", "none");
            flg = false;
            $(this).text("Read less");
        } else {
            $(this).parent().parent().find(".job-item").css("max-height", "200px")
            flg = true;
            $(this).text("Read more");
        }
    })
})