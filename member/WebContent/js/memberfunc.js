/**
 * 
 */

function okpro(vinput) {
	vsp = $(vinput).parents(".form-group").find(".sp");

	$(vsp).empty();

	$("<img>",{
		"src" : "../images/check.png",
		"width" : "20px",
		"height" : "20px"
	}).appendTo(vsp);

	// nopro영역 지우기
	$(vinput).parents(".form-group").find(".msg").html("");

}
function nopro(vinput, text) {
	$(vinput).parents(".form-group").find(".msg").html(text).css("color", "red");
	$(vinput).parents(".form-group").find(".sp").empty();
}

//id 중복검사
function idcheck(){
	idvalue = $("#id").val().trim();
	if(idvalue.length < 1) {
		alert("아이디를 입력하세요");
		return false;
	}
	
	 $.post("/member/ID.do", {"id" : idvalue}, function(res){
			
			$("#idspan").html(res.sw).css("color","red");
		}, "json")
	
	/*$.ajax({
		url : "/member/ID.do",
		type : "post",
		data : {"id" : idvalue},
		success : function(res){
			
			$("#idspan").html(res.sw).css("color","red");
		},
		error : function(xhr){
			alert("상태 : " + xhr.status);
		},
		dataType : "json" 

	})*/
}


//우편번호 검색 modal - 별도의 이벤트 핸들러 없음
//<button id="mzipbtn" class="btn btn-primary btn-sm" type="button" data-toggle="modal" data-target="#myModal">번호검색(modal)</button>

//우편번호 modal에서 동 입력후 확인 버튼 클릭 이벤트
function dongsearch(){
	// 입력한 값 가져오기
	dongvalue = $("#dong").val().trim();

	// 서버로 전송(요청)
	$.ajax({
		url : "/member/DongSearch.do",
		data : {"dong" : dongvalue},
		type : "post",
		success: function(res){
			code = `<table class="table table-bordered">`;
			code += `<tr><td>우편번호</td><td>주소</td><td>번지</td></tr>`;

			$.each(res , function(i,v){
				code += `<tr class='ziptr'><td>${v.code}</td><td>${v.addr}</td><td>${v.bunji}</td></tr>`
			})
			code += `</table>`;
			$("#result1").html(code);
		},
		error : function(xhr){
			alert("상태 : " + xhr.status);
		},
		dataType : "json"
	})
}

//modal결과에서 원하는 행 (주소)를 선택했을때 이벤트
//동적으로 새롭게 생성된 요소 delegate방식
function zipselect(tt){

	// 선택
	zipcode = $("td:eq(0)", tt).text();
	addr = $("td:eq(1)", tt).text();
	addr += " ";
	addr += $("td:eq(2)", tt).text();
	// 폼에 출력
	$("#zip").val(zipcode);
	$("#add1").val(addr);

	// modal 닫기
	$("#myModal").modal("hide");
	// modal 내용 지우기
	$("#dong").val("");
	$("#result1").empty();
}

//제출버튼 클릭 이벤트
//$("button[type=submit]").on("click",function(){})
//$("button:submit").on("click", function(){})

function fsubmit(){
	// submit의 고유 기능(전송)을 방지 한다.
	event.preventDefault();

	/*// 입력한 모든 값(9개)을 가져온다 - val()
            idvalue = $("#id").val().trim();
            namevalue = $("#name").val().trim();
            birvalue = $("#bir").val().trim();
            passvalue = $("#pass").val().trim();
            hpvalue = $("#hp").val().trim();
            mailvalue = $("#mail").val().trim();
            zipvalue = $("#zip").val().trim();
            add1value = $("#add1").val().trim();
            add2value = $("#add2").val().trim();

            datas = {"mem_id": idvalue,
                     "mem_name": namevalue,
                     "mem_bir": birvalue,
                     "mem_pass": passvalue,
                     "mem_hp": hpvalue,
                     "mem_mail": mailvalue,
                     "mem_zip": zipvalue,
                     "mem_add1": add1value,
                     "mem_add2": add2value
                    }
            console.log(datas);

            datas = "mem_id=" + idvalue +
                    "&mem_name=" + namevalue +
                    "&mem_bir=" + birvalue +
                    "&mem_pass=" + passvalue +
                    "&mem_hp=" + hpvalue +
                    "&mem_mail=" + mailvalue +
                    "&mem_zip=" + zipvalue +
                    "&mem_add1=" + add1value +
                    "&mem_add2=" + add2value

            console.log(datas);*/
	console.log($("#ff").serialize());
	console.log($("#ff").serializeArray());
	console.log($("#ff").serializeJSON());

	$.ajax({
		url : "/member/Insert.do",
		method : "post",
		data : $("#ff").serializeJSON(),
		success : function(res){
			$("#subspan").html(res.sw).css("color","red");
		},
		error : function(xhr){
			alert("상태 : " + xhr.status);
		},
		dataType : "json"
	})
	
}

