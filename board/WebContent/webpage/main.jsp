<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="kr">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <style>
    /* Remove the navbar's default margin-bottom and rounded borders */ 
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }
    
    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 450px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      height: 100%;
    }
    
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:auto;} 
    }
    .log{
    	background: #ffcc00;
    }
    #ilogo{
    	width: 100px;
    	height: 30px;
    }
  </style>
  
  <script type="text/javascript">
  $(function() {
	$(".dropdown").on("click",function(){
		menu = $(".dropdown-toggle", this).text();// 주메뉴
		submenu = $(".dropdown-menu li a", this).text(); // 부메뉴
		console.log(menu+","+submenu);
		
		// map()을 이용해서 부메뉴(submenu)를 분리한다.
		// sub2 배열로 생성한다.
		sub2 = $(".dropdown-menu li a", this).map(function() {
			return $(this).text();
		})
		console.log(sub2);
		code = '<div class="list-group">';
		code +=	'<a href="#" class="list-group-item disabled active">' + menu + '</a>';
		$.each(sub2, function(i, v) {
			code += '<a href="#" class="list-group-item">' + v + '</a>';
		})
		code += '</div>';
		$(".sidenav1").html(code);		
	});
});
  </script>
</head>
<body>
	<jsp:include page="header.jsp"></jsp:include>
	<jsp:include page="content.jsp"></jsp:include>
	<jsp:include page="footer.jsp"></jsp:include>

</body>
</html>
