<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./styles/style.css">
  <link rel="stylesheet" href="./styles/button.css">
  <link rel="stylesheet" href="./styles/input.css">
  <link rel="stylesheet" href="./styles/select.css">

  <title>web-1</title>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>

</head>

<body>
<header>
  <h1 align="center">
    Лабораторная работа №1 по веб-программированию
  </h1>
  <h2 align="right">
    Фирстова Екатерина Витальевна
    <br>
    Вариант 14212
  </h2>
</header>

<table>
  <tr>
    <td>
      <form id="form" action="check.php" method="get">
        <h3>
          X:
        </h3>
        <br><br>
        <label class="required" data-required="Выберите X"></label>
        <input type="button" name="x" class="button1" value="-5">
        <input type="button" name="x" class="button2" value="-4">
        <input type="button" name="x" class="button3" value="-3">
        <br>
        <input type="button" name="x" class="button1" value="-2">
        <input type="button" name="x" class="button2" value="-1">
        <input type="button" name="x" class="button3" value="0">
        <br>
        <input type="button" name="x" class="button1" value="1">
        <input type="button" name="x" class="button2" value="2">
        <input type="button" name="x" class="button3" value="3">
        <div class="error" id="xError"></div>
        <figure>
          <img src="./img/img.png" alt="img">
        </figure>
        <h3>
          Y:
        </h3>
        <div class="form-control">
          <label for="y"></label>
          <input name="y" id="y" min="-3" max="5" class="inputY"
                 placeholder="Введите значение от -3 до 5">
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
          <span class="highlight"></span>
          <span class="bar"></span>
          <span class="yError" aria-live="polite"></span>
          <div class="yError" id="yError"></div>

          <br><br><br><br><br>
        </div>

        <h3>
          R:
        </h3>

        <label class="required" for="select" data-required="Выберите R"></label>
        <select class="selectR" name="select" id="select">
          <option selected="" name="r" disabled="disabled" value="">R</option>
          <option value="1">1</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="2.5">2.5</option>
          <option value="3">3</option>
        </select>
        <input type="submit" id="submit" class="btn" value="Submit">
        <div id="response"></div>


      </form>
      <script src="validation.js"></script>
    </td>
  </tr>


  <tr id="tr-result">
    <td>
      <table id="result-table">
        <thead>
        <tr>
          <th scope="col">XYR</th>
          <th scope="col">Result</th>
          <th scope="col">Current Time</th>
          <th scope="col">Computation Time</th>
        </tr>
        </thead>
        <tbody id="results_table_body">

        <?php
                session_start();
                if (isset($_SESSION['results'])) {
                    foreach ($_SESSION['results'] as $result) { ?>
        <tr>
          <th><?php echo $result[0] ?></th>
          <th><?php echo $result[1] ?></th>
          <th><?php echo $result[2] ?></th>
          <th><?php echo $result[3] ?></th>
        </tr>
        <?php }
                } ?>

      </table>
    </td>
  </tr>
</table>
</body>
</html>