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

@WebServlet("/InsertReply.do")
public class InsertReply extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public InsertReply() {
        super();
    }
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 요청시 전송되는 값 가져오기 - bonum, name, cont
		request.setCharacterEncoding("utf-8");
		
		ReplyVO vo = new ReplyVO();
		
		vo.setBonum(Integer.parseInt(request.getParameter("bonum")));
		vo.setName(request.getParameter("name"));
		vo.setCont(request.getParameter("cont"));
	
		IBoardService service = BoardServiceImpl.getInstance();
		
		int renum = service.insertReply(vo);
		
		request.setAttribute("result", renum);
		
		request.getRequestDispatcher("board/result.jsp").forward(request, response);
	}

}
