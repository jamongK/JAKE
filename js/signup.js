$(function () {
    $(".btn").hover(function () {
        $(this)
            .css("background-color", "#fb7507");
    }, function () {
        $(this)
            .css("background-color", "#FE8A02");
    });
});


/**
 * 회원가입 유효성 검사
 * 
 * 유효성 검사
 * - 1. 미입력 및 글자 수 체크
 * - 2. 규칙 준수 여부 체크
 */

// 아이디는 영대소문자 5자이상 10자 이하
// var idRegx = /^[a-z]{5,10}$/;
var idRegx = /^[A-Za-z]{5,10}$/;

// 비밀번호는 숫자 6자이상
var pwRegx = /^[0-9]{6,}$/;

function idValidation() {
    // 글자 수 체크
    if (userId.value.length >= 5 && userId.value.length <= 10) {
        $("#reg1")
            .html("O 5-10 characters")
            .css("color", "green");
    } else {
        $("#reg1")
            .html("x 5-10 characters")
            .css("color", "red");
        // return false;
    }

    // 영대소문자 여부
    if (idRegx.test(userId.value)) {
        $("#reg2")
            .html("O Uppercase or lowercase letters")
            .css("color", "green");
    } else {
        $("#reg2")
            .html("x Uppercase or lowercase letters")
            .css("color", "red");
    }

}

function pwValidation() {
    // 글자 수 체크
    if (userPw.value.length >= 6) {
        $("#reg3")
            .html("O At least 6 characters")
            .css("color", "green");
    } else {
        $("#reg3")
            .html("x At least 6 characters")
            .css("color", "red");
    }

    // 숫자만 입력했는지 여부
    if (pwRegx.test(userPw.value)) {
        $("#reg4")
            .html("O Numeric characters only")
            .css("color", "green");
    } else {
        $("#reg4")
            .html("x Numeric characters only")
            .css("color", "red");
    }
}

function saveAccount() {
    if (userPw.value.length < 6) {
        alert('ERROR : Password length');
        return;
    } 
    if (userId.value.length < 5 || userId.value.length > 10) {
        alert('ERROR : ID length');
        return;
    } 
    if (idRegx.test(userId.value) == false) {
        alert('ERROR : Check ID again');
        return;
    } 
    if (pwRegx.test(userPw.value) == false) {
        alert('ERROR : Check Password Again');
        return;
    }

    var $id = $(userId);
    var $pw = $(userPw);

    localStorage.setItem($id.val(), $pw.val());

    var account = new Account($id.val(), $pw.val());

    var arr = JSON.parse(localStorage.getItem("arr"));

    if (arr == null) {
        arr = [];
    }

    arr.push(account);

    var jsonStr = JSON.stringify(arr);
    localStorage.setItem("arr", jsonStr);

    $id.val('');
    $pw.val('');

    loadAccount();
}

function Account(id, pw) {
    this.id = id;
    this.pw = pw;
    this.time = new Date().getTime();
}

