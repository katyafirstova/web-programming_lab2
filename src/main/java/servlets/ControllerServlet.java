package servlets;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;


public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        if (request.getParameter("x") != null && request.getParameter("y") != null
                && request.getParameter("r") != null) {
            getServletContext().getRequestDispatcher("/areaCheck").forward(request, response);

        } else getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);

    }
}


