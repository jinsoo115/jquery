package kr.or.ddit.lprod.service;

import java.util.List;

import kr.or.ddit.lprod.dao.ILprodDao;
import kr.or.ddit.lprod.dao.LprodDaoImpl;
import kr.or.ddit.lprod.vo.LprodVO;
/*
 * Dao객체 얻어오기 - 생성자
 * Dao메소드 호출하기 - 결과값 리턴받기
 * Servlet으로 리턴 한다
 * 
 * Servlet에서 사용할 자신의 객체를 생성한다
 * 자신의 객체를 리턴하는 getService() 메소드 정의
 */
public class LprodServiceImpl implements ILprodService {
	private ILprodDao dao;
	private static ILprodService service;
	
	private LprodServiceImpl() {
		dao = LprodDaoImpl.getDao();
	}
	
	public static ILprodService getService() {
		if(service == null) service = new LprodServiceImpl();
		return service;
	}
	@Override
	public List<LprodVO> selectLprod() {
		List<LprodVO> list = null;
		// dao메소드 호출 하여 결과값을 받기
		list = dao.selectLprod();
		return list; // Servlet으로 리턴
	}

}
