<%@page import="kr.or.ddit.ibatis.config.SqlMapClientFactory"%>
<%@page import="com.ibatis.sqlmap.client.SqlMapClient"%>
<%@page import="kr.or.ddit.lprod.LprodVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
 //1. 클라이언트 요청시 전송되는 데이터 받기
 //2. SqlMapClient객체 얻기
 SqlMapClient smc = SqlMapClientFactory.getClient();
 
 //3. sql문 실행 -select-
 	List<LprodVO> list = smc.queryForList("lprod.selectLprod");
%>

[
<%
	//- 3. 실행 결과로 json 데이터 생성
	for (int i = 0; i < list.size(); i++) {
		LprodVO vo = list.get(i);
		if(i>0) out.print(",");
%>
	{
		"id" : "<%= vo.getLprod_id() %>",
		"gu" : "<%= vo.getLprod_gu() %>",
		"nm" : "<%= vo.getLprod_nm() %>"
	}

<%
	}
%>
]


