/**
 * 
 */
updateRelpy = function() {
	$.ajax({
		url : "/board/UpdateReply.do",
		type : "post",
		data : reply, // reply객체 - cont, renum이 저장
		dataType : "json"

	})
}

replyReset = function() {
	$("#modifyForm").parents(".rep").find("#rmodi").prop("disabled", false);
	spancont = $("#modifyForm").parent(); // span태그

	//수정폼을 다시 body로 append
	$("body").append($("#modifyForm"));
	$("#modifyForm").hide();

	// 원래 내용을 가져와서 수정폼에 출력하기 위해서
	// br태그를 \n으로 바꾼적이 있는 것을
	// 다시 span태그로 출력하기 위해서\n을 br태그로 바꾼다.
	modifycont = modifycont.replace(/\n/g, "<br>");
	$(spancont).append(modifycont); // 수정창에 있는 글내용

}

deleteReply = function(btn) {
	$.ajax({
		url : "/board/DeleteReply.do",
		type : "get",
		data : {
			"renum" : vidx
		},
		dataType : "json",
		success : function(res) {
			//alert(res.sw);
			$(btn).parents(".rep").remove();
		},
		error : function(xhr) {
			alert("상태 : " + xhr.status);
		}
	})
}

replySaveServer = function(btn) {
	$.ajax({
		url : "/board/InsertReply.do",
		type : "post",
		data : board, // board객체 - bonum, name, cont
		dataType : "json",
		success : function(res) {
			//alert(res.sw);

			// 댓글 등록 후 출력.
			replyListServer(btn)
		},
		error : function(xhr) {
			alert("상태  : " + xhr.status);
		}
	})
}

//등록버튼 클릭, 제목 클릭 할때 
replyListServer = function(btn) {
	$
	.ajax({
		url : "/board/ListReply.do",
		type : "get",
		data : {
			"bonum" : vidx
		},
		dataType : "json",
		success : function(res) {
			recode = "";
			$
			.each(
					res,
					function(i, v) {
						recode += '<div class="panel-body rep">';
						recode += '<p class="p1">';
						recode += v.name
						+ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
						recode += v.redate
						+ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
						recode += '<br><br><span class="cont">'
							+ v.cont + '</span>';
						recode += '</p>';
						recode += '<p class="p2">';
						recode += '<button id="rmodi" idx="'
							+ v.renum
							+ '" type="button" name="r_modify" class="action">댓글수정</button>';
						recode += '<button idx="'
							+ v.renum
							+ '" type="button" name="r_delete" class="action">댓글삭제</button>';
						recode += '</p>';
						recode += '</div>'

							/*
							 * code += `<div class="panel-heading"><hr>`;
							 * code += `<p class="p1">`; code +=
							 * `${v.name}&nbsp&nbsp&nbsp&nbsp`; code +=
							 * `${v.redate}&nbsp&nbsp&nbsp&nbsp`;
							 * code += `</p>`; code += `<p class="p2">`;
							 * code += `<button type="button"
							 * name="remodify">댓글수정</button>`; code += `<button
							 * type="button" name="redelete">댓글삭제</button>`;
							 * code += `</p>`; code += `<p class="p3">`;
							 * code += `${v.cont}`; code += `<hr></p>`;
							 * code+= `</div>`;
							 */
					})
					$(btn).parents(".panel").find(".rep").remove();
			$(btn).parents(".panel").find(".pbody").append(recode);
		},
		error : function(xhr) {
			alert("상태  : " + xhr.status);
		}
	})
}

readHitServer = function(list) {
	$.ajax({
		url : "/board/UpdateHit.do",
		data : {
			"num" : vidx
		},
		method : "get",
		dataType : "json",
		success : function(res) {
			// alert(res.sw);
			parent = $(list).parents(".panel");
			hit = parseInt($(parent).find(".wh").text());

			$(parent).find(".wh").text(++hit);

		},
		error : function(xhr) {
			alert("상태  : " + xhr.status);
		}
	})
}
updateBoard = function() {
	$.ajax({
		url : "/board/UpdateBoard.do",
		data : $("#mform").serializeJSON(),
		method : "post",
		dataType : "json",
		success : function(res) {
			// alert(res.sw);

			// 화면에서 수정한 값 출력
			// 제목
			$(parent).find("a").text($("#mform #subject").val());
			// 메일
			$(parent).find(".wm").text($("#mform #mail").val());
			// 작성자
			// $(parent).find(".wr").text($("#mform #writer").val());
			// 내용
			cont = $("#mform #content").val();
			cont = cont.replace(/\r/g, "").replace(/\n/g, "<br>");
			// $(parent).find(".wc").text($("#mform #content").val());
			$(parent).find(".wc").html(cont);

			// 모달창 닫기
			$("#modiModal").modal("hide");
			$("#mform .txt").val("");

		},
		error : function(xhr) {
			alert("상태 : " + xhr.status);
		}
	})
}

deleteBoard = function(btn) {
	$.get("/board/DeleteBoard.do", {
		"num" : vidx
	}, function(res) {
		// alert(res.sw);
		// 화면에서 리스트 삭제
		// $(btn).parents(".panel").remove();
		readPageServer(currentPage);
	}, "json")
}

