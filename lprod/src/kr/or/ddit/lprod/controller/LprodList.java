package kr.or.ddit.lprod.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.lprod.service.ILprodService;
import kr.or.ddit.lprod.service.LprodServiceImpl;
import kr.or.ddit.lprod.vo.LprodVO;

/**
 * Servlet implementation class LprodList
 */
@WebServlet("/LprodList")
public class LprodList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LprodList() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1. 클라이언트 요청시 전송되는 데이터 받기
		
		// 2. Service 객체 얻어오기
		ILprodService service = LprodServiceImpl.getService();
		
		// 3. Service메소드 호출 - 결과값 리턴 받기
		List<LprodVO> list = service.selectLprod();
		
		// 4. 결과값을 request객체에 저장한다.
		request.setAttribute("listValue", list);
		
		// 5. jsp View페이지로 forward
		RequestDispatcher disp = request.getRequestDispatcher("0205/lprod.jsp");
		disp.forward(request, response);
		
	}

}
