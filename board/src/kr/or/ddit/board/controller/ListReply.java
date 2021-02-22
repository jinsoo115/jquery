package kr.or.ddit.board.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.board.service.BoardServiceImpl;
import kr.or.ddit.board.service.IBoardService;
import kr.or.ddit.board.vo.ReplyVO;

@WebServlet("/ListReply.do")
public class ListReply extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ListReply() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		
		int bonum = Integer.parseInt(request.getParameter("bonum"));
		
		IBoardService service = BoardServiceImpl.getInstance();
		
		List<ReplyVO> list = service.listReply(bonum);
		
		request.setAttribute("list", list);
		
		request.getRequestDispatcher("board/replyList.jsp").forward(request, response);
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
