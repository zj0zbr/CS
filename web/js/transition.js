$(document).on("pagecreate",function(event){
    $(window).on("orientationchange",function(event){
        //alert(event.orientation);
        if(event.orientation == 'portrait'){
            //$("body").text(" portrait!");
            alert("横屏效果更佳");
        }else if(event.orientation == 'landscape'){
            //$("body").text(" landscape!");
        }else{
            alert("error");
        }
    });
});
