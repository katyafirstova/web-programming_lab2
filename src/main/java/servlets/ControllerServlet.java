package servlets;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "ControllerServlet", value = "/ControllerServlet")
public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        if (request.getParameter("x") != null && request.getParameter("y") != null
                && request.getParameter("r") != null) {
            getServletContext().getRequestDispatcher("AreaCheckServlet").forward(request, response);
        } else if (request.getParameter("x") == null || request.getParameter("y") == null
                && request.getParameter("r") == null) {
            getServletContext().getRequestDispatcher("/error_table.jsp").forward(request, response);

        } else getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);

    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }
}
