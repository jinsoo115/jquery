<%@page import="kr.or.ddit.lprod.LprodVO"%>
<%@page import="java.util.List"%>
<%@page import="kr.or.ddit.ibatis.config.SqlMapClientFactory"%>
<%@page import="com.ibatis.sqlmap.client.SqlMapClient"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	SqlMapClient smc = SqlMapClientFactory.getClient();

List<LprodVO> list = smc.queryForList("lprod.selectLprod");
%>
<table border='1'>
<tr id='f1'><td>LPROD_ID</td><td>LPROP_GU</td><td>LPROD_NM</td></tr>
<%
	for(int i = 0; i < list.size(); i++){
		LprodVO vo = list.get(i);
		
%>
<tr>
	<td><%=vo.getLprod_id() %></td>
	<td><%=vo.getLprod_gu() %></td>
	<td><%=vo.getLprod_nm() %></td>
</tr>
<%
	}
%>
</table>