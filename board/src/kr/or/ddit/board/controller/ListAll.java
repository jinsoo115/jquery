package kr.or.ddit.board.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.board.service.BoardServiceImpl;
import kr.or.ddit.board.service.IBoardService;
import kr.or.ddit.board.vo.BoardVO;

@WebServlet("/List.do")
public class ListAll extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	
	public ListAll() {
		super();
	}
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 전체목록 가져오기
		
		// 1. 클라이언트 요청시 전송데이터 받기
		request.setCharacterEncoding("UTF-8");
		// 2, service객체 얻기
		IBoardService service = BoardServiceImpl.getInstance();
		
		// 3. service메소드 호출 - 결과값
		List<BoardVO> list = service.selectAll();
		
		// 4. 결과값을 request에 저장
		request.setAttribute("list", list);
		
		// 5. view페이지로 forward
		request.getRequestDispatcher("board/listAll.jsp").forward(request, response);;
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 페이지별 리스트 가져오기
	}

}
