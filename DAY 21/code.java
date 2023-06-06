import java.util.*;
import java.math.*;

class Main{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Input the temp in fahrenheit: ");
        double fah = sc.nextDouble();
        
        double cel = (5*(fah-32.0))/9.0;
        System.out.println(fah + " degree fahrenheit is equal to " + cel + "in celsius");
    }
}