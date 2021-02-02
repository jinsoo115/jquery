<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style type="text/css">
	p{
		font-size: 1.5em;
		background: gray;
	}
</style>
</head>
<body>
<%
	request.setCharacterEncoding("UTF-8");
	String res = "";
	String selItems[] = request.getParameterValues("sel2");
	/* for(int i = 0; i < selItem.length; i++){
		res += selItem[i] + " ";
	} */
	for(String item : selItems){
		res += item + " ";
	}
%>
<h3>선택하신 아이템입니다.</h3>
<p><%= res %></p>
</body>
</html>