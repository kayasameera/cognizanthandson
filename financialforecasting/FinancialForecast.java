public class FinancialForecast {

    // Recursive function to calculate future value
    public static double forecast(double amount, double growthRate, int years) {

        // Base Case
        if (years == 0) {
            return amount;
        }

        // Recursive Case
        double nextAmount = amount * (1 + growthRate);

        return forecast(nextAmount, growthRate, years - 1);
    }

    public static void main(String[] args) {

        double initialAmount = 10000;
        double growthRate = 0.10;
        int years = 5;

        double futureValue = forecast(initialAmount, growthRate, years);

        System.out.println("Initial Amount : " + initialAmount);
        System.out.println("Growth Rate    : " + (growthRate * 100) + "%");
        System.out.println("Years          : " + years);
        System.out.println("Future Value   : " + futureValue);
    }
}