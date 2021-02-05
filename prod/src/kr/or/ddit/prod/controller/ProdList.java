package kr.or.ddit.prod.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.prod.service.IProdService;
import kr.or.ddit.prod.service.ProdServiceImpl;
import kr.or.ddit.prod.vo.ProdVO;


/**
 * Servlet implementation class ProdList
 */
@WebServlet("/ProdList")
public class ProdList extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ProdList() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1. 클라이언트 요청시 전송되는 데이터 받기

		// 2. Service 객체 얻어오기
		IProdService service = ProdServiceImpl.getService();

		// 3. Service메소드 호출 - 결과값 리턴 받기
		List<ProdVO> list = service.selectProd();

		// 4. 결과값을 request객체에 저장한다.
		request.setAttribute("listValue", list);

		// 5. jsp View페이지로 forward
		RequestDispatcher disp = request.getRequestDispatcher("0205/prod.jsp");
		disp.forward(request, response);

	}


}
