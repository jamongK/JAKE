$(function () {
    $("#signup-btn").hover(function () {
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
var idRegx = /^[a-zA-Z]{5,10}$/;

// 비밀번호는 숫자 6자이상
var pwRegx = /^[0-9]{6,}$/;