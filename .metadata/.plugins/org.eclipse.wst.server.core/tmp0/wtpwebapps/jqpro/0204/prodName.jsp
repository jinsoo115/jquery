<%@page import="java.util.List"%>
<%@page import="kr.or.ddit.prod.ProdVO"%>
<%@page import="kr.or.ddit.ibatis.config.SqlMapClientFactory"%>
<%@page import="com.ibatis.sqlmap.client.SqlMapClient"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
//1. 클라이언트 요청시 전송되는 데이터 받기
String lgu = request.getParameter("gu");
//2. SqlMapClient객체 얻기
SqlMapClient smc = SqlMapClientFactory.getClient();

//3. sql문 실행 -select-
	List<ProdVO> list = smc.queryForList("prod.selectByName", lgu);
%>
[
<%
for(int i = 0; i < list.size(); i++){
	ProdVO vo = list.get(i);
	if(i>0) out.print(",");
%>
	{
		"id" : "<%= vo.getProd_id() %>",
		"name" : "<%= vo.getProd_name() %>"
	}
<%	
}
%>
]