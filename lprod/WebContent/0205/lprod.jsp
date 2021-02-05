<%@page import="kr.or.ddit.lprod.vo.LprodVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	// Servlet에서 최종결과를 받아서 출력
	List<LprodVO> list = (List<LprodVO>)request.getAttribute("listValue");
%>

[
<%
	for(int i = 0; i < list.size(); i++){
		LprodVO vo = list.get(i);
		if(i>0) out.print(",");
%>
		{
			"id" : "<%=vo.getLprod_id() %>",
			"gu" : "<%=vo.getLprod_gu() %>",
			"nm" : "<%=vo.getLprod_nm() %>"
		}
<%
	}
%>
]




<%-- <table>
	<tr>
	<td>LPROD_ID</td>
	<td>LPROD_GU</td>
	<td>LPROD_NM</td>
	</tr>
	<%
		for(int i = 0; i < list.size(); i++){
			LprodVO vo = list.get(i);
		
	%>
	<tr>
		<td><%= vo.getLprod_id() %></td>
		<td><%= vo.getLprod_gu() %></td>
		<td><%= vo.getLprod_nm() %></td>
	</tr>
	<%}%>
</table> --%>