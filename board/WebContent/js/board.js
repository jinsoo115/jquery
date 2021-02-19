/**
 * 
 */
readHitServer = function(list) {
	$.ajax({
		
	})
}

updateBoard = function() {
	$.ajax({
		url : "/board/UpdateBoard.do", 
		data : $("#mform").serializeJSON(),
		method : "post",
		dataType : "json",
		success: function(res) {
			//alert(res.sw);
			
			// 화면에서 수정한 값 출력
			// 제목
			$(parent).find("a").text($("#mform #subject").val());
			// 메일
			$(parent).find(".wm").text($("#mform #mail").val());
			// 작성자
			//$(parent).find(".wr").text($("#mform #writer").val());
			// 내용
			cont = $("#mform #content").val();
			cont = cont.replace(/\r/g, "").replace(/\n/g,"<br>");
			//$(parent).find(".wc").text($("#mform #content").val());
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
	$.get(
			"/board/DeleteBoard.do",
			{"num" : vidx},
			function(res) {
				//alert(res.sw);
				// 화면에서 리스트 삭제
				//$(btn).parents(".panel").remove();
				readPageServer(currentPage);
			},
			"json"
	)
}

insertBoard = function() {
	$.post(
		"/board/Insert.do",
		$("#wform").serializeJSON(),
		function(res) {
			$("#writeModal").modal("hide");
			$(".txt").val("");
			readPageServer(1);
		},
		"json"
	)
}

readPageServer = function(cpage) {
	currentPage = cpage;
	$.ajax({
		url : "/board/List.do",
		type : "post",
		data : {"cpage" : cpage},
		success: function(res) {
			if(currentPage > res.totalPage) currentPage = res.totalPage;
			code = '<div class="panel-group" id="accordion">';
			$.each(res.datas, function(i, v) {
				code += '<div class="panel panel-default">';
				code +=	'<div class="panel-heading">';
				code +=	'<h4 class="panel-title">';
				code +=	'<a  idx="'+v.num+'" name="list" class="action" data-toggle="collapse" data-parent="#accordion" href="#collapse' + v.num + '">'+v.subject+'</a>';
				code +=	'</h4>';
				code +=	'</div>';
				code +=	'<div id="collapse' + v.num + '" class="panel-collapse collapse">';
				code +=	'<div class="panel-body">';
				code +=	'<p class="p1">';
				code +=	'작성자 :<span class="wr">' + v.writer + '</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code +=	'이메일 :<span class="wm">' + v.mail + '</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code +=	'작성일 :<span class="wd">' + v.date +'</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code +=	'조회수 :<span class="wh">'+ v.hit +'</span>';
				code +=	'</p>';
				code +=	'<p class="p2">';
				code +=	'<button idx="' + v.num + '" type="button" name="modify" class="action">수정</button>';
				code +=	'<button idx="' + v.num + '" type="button" name="delete" class="action">삭제</button>';
				code +=	'</p>';
				code +=	'<p class="p3">';
				code +=	'<span class="wc">'+v.cont+'</span>';
				code +=	'</p>';
				code +=	'<p class="p4">';
				code +=	'<textarea rows="" cols="60"></textarea>';
				code +=	'<button idx="' + v.num + '" type="button" name="reply" class="action">등록</button>';
				code +=	'</p>';
				code +=	'</div>';
				code +=	'</div>';
				code +=	'</div>';
			})
			code += '</div>';
			$(".box").html(code);
			
			// 이전 버튼 출력 - 1보다 클 때만
			$("#pagelist").empty();
			if(res.startPage > 1 ){
				pager = '<ul class="pul pager col-sm-4">';
				pager += '<li><a class="prev" href="#">Previous</a></li>';
				pager += '</ul>';
				
				$("#pagelist").append(pager);
			}
			
			// 페이지 번호 출력
			pager = '<ul class="pul pagination col-sm-4">';
			for(i=res.startPage; i <= res.endPage; i++){
				if(currentPage == i){
					pager += '<li class="active"><a class="paging" href="#">' + i + '</a></li>';
				}else{
					pager += '<li><a class="paging" href="#">' + i + '</a></li>';
				}
			}
			pager += '</ul>';
			$("#pagelist").append(pager);
			
			// 다음 버튼 출력
			if(res.endPage < res.totalPage){
				pager = '<ul class="pager col-sm-4">';
				pager += '<li><a class="next" href="#">next</a></li>';
				pager += '</ul>';
				
				$("#pagelist").append(pager);
			}
		},
		error: function(xhr) {
			alert("상태 : " + xhr.status);
		},
		dataType : "json"
	})
}



readServer = function() {
	$.ajax({
		url : "/board/List.do",
		type : "get",
		success : function(res){
			code = '<div class="panel-group" id="accordion">';
			$.each(res, function(i, v) {
				code += '<div class="panel panel-default">';
				code +=	'<div class="panel-heading">';
				code +=	'<h4 class="panel-title">';
				code +=	'<a data-toggle="collapse" data-parent="#accordion" href="#collapse' + v.num + '">'+v.subject+'</a>';
				code +=	'</h4>';
				code +=	'</div>';
				code +=	'<div id="collapse' + v.num + '" class="panel-collapse collapse">';
				code +=	'<div class="panel-body">';
				code +=	'<p class="p1">';
				code +=	'작성자 : ' + v.writer + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code +=	'이메일 : ' + v.mail + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code +=	'작성일 : ' + v.date +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code +=	'조회수 : '+ v.hit;
				code +=	'</p>';
				code +=	'<p class="p2">';
				code +=	'<button type="button" name="modify" class="action">수정</button>';
				code +=	'<button type="button" name="delete" class="action">삭제</button>';
				code +=	'</p>';
				code +=	'<p class="p3">';
				code +=	v.cont;
				code +=	'</p>';
				code +=	'<p class="p4">';
				code +=	'<textarea rows="" cols="60"></textarea>';
				code +=	'<button type="button" name="reply" class="action">등록</button>';
				code +=	'</p>';
				code +=	'</div>';
				code +=	'</div>';
				code +=	'</div>';
			})
			code += '</div>';
			$(".box").html(code);
		},
		error: function(xhr) {
			alert("상태 : " + xhr.status);
		},
		dataType : "json"
	})
}