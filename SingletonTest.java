public class SingletonTest {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("First Message");
        logger2.log("Second Message");


        System.out.println("Logger1: " + logger1);
        System.out.println("Logger2: " + logger2);

        if (logger1 == logger2) {
            System.out.println("Only One Logger Instance Exists");
        } else {
            System.out.println( "Multiple Instances Exist");
        }
    }
}