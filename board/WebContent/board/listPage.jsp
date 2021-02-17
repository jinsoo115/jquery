<%@page import="kr.or.ddit.board.vo.BoardVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	List<BoardVO> list = (List<BoardVO>)request.getAttribute("listPage");
	int totalPage = (Integer)request.getAttribute("totalPage");
	int startPage = (Integer)request.getAttribute("startPage");
	int endPage = (Integer)request.getAttribute("endPage");
	
%>
{
	"totalPage" : "<%= totalPage %>",
	"startPage" : "<%= startPage %>",
	"endPage" : "<%= endPage %>",
	"datas" : [ 
<%
	for(int i = 0; i < list.size(); i++){
		BoardVO vo = list.get(i);
		if(i>0) out.print(",");
%>
	{
		"num" : "<%= vo.getNum() %>",
		"subject" : "<%= vo.getSubject() %>",
		"writer" : "<%= vo.getWriter() %>",
		"cont" : "<%= vo.getContent().replaceAll("\r", "").replaceAll("\n", "<br>") %>",
		"hit" : "<%= vo.getHit() %>",
		"date" : "<%= vo.getWdate() %>",
		"mail" : "<%= vo.getMail() %>",
		"pass" : "<%= vo.getPassword() %>"
	}
<%
	}
%>		
	]
}