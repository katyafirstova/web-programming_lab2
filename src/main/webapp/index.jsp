<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="model.Table" %>
<%@ page import="java.util.List" %>

<%  List<Table> tableRows = (List<Table>) session.getAttribute("tableRows"); %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/button.css">
    <link rel="stylesheet" href="css/input.scss">
    <link rel="stylesheet" href="css/select.scss">

    <title>web-2</title>

</head>

<body>
<div class="wrapper">

    <header>
        <h1>
            Лабораторная работа №2 по веб-программированию
        </h1>
        <h2>
            Фирстова Екатерина Витальевна
            <br>
            Вариант 13129
        </h2>
    </header>

    <table>
        <tr>
            <td>
                <div id="visualization_container" class="column">
                    <canvas width="320px" height="320px" id="areas">
                    </canvas>
                </div>

                <form id="form" action="checkPoints" method="get" name="sendForm" class="send_form">

                    <h3>
                        X:
                    </h3>
                    <br>

                    <label class="required" for="selectX" data-required="Выберите X"></label>

                    <select class="selectX" name="x" id="selectX">
                        <option selected="" disabled="disabled" value="">X</option>
                        <option value="-4">-4</option>
                        <option value="-3">-3</option>
                        <option value="-2">-2</option>
                        <option value="-1">-1</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                    <div class="error" id="xError"></div>
                    <br>
                    <h3>
                        Y:
                    </h3>
                    <div class="form-control">
                        <label for="y"></label>
                        <input name="y" id="y" class="inputY"
                               placeholder="Введите значение от -5 до 3">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-exclamation-circle"></i>
                        <small>Error message</small>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <span class="yError" aria-live="polite"></span>
                        <div class="yError" id="yError"></div>

                        <br>
                    </div>

                    <h3>
                        R:
                    </h3>
                    <br><br><br><br>

                    <div class="form-control">
                        <label for="r"></label>
                        <input name="r" id="r" class="inputR"
                               placeholder="Введите значение от 2 до 5" onchange="changeR()">
                        <i class="fas fa-check-circle"></i>
                        <i class="fas fa-exclamation-circle"></i>
                        <small>Error message</small>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <span class="rError" aria-live="polite"></span>
                        <div class="rError" id="rError"></div>

                    </div>

                    <button type="submit" id="submit" class="btn" value="Submit">submit</button>
                </form>

                <div class="column result_table" id="result-table">
                    <table>
                        <tr>
                            <th>X</th>
                            <th>Y</th>
                            <th>R</th>
                            <th>Result</th>
                            <th>Current Time</th>
                            <th>Execution Time</th>
                        </tr>


                        <%
                            if (tableRows != null)
                                for (Table tableRow : tableRows) {
                        %>
                        <tr>
                            <td class="selectX"><%= tableRow.getX() %>
                            </td>
                            <td class="inputY"><%= tableRow.getY() %>
                            </td>
                            <td class="inputR"><%= tableRow.getR() %>
                            </td>
                            <td><%= tableRow.getResult() %>
                            </td>
                            <td><%= tableRow.getCurrentTime() %>
                            </td>
                            <td><%= tableRow.getExecutionTime()%>
                            </td>
                        </tr>
                        <%}%>

                    </table>
                </div>
            </td>
        </tr>

    </table>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="js/validator.js"></script>
    <script src="js/drawer.js"></script>
</div>
</body>
</html>




