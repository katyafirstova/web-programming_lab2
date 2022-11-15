<%@ page contentType="text/html;charset=UTF-8"%>
<html>
<head>
  <title>ERROR</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
<br>
<br>
<p align="left">wrong data</p>
<br>
<p align="left"> <%= request.getAttribute("error_message") %></p>
<br>
<div class="form">
  <form method="get" action="index.jsp">
    <input type="submit" value='Go back' >
  </form>
</div>
</body>
</html>