$(document).ready(function(){
    function cutter(el,min) {
        $(el).append("...");
        if($(el).height() <= min) {
            return; 
        }
        $(el).text($(el).text().slice(0,-4))
        cutter(el,min);
    }
    $(".text-cutter").each(function(i,e){
        var min = parseInt($(e).css("max-height"));
        if(!min) {
            return ;
        }
        var o = $(e).find(".overflow");
        if(!o.length) {
            return; 
        }
        if($(o).height() <= min) {
            return; 
        }
        
        cutter(o,min);
    })
})