var resizeIframe = function(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
};
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
});