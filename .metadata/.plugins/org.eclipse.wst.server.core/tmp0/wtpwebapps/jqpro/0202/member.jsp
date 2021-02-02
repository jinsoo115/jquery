<%@page import="kr.or.ddit.member.MemberVO"%>
<%@page import="java.util.List"%>
<%@page import="kr.or.ddit.ibatis.config.SqlMapClientFactory"%>
<%@page import="com.ibatis.sqlmap.client.SqlMapClientBuilder"%>
<%@page import="com.ibatis.sqlmap.client.SqlMapClient"%>
<%@page import="java.io.Reader"%>
<%@page import="com.ibatis.common.resources.Resources"%>
<%@page import="java.nio.charset.Charset"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	// 클라이언트 요청시 전송되는 데이터를 받는다
	// CRUD처리를 한다.
	//- 1. SqlMapClient객체를 얻어오기 - smc = SqlMapClientFactory.getClient();

	//- 2. sql문을 실행 - mapper파일의 namespace.id이름
	//	select -> smc.queryForList(namespace.id이름) 여러줄
	//	select -> smc.quertForObject(namespace.id이름)  한줄

	// 처리 결과로 응답 데이터를 생성한다. - json, text, html, xml
%>

<%
	//- 1. SqlMapClient객체를 얻어오기 - smc = SqlMapClientFactory.getClient();
	SqlMapClient smc = SqlMapClientFactory.getClient();
	//- 2. sql문을 실행 - mapper파일의 namespace.id이름
	List<MemberVO> list = smc.queryForList("memberVO.selectAll");
%>
[
<%
	//- 3. 실행 결과로 json 데이터 생성
	for (int i = 0; i < list.size(); i++) {
		MemberVO vo = list.get(i);
%>
	{
		"id" : "<%= vo.getMem_id() %>",
		"name" : "<%= vo.getMem_name() %>",
		"hp" : "<%= vo.getMem_hp() %>",
		"mail" : "<%= vo.getMem_mail() %>"
	}

<%
	}
%>
]


