package kr.or.ddit.board.dao;

import java.sql.SQLException;
import java.util.List;

import com.ibatis.sqlmap.client.SqlMapClient;

import kr.or.ddit.board.vo.BoardVO;
import kr.or.ddit.ibatis.config.SqlMapClientFactory;

/*
 * SqlMapClient 객체 얻어오기 - 생성자
 * 자신의 객체를 생성하고 리턴하는 메소드
 */
public class BoradDaoImpl implements IBoardDao {
	private SqlMapClient client;
	private static IBoardDao dao;
	
	// 생성자
	private BoradDaoImpl() {
		client = SqlMapClientFactory.getClient();
	}
	
	// 리턴하는 메소드
	public static IBoardDao getInstance() {
		if(dao == null) dao = new BoradDaoImpl();
		return dao;
	}
	
	@Override
	public List<BoardVO> selectAll() throws SQLException {
		return client.queryForList("board.selectAll");
	}

}
