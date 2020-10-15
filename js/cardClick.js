$(document).ready(function(){
    var toClick = $(".cardClickContainer");

    $(toClick).each(function(i,e){
        var clickAction = $(e).find(".cardClickAction"),
            up = 0,
            down = 0;
        if(!clickAction.length) {
            return ;
        }
        $(e).on("mousedown",function(e){
            if(e.which == 1) {
                down = new Date(); 
            }
            
        })
        $(e).on("mouseup",function(e){
            if(e.which == 1) {
                up = new Date();
                var dif = up - down;
                up = 0;
                down = 0; 
                if(dif < 201) {
                    window.location.href = $(clickAction).attr("href")
                }
            }
            
        })

    })
})