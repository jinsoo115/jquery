package kr.or.ddit.lprod.dao;

import java.sql.SQLException;
import java.util.List;

import com.ibatis.sqlmap.client.SqlMapClient;

import kr.or.ddit.ibatis.config.SqlMapClientFactory;
import kr.or.ddit.lprod.vo.LprodVO;
/*
 * SqlMapClient객체 얻기
 * mapper 실행하기
 * 실행결과를 service로 리턴
 * 
 * service에서 사용될 자신의 객체를 생성하기
 * 자신의 객체를 리턴하는 getDao()메소드를 정의한다.
 * 
 */
public class LprodDaoImpl implements ILprodDao {
	private SqlMapClient client;
	private static ILprodDao dao;
	
	private LprodDaoImpl() {
		client = SqlMapClientFactory.getClient();

	}
	public static ILprodDao getDao() {
		if(dao == null) dao = new LprodDaoImpl();
		return dao;
	}
	@Override
	public List<LprodVO> selectLprod() {
		List<LprodVO> list = null;
		
		try {
			list = client.queryForList("lprod.selectLprod");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return list; // service로 리턴한다.
	}

}
