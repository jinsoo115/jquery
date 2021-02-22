package kr.or.ddit.board.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import kr.or.ddit.board.dao.BoradDaoImpl;
import kr.or.ddit.board.dao.IBoardDao;
import kr.or.ddit.board.vo.BoardVO;
import kr.or.ddit.board.vo.ReplyVO;

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
	@Override
	public List<BoardVO> selectByPage(Map<String, Integer> map) {
		List<BoardVO> list = null;
		try {
			list = dao.selectByPage(map);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	@Override
	public int listCount() {
		int cnt = 0;
		try {
			cnt = dao.listCount();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return cnt;
	}
	@Override
	public int insertBoard(BoardVO vo) {
		int num = 0;
		try {
			num = dao.insertBoard(vo);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return num;
	}
	@Override
	public int deleteBoard(int num) {
		int cnt = 0;
		try {
			cnt = dao.deleteBoard(num);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return cnt;
	}
	@Override
	public int updateBoard(BoardVO vo) {
		int cnt = 0;
		try {
			cnt = dao.updateBoard(vo);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return cnt;
	}
	@Override
	public int updateHit(int num) {
		int cnt = 0;
		try {
			cnt = dao.updateHit(num);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return cnt;
	}
	@Override
	public int insertReply(ReplyVO vo) {
		int renum = 0;
		try {
			renum = dao.insertReply(vo);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return renum;
	}
	@Override
	public List<ReplyVO> listReply(int bonum) {
		List<ReplyVO> list = null;
		
		try {
			list = dao.listReply(bonum);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	@Override
	public int updateReply(ReplyVO vo) {
		int cnt = 0;
		try {
			cnt = dao.updateReply(vo);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return cnt;
	}
	@Override
	public int deleteReply(int renum) {
		int cnt = 0;
		try {
			cnt = dao.deleteReply(renum);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return cnt;
	}

}
