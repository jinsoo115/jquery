<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	// controller에서 request에 저장된 값을 가져온다.
	String id = (String) request.getAttribute("result");
if(id != null){
	// id가 이미 있다. 즉 중복된다. 사용불가
%>
	{
		"sw" : "사용 불가능한 아이디"
	}
<%
}else{
	// id가 중복되지 않는다. 사용가능
%>
	{
		"sw" : "사용 가능한 아이디"
	}
<%
}
%>