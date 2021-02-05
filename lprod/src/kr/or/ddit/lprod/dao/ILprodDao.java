package kr.or.ddit.lprod.dao;

import java.util.List;

import kr.or.ddit.lprod.vo.LprodVO;

public interface ILprodDao {
	// 메소드 선언
	public List<LprodVO> selectLprod();
}
