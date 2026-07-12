public class Main {

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Mobile", "Electronics"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")

        };

        int searchId = 104;

        System.out.println("Linear Search:");

        Product result1 = SearchAlgorithms.linearSearch(products, searchId);

        if (result1 != null)
            result1.display();
        else
            System.out.println("Product Not Found");

        System.out.println();

        System.out.println("Binary Search:");

        Product result2 = SearchAlgorithms.binarySearch(products, searchId);

        if (result2 != null)
            result2.display();
        else
            System.out.println("Product Not Found");

    }

}
