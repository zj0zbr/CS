function checktxt_number() {
    var txt_number = encodeURI($("#txt_number").val());
    if (txt_number == "") {
        alert("手机号不能为空");
        return false;

    }  else if (!isPoneAvailable(txt_number)){
        alert("您输入的手机号有误");
        return false;
    }
    return true;
}

function checkcode1() {
    var code = $("#txt_verifys").val();
    if(code==""){
        alert("验证码不能为空");
        return false;
    }

    return true;
}
function checkcode() {
 var code=encodeURI($("#txt_verifys").val());
 var getcode=MyData;
 if(code!=getcode) {
 alert("您输入的验证码错误，请重新获取");
 return false;
 }
 else {
 return true;
 }
 }

function checktxt_pwd() {
    var txt_pwd=encodeURI($("#txt_pwd").val());
    if (txt_pwd=="") {
        alert("密码不能为空");
        return false;
    }
    else if (!isPasswd (txt_pwd)){
        alert("密码至少大于等于6位且由数字或字母组成");
        return false;
    }
    return true;
}
function checktxt_rpwd() {
    var txt_rpwd=encodeURI($("#txt_rpwd").val());
    if (txt_rpwd=="") {
        alert("确认密码不能为空");
        return false;
    }
    else if (!isPasswd (txt_rpwd)){
        alert("确认密码至少大于等于6位且由数字或字母组成");
        return false;
    }
    return true;
}
function checkpsssword1() {
    var txt_pwd=encodeURI($("#txt_pwd").val());
    var txt_rpwd=encodeURI($("#txt_rpwd").val());
    if(txt_pwd!=txt_rpwd) {
        alert("两次密码不同，请重新输入");
        return false;
    }
    else {
        return true;
    }

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

function fourthSubmit() {
    if(!checktxt_number()){
        return false;
    }
    var a="aaa";
    var b="bbb";
    $.post("test.php",
        {
            hiddenmobie:a,
            hiddenname:b
        },
        function (data,status) {
            console.log(data);
            console.log(status);
            MyData = JSON.parse(JSON.parse(data).name);
            console.log(MyData);
            alert(MyData);
            $("#txt_verifys").val(MyData);
        })
}
function thirdSubmit() {
    if(!checktxt_number()){
        return false;
    }
    if(!checkcode1()){
        return false;
    }
    if(!checkcode()){
        return false;
    }
    if(!checktxt_pwd()) {
        return false;
    }
    if(!checktxt_rpwd()) {
        return false;
    }
    if(!checkpsssword1()) {
        return false;
    }
    var txt_number= $("#txt_number").val();
    var txt_pwd = $("#txt_pwd").val();
    var txt_rpwd = $("#txt_rpwd").val();
    console.log(txt_number);
    console.log(txt_pwd);
    console.log(txt_rpwd);


    $.post("forgetpwd.php",
        {
            hiddenNum : txt_number,
            hiddenPass : txt_pwd,
            hiddenrPass : txt_rpwd

        },
        function(data){
            console.log(data);
            if(data == "1"){
                alert("修改成功");
                window.location.href = "login.html";
            }else{
                alert("修改失败");
            }
        });

}
