
function aa() {
    window.location = "regist.html";
}
function check_telnum() {
    var tel=encodeURI($("#tel").val());
    if (tel==""){
        alert("账号不能为空");
        return false;

    }
    else if (!isPoneAvailable(tel)){
        alert("您输入的账号有误");
        return false;
    }
    return true;

}
function check_passwd() {
    var pwd=encodeURI($("#pwd").val());
    if (pwd=="") {
        alert("密码不能为空");
        return false;
    }
    else if (!isPasswd (pwd)){
        alert("密码至少大于等于6位且由数字或字母组成");
        return false;
    }
    return true;

}
function isPoneAvailable(str){
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if(!myreg.test(str)){
        return false;
    } else {
        return true;
    }
}
function  isPasswd (str){
    var passwd=/^[0-9A-Za-z]{6,}$/;
    if(!passwd.test(str)){
        return false;
    }else {
        return true;
    }

}

//向后台传输数据
function firstSubmit() {
    if(!check_telnum()){
        return false;
    }
    if(!check_passwd()){
        return false;
    }
    //console.log("dd")
    var tel = $("#tel").val();
    var pwd = $("#pwd").val();
    console.log(tel);
    console.log(pwd);

    $.post("login.php",
        {
            hiddenNum : tel,
            hiddenPass : pwd
        },
        function(data){
            alert(data);
            if(data == "true"){
                alert("登录成功！");
                window.location.href = "main.html";
            }else{
                alert("账号或密码不正确！");
            }
        });

}