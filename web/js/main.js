function dd() {
    window.location = "create.html";
}
function ee() {
    window.location = "team.html";
}
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
var a="aaa";
var b="bbb";
$.post("aaaa.php",
    { hiddenmobie:a,
        hiddenname:b
    },
    function (data,status) {
        console.log(data);
        console.log(status);
        myData=JSON.parse(data);
        console.log(myData);
        $("#name").text(myData.name);
        $("#infor").text(myData.infor);
        $("#age").text(myData.age);
    })
