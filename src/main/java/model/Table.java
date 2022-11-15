package model;

public class Table {
    private int x;
    private double y;
    private double r;
    private String result;
    private String currentTime;
    private String executionTime;


    public Table(int x, double y, double r, String result, String currentTime, String executionTime) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
        this.currentTime = currentTime;
        this.executionTime = executionTime;
    }


    public int getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public String getResult() {
        return result;
    }

    public String getCurrentTime() {
        return currentTime;
    }

    public String getExecutionTime() {
        return executionTime;
    }
}

