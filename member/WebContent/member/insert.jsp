<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<% 
	String id = (String)request.getAttribute("result");
if(id != null){
	
%>
	{
		"sw" : "환영합니다."
	}
<%
}else{
	
%>
	{
		"sw" : "가입에 실패 했습니다."
	}
<%
}
%>