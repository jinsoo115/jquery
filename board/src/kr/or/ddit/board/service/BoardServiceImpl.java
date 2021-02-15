package kr.or.ddit.board.service;

import java.sql.SQLException;
import java.util.List;

import kr.or.ddit.board.dao.BoradDaoImpl;
import kr.or.ddit.board.dao.IBoardDao;
import kr.or.ddit.board.vo.BoardVO;

/*
 * Dao객체 얻어오기 - 생성자
 * 자신의 객체 생성하여 리턴
 */
public class BoardServiceImpl implements IBoardService {
	private IBoardDao dao;
	private static IBoardService service;
	
	// 생성자
	private BoardServiceImpl() {
		dao = BoradDaoImpl.getInstance();
	}
	public static IBoardService getInstance() {
		if(service == null) service = new BoardServiceImpl();
		return service;
	}
	@Override
	public List<BoardVO> selectAll() {
		List<BoardVO> list = null;
		try {
			list = dao.selectAll();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}

}
