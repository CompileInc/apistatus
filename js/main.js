var updateStatusPages = function() {
    $("iframe.status_page").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
    });
}
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $(".refresh-status").click(function(){
        updateStatusPages();
    });
    var url = document.location.toString();
    if (url.match('#')) {
        $('.nav-pills a[href="#' + url.split('#')[1] + '"]').tab('show');
    }
    // $('.nav-pills a').on('shown.bs.tab', function (e) {
    //     window.location.hash = e.target.hash;
    // })
});