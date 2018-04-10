/**
 * Created by SUM on 2017/8/18.
 */
function check_username() {
    var username=$("#username").val();
    if(username==""){
        alert("用户名不能为空");
        return false;
    }
    if (!checkname(username)){
        alert("用户名应为2-6个汉字");
        return false;
    }
    return true;
}
function checkname(name) {
    var strExp=new RegExp(/^[\u4E00-\u9FA5]{2,6}$/);
    if(strExp.test(name)){
        return true;
    }
    else {
        return false ;
    }
}
/* function isUsername(str) {
 // var reg=/^[\u4E00-\u9FA5]{2,6}$/;
 if(!reg.test(str)) {
 return false;
 }
 else {
 return true;
 }
 }*/
//后台传输数据
function thirdSubmit() {
    if(!check_username()){
        return false;
    }
    var username=$("#username").val();
    console.log(username);

    $.post("username.php",
        {
            hiddenUsername : username,
        },
        function(data){
            alert(data);
            if(data == "1"){
                alert("开始游戏！");
                window.location.href = "main.html";
            }else{
                alert("用户名已存在，请重新输入");
            }
        });
}
