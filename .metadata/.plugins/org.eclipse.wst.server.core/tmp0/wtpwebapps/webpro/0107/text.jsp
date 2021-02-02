<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style type="text/css">
	div{
		border: 2px solid pink;
		margin: 10px;
		padding: 10px;
		height: auto;
	}
</style>
</head>
<body>
<%
	request.setCharacterEncoding("UTF-8");
	String inputText = request.getParameter("area");
	
	//inputText의 enter(\r\n)값에서 줄바꾸기<br> - replaceAll('old', 'new')
	
	String text = inputText.replaceAll("\r", "").replaceAll("\n","<br>");
%>

<p>입력 내용을 request로 가져올때 여러줄로 입력된 내용을 출력시 줄바꿈이 없다.</p>
<div><%= inputText %></div>

<br>
<p>입력 내용을 request로 가져올때 여러줄로 입력된 내용을 출력시에도 같은 형태로 출력한다.</p>
<div><%= text  %></div>
</body>
</html>