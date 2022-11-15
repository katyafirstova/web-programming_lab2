<%@ page contentType="text/html;charset=UTF-8" %>
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
            <form id="form" method="get">

                <svg xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="150" x2="300" y2="150" stroke="#000720"></line>
                    <line x1="150" y1="0" x2="150" y2="300" stroke="#000720"></line>
                    <line x1="270" y1="148" x2="270" y2="152" stroke="#000720"></line>
                    <text x="265" y="140">R</text>
                    <text x="200" y="140">R/2</text>
                    <text x="75" y="140">-R/2</text>
                    <text x="20" y="140">-R</text>
                    <text x="156" y="35">R</text>
                    <text x="156" y="95">R/2</text>
                    <text x="156" y="215">-R/2</text>
                    <text x="156" y="275">-R</text>
                    <polygon points="300,150 295,155 295, 145" fill="#000720" stroke="#000720"></polygon>
                    <polygon points="150,0 145,5 155,5" fill="#000720" stroke="#000720"></polygon>
                    <rect x="150" y="150" width="120" height="60" fill-opacity="0.4" stroke="navy" fill="blue"></rect>
                    <polygon points="150,150 90,150 150,90" fill-opacity="0.4" stroke="navy" fill="blue"></polygon>
                    <path d="M150 150 L 270 150 C 270 80 220 30 150 30 L Z" fill-opacity="0.4" stroke="navy"
                          fill="blue"></path>
                </svg>

                <h3>
                    X:
                </h3>
                <br>

                <label class="required" for="selectX" data-required="Выберите X"></label>
                <select class="selectX" name="selectX" id="selectX">
                    <option selected="" name="x" disabled="disabled" value="">X</option>
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
                    <input name="y" id="y" min="-3" max="5" class="inputY"
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
                    <input name="r" id="r" min="2" max="5" class="inputR"
                           placeholder="Введите значение от 2 до 5">
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <span class="rError" aria-live="polite"></span>
                    <div class="rError" id="rError"></div>

                    <input type="submit" id="submit" class="btn" value="Submit">
                    <div id="response"></div>
                </div>


            </form>
        </td>
    </tr>

</table>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="js/validator.js"></script>
<script src="js/drawer.js"></script>

</body>
</html>