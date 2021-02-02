/**
 * 
 */
function check(){
	// 입력한 값 가져오기
    namevalue = document.getElementById('name').value;
    
    // 공백체크
    if(namevalue.trim().length < 1){
        alert("이름 입력하세요");
        document.getElementById('name').focus();
        return false;
    }
    // 길이체크
    if(namevalue.trim().length < 2 || namevalue.trim().length > 7){
        alert("이름 2~7사이");
        return false;
    }
    // 정규식
    namereg = /^[가-힣]{2,7}$/
    // 비교 test() - true/false리턴
    
    if(!(namereg.test(namevalue))){
        alert("이름 형식 오류");
        return false;
    }
    
    //--------아이디 체크-------------------
    
    // 값 가져오기
    idvalue = document.getElementById('id').value;
     
    // 공백
    if(idvalue.trim().length < 1){
        alert("아이디 입력");
        document.getElementById('id').focus();
        return false;
    }
   
    // 길이체크 4~12
    if(idvalue.trim().length < 4 || idvalue.trim().length > 12){
        alert("아이디 4~12");
        return false;
    }
    
    // 정규식 - 소문자로 시작한다. 
    idreg = /^[a-z][a-zA-Z0-9]{3,11}$/ 
    if(!(idreg.test(idvalue))){
        alert("아이디 형식오류");
        return false;
    }
    
    
    
    // --------이메일 체크---------
    
    // 값 가져오기
    emailvalue = document.getElementById('email').value;
    
    // 공백
    if(emailvalue.trim().length < 1){
        alert("이메일 입력");
        return false;
    }
    
    // 정규식 asd123@w3c.com   ASDasd123@kk.co.kr 1234@hh.com
    emailreg = /^[a-zA-Z0-9]+@[a-zA-Z0-9-_]+(\.[a-z]+){1,2}$/;
    a = emailreg.test(emailvalue);
    if(!a){
        alert("이메일 형식오류");
        return false;
    }
    
    // --------전화번호 체크---------
    
    // 값 가져오기
    phonevalue = document.getElementById('phone').value;
    
    // 공백
    if(phonevalue.trim().length < 1){
        alert("전화번호 입력");
        return false;
    }
    
    // 정규식
    phonereg = /^\d{3}-\d{4}-\d{4}$/;
    if(!(phonereg.test(phonevalue))){
        alert("전화번호 형식오류");
        return false;
    }
    
    /*a = phonereg.test(phonevalue);
    if(a == false){
        alert("전화번호 형식오류");
        return false;
    }*/
    
    // --------비밀번호 체크---------
    
    // 값 가져오기
    passvalue = document.getElementById('pass').value;
    
    // 공백
    if(passvalue.trim().length < 1){
        alert("비밀번호 입력");
        return false;
    }
    
    // 길이 체크 8~15
    if(passvalue.trim().length < 8 || passvalue.trim().length > 15){
        alert("비밀번호 8~15");
        return false;
    }
        
    // 정규식 - 영문 대소문자, 숫자, 특수문자를 반드시 한개 이상씩 입력
    
    // 정방탐색 -> 찾을 대상 ?= 기준점
    // ^(?=.*[a-z]) Aasdf       asdf     
    // (?=.*[A-Z])  asdG        K
    // (?=.*[0-9]) 9            k7
    // (?=.*[~!@#$%^&*()_+-])
    
    passreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()]).{8,15}$/;
    if(!(passreg.test(passvalue))){
        alert("비밀번호 형식오류");
        return false;
    }
    
    // a = idreg.test(idvalue)
    // if(a == false)
    // a = idvalue.math(idreg)
    // if(a == null)
    
    // -------------생일 체크--------------
    // 생일 값 가져오기
    birvalue = document.getElementById('birthday').value;
    if(birvalue.trim().length < 1){
        alert("생일 입력")
        return false;
    }
    birth = new Date(birvalue);
    today = new Date();
    
    // 시간의 간격을 구한다. - getTime();
    times = today.getTime() - birth.getTime();
    times = parseInt(times / 1000 / 60 / 60 / 24 / 365);
    
    if(times < 14){
        alert("14세 이상 가능합니다");
        return false;
    }
    
    
    return true; 
}