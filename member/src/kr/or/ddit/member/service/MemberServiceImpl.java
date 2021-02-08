package kr.or.ddit.member.service;

import java.sql.SQLException;
import java.util.List;

import kr.or.ddit.member.dao.IMemberDao;
import kr.or.ddit.member.dao.MemberDaoImpl;
import kr.or.ddit.member.vo.MemberVO;
import kr.or.ddit.member.vo.ZipVO;

/*
 * dao 객체를 얻어온다. - 생성자
 * 
 * 자신의 객체를 생성하여 리턴
 * 
 */
public class MemberServiceImpl implements IMemberService {
	
	private IMemberDao dao;
	private static IMemberService service;
	
	// 생성자
	private MemberServiceImpl() {
		dao = MemberDaoImpl.getInstance();
	}
	public static IMemberService getInstance() {
		if(service == null) service = new MemberServiceImpl();
		return service;
	}
	
	
	@Override
	public String selectById(String id) {
		String resId = null;
		
		// dao에서 수행된 결과를 받음
		try {
			resId = dao.selectById(id);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return resId;
	}

	@Override
	public String insertMember(MemberVO vo) {
		String inputId = null;
		
		try {
			inputId = dao.insertMember(vo);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return inputId;
	}

	@Override
	public List<ZipVO> selectByDong(String dong) {
		List<ZipVO> list = null;
		
		try {
			// dao수행후 결과값 받음
			list = dao.selectByDong(dong);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return list; // controller로 리턴
	}

}
