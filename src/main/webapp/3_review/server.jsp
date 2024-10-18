<%@ page language="java" 
	contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!-- 자바 패키지 불러오기 -->
<%@ page import="java.sql.*" %>

<%
	// 입력한값들 문자열로 받아서 저장하기
	String empno =	request.getParameter("empno");
	String ename =	request.getParameter("ename");
	String job	 =	request.getParameter("job");
	String sal	 =	request.getParameter("sal");
	String deptno=	request.getParameter("deptno");
	
	// 확인위해 콘솔창에 출력
	System.out.println("사번: " + empno);
	System.out.println("이름: " + ename);
	System.out.println("업무: " + job);
	System.out.println("월급: " + sal);
	System.out.println("부서번호: " + deptno);
	
	
	// 0. 필요한 변수 선언
	String driver	= "oracle.jdbc.driver.OracleDriver";
	String url		= "jdbc:oracle:thin:@127.0.0.1:1521:xe";
	String user		= "scott";
	String pass		= "tiger";
	
	// [1] 드라이버를 메모리 로딩
	Class.forName(driver);
	
	// [2] SQL 문장 (*****)			
	String sql	= "INSERT INTO emp(empno, ename, sal, job, deptno)  "
				+ "VALUES(?, ?, ?, ?, ?) ";
	
	// [3] 연결객체 얻어오기
	Connection con = DriverManager.getConnection(url, user, pass);
	
	// [4] 전송객체 얻어오기		
	PreparedStatement ps = con.prepareStatement(sql);
	// *****************
	// 미완성부분을 채우기
	ps.setInt(1, Integer.parseInt(empno));
	ps.setString(2, ename);
	ps.setInt(3, Integer.parseInt(sal));
	ps.setString(4, job);
	ps.setInt(5, Integer.parseInt(deptno));
	
	// [5] 전송			
	int result = ps.executeUpdate();
	
	// [6] 닫기
	ps.close();
	con.close();
%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	실제로 저장되었습니다
</body>
</html>