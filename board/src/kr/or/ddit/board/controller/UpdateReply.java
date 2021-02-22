package kr.or.ddit.board.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.board.service.BoardServiceImpl;
import kr.or.ddit.board.service.IBoardService;
import kr.or.ddit.board.vo.ReplyVO;

@WebServlet("/UpdateReply.do")
public class UpdateReply extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public UpdateReply() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		
		int renum = Integer.parseInt(request.getParameter("renum"));
		String cont = request.getParameter("cont");
		ReplyVO vo = new ReplyVO();
		
		vo.setRenum(renum);
		vo.setCont(cont);
		
		IBoardService service = BoardServiceImpl.getInstance();
		
		int cnt = service.updateReply(vo);
		
		request.setAttribute("result", cnt);
		
		request.getRequestDispatcher("board/result.jsp").forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
