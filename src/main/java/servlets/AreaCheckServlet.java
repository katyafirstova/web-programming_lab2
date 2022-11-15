package servlets;

import model.Table;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.zip.DataFormatException;

import static java.lang.Math.sqrt;

@WebServlet(name = "AreaCheckServlet", value = "/AreaCheckServlet")
public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,
            IOException {

        try {
            HttpSession session = request.getSession();
            List<Table> resultTables = new ArrayList<Table>();
            session.getAttribute("resultTable");
            long startTime = System.nanoTime();
            String currentTime = LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"));

            int xVal = Integer.parseInt(request.getParameter("x").trim());
            int yVal = Integer.parseInt(request.getParameter("y").trim());
            int rVal = Integer.parseInt(request.getParameter("r").trim());
            String result;

            boolean isValid = checkIfValid(xVal, yVal, rVal);

            if (isValid) {
                result = (checkIfHit(xVal, yVal, rVal)) ? "да" : "нет";
                long endTime = System.nanoTime();
                String executionTime = (endTime - startTime) / 1000000 + "." + (endTime - startTime) % 1000000;
                ;
                Table resultTable = new Table(xVal, yVal, rVal, result, currentTime, executionTime);
                resultTables.add(resultTable);
                session.setAttribute("resultTable", resultTables);

            } else {
                request.setAttribute("error", "invalid data");
            }
            request.getRequestDispatcher("index.jsp").forward(request, response);

        } catch (NumberFormatException e) {
            request.setAttribute("error", "invalid data");
            request.getRequestDispatcher("index.jsp").forward(request, response);

        }

    }


    private boolean checkIfValid(int xVal, double yVal, double rVal) {
        return (checkX(xVal) & checkY(yVal) & checkR(rVal));
    }

    private boolean checkX(int xVal) {
        try {
            List<Integer> list = Arrays.asList(-4, -3, -2, -1, 0, 1, 2, 3, 4);
            return (list.contains(xVal));
        } catch (NumberFormatException e) {
            e.printStackTrace();
        }
        return false;
    }

    private boolean checkY(double yVal) {
        try {
            return (yVal >= -5 && yVal <= 3);
        } catch (NumberFormatException e) {
            e.printStackTrace();
        }
        return false;
    }

    private boolean checkR(double rVal) {
        try {
            return (rVal >= 2 && rVal <= 5);
        } catch (NumberFormatException e) {
            e.printStackTrace();
        }
        return false;
    }

    private boolean checkIfHit(int xVal, double yVal, double rVal) {
        return (checkRectangle(xVal, yVal, rVal) ||
                checkCircle(xVal, yVal, rVal) || checkTriangle(xVal, yVal, rVal));
    }

    private boolean checkTriangle(int xVal, double yVal, double rVal) {
        return (xVal >= 0 && yVal >= 0 && (rVal * rVal) >= (xVal * xVal + yVal * yVal));
    }

    private boolean checkCircle(int xVal, double yVal, double rVal) {
        return (xVal <= 0 && yVal <= 0 && (xVal * xVal + yVal * yVal) <= rVal * rVal);
    }

    private boolean checkRectangle(int xVal, double yVal, double rVal) {
        return (xVal <= 0 && yVal <= 0 && rVal <= 0 && xVal <= rVal / 2 && yVal <= rVal);
    }

}