insertBoard = function() {
	$.post("/board/Insert.do", $("#wform").serializeJSON(), function(res) {
		$("#writeModal").modal("hide");
		$(".txt").val("");
		readPageServer(1);
	}, "json")
}

readPageServer = function(cpage) {
	currentPage = cpage;
	$
	.ajax({
		url : "/board/List.do",
		type : "post",
		data : {
			"cpage" : cpage
		},
		success : function(res) {
			// if(currentPage > res.totalPage) currentPage =
			// res.totalPage;
			code = '<div class="panel-group" id="accordion">';
			$.each(
					res.datas,
					function(i, v) {
						code += '<div class="panel panel-default">';
						code += '<div class="panel-heading">';
						code += '<h4 class="panel-title">';
						code += '<a  idx="'
							+ v.num
							+ '" name="list" class="action" data-toggle="collapse" data-parent="#accordion" href="#collapse'
							+ v.num + '">' + v.subject
							+ '</a>';
						code += '</h4>';
						code += '</div>';
						code += '<div id="collapse'
							+ v.num
							+ '" class="panel-collapse collapse">';
						code += '<div class="panel-body pbody">';
						code += '<p class="p1">';
						code += '작성자 :<span class="wr">'
							+ v.writer
							+ '</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
						code += '이메일 :<span class="wm">'
							+ v.mail
							+ '</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
						code += '작성일 :<span class="wd">'
							+ v.date
							+ '</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
						code += '조회수 :<span class="wh">'
							+ v.hit + '</span>';
						code += '</p>';
						code += '<p class="p2">';
						code += '<button idx="'
							+ v.num
							+ '" type="button" name="modify" class="action">수정</button>';
						code += '<button idx="'
							+ v.num
							+ '" type="button" name="delete" class="action">삭제</button>';
						code += '</p>';
						code += '<p class="p3">';
						code += '<span class="wc">' + v.cont
						+ '</span>';
						code += '</p>';
						code += '<p class="p4">';
						code += '<textarea rows="" cols="60"></textarea>';
						code += '<button idx="'
							+ v.num
							+ '" type="button" name="reply" class="action">등록</button>';
						code += '</p>';
						code += '</div>';
						code += '</div>';
						code += '</div>';
					})
					code += '</div>';
			$(".box").html(code);

			// 이전 버튼 출력 - 1보다 클 때만
			$("#pagelist").empty();

			if (res.startPage > 1) {
				pager = '<ul class="pager col-sm-4">';
				pager += '<li><a class="prev" href="#">Previous</a></li>';
				pager += '</ul>';

				$("#pagelist").append(pager);
			}

			// 페이지 번호 출력
			pager = '<ul class="pagination col-sm-4">';
			for (i = res.startPage; i <= res.endPage; i++) {
				if (currentPage == i) {
					pager += '<li class="active"><a class="paging" href="#">'
						+ i + '</a></li>';
				} else {
					pager += '<li><a class="paging" href="#">' + i
					+ '</a></li>';
				}
			}
			pager += '</ul>';
			$("#pagelist").append(pager);

			// 다음 버튼 출력
			if (res.endPage < res.totalPage) {
				pager = '<ul class="pager col-sm-4">';
				pager += '<li><a class="next" href="#">next</a></li>';
				pager += '</ul>';

				$("#pagelist").append(pager);
			}
		},
		error : function(xhr) {
			alert("상태 : " + xhr.status);
		},
		dataType : "json"
	})
}

readServer = function() {
	$.ajax({
		url : "/board/List.do",
		type : "get",
		success : function(res) {
			code = '<div class="panel-group" id="accordion">';
			$
			.each(
					res,
					function(i, v) {
						code += '<div class="panel panel-default">';
						code += '<div class="panel-heading">';
						code += '<h4 class="panel-title">';
						code += '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'
							+ v.num
							+ '">'
							+ v.subject
							+ '</a>';
						code += '</h4>';
						code += '</div>';
						code += '<div id="collapse'
							+ v.num
							+ '" class="panel-collapse collapse">';
						code += '<div class="panel-body">';
						code += '<p class="p1">';
						code += '작성자 : '
							+ v.writer
							+ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
						code += '이메일 : '
							+ v.mail
							+ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
						code += '작성일 : '
							+ v.date
							+ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
						code += '조회수 : ' + v.hit;
						code += '</p>';
						code += '<p class="p2">';
						code += '<button type="button" name="modify" class="action">수정</button>';
						code += '<button type="button" name="delete" class="action">삭제</button>';
						code += '</p>';
						code += '<p class="p3">';
						code += v.cont;
						code += '</p>';
						code += '<p class="p4">';
						code += '<textarea rows="" cols="60"></textarea>';
						code += '<button type="button" name="reply" class="action">등록</button>';
						code += '</p>';
						code += '</div>';
						code += '</div>';
						code += '</div>';
					})
					code += '</div>';
			$(".box").html(code);
		},
		error : function(xhr) {
			alert("상태 : " + xhr.status);
		},
		dataType : "json"
	})
}