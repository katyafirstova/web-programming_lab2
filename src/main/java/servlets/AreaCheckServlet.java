package servlets;

import exceptions.IncorrectDataException;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import static java.lang.Math.sqrt;

@WebServlet(name = "AreaCheckServlet", value = "/AreaCheckServlet")
public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,
            IOException {

        long startTime = System.nanoTime();

        HttpSession session = request.getSession();


        String x = request.getParameter("x");
        String y = request.getParameter("y");
        String r = request.getParameter("r");

        double yVal, rVal;
        int xVal;

        x = x.trim();
        y = y.trim();
        r = r.trim();

        xVal = Integer.parseInt(x);
        yVal = Double.parseDouble(y);
        rVal = Double.parseDouble(r);

        boolean isValid = checkIfValid(xVal, yVal, rVal);

        if (isValid) {
             checkIfHit(xVal, yVal, rVal);
        }

        session.setAttribute("x", xVal);
        session.setAttribute("y", yVal);
        session.setAttribute("r", rVal);

        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);

    }

    private boolean checkIfValid(int xVal, double yVal, double rVal) {
        return (checkX(xVal) & checkY(yVal) & checkR(rVal));
    }

    private boolean checkX(int xVal) {
        List<Integer> list = Arrays.asList(-4, -3, -2, -1, 0, 1, 2, 3, 4);
        if (list.contains(xVal)) return true;
        else throw new IncorrectDataException("некорректное значение x");
    }

    private boolean checkY(double yVal) {
        if (yVal >= -5 && yVal <= 3) return true;
        else throw new IncorrectDataException("некорректное значение y");

    }

    private boolean checkR(double rVal) {
        if (rVal >= 2 && rVal <= 5) return true;
        else throw new IncorrectDataException("некорректное значение r");
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

