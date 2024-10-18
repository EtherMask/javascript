<%@ page language="java" 
	contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<!-- 자바 패키지 불러오기 -->
<%@ page import="java.sql.*" %>

<%
	//입력값들 문자열로 받기
	String name		= request.getParameter("name");
	String email	= request.getParameter("email"); 
	String title	= request.getParameter("subject");
	String area		= request.getParameter("message");
	
	
// 0. 필요한 변수 선언
	String driver	= "oracle.jdbc.driver.OracleDriver";
	String url		= "jdbc:oracle:thin:@127.0.0.1:1521:xe";
	String user		= "giyoung1";
	String pass		= "yoon";

	// [1] 드라이버를 메모리 로딩
	Class.forName(driver);
		
	
	// [2] SQL 문장 (*****)
	String sql 	= "INSERT INTO MEMBERSHIP(name, email, title, area) "
				+ "VALUES(?, ?, ?, ?) ";

	// [3] 연결객체 얻어오기
	Connection con = DriverManager.getConnection(url, user, pass);
		
	// [4] 전송객체 얻어오기		
	PreparedStatement ps = con.prepareStatement(sql);
	ps.setString(1, name);
	ps.setString(2, email);
	ps.setString(3, title);
	ps.setString(4, area);

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
<title>전송결과창</title>
</head>
<body>
	정상적으로 저장되었습니다
</body>
</html>