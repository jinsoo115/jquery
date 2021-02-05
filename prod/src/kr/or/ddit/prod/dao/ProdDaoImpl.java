package kr.or.ddit.prod.dao;

import java.sql.SQLException;
import java.util.List;

import com.ibatis.sqlmap.client.SqlMapClient;

import kr.or.ddit.ibatis.config.SqlMapClientFactory;
import kr.or.ddit.prod.vo.ProdVO;

public class ProdDaoImpl implements IProdDao {
	private SqlMapClient client;
	private static IProdDao dao;
	
	private ProdDaoImpl() {
		client = SqlMapClientFactory.getClient();
	}
	
	public static IProdDao getDao() {
		if(dao == null) dao = new ProdDaoImpl();
		return dao;
	}
	@Override
	public List<ProdVO> selectProd() {
		List<ProdVO> list = null;
		
		try {
			list = client.queryForList("prod.selectProd");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}

}
