import java.util.Arrays;

// DESCRIPTION:
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

public class RemoveLastZero {


     public static int noBoringZeros(int num) {
        
        if (num == 0) return 0;         
        
        // while (num % 10 == 0) {
        //     num /= 10;
        // }
        
        // return num;

         
        String str = Integer.toString(num);
        str = str.replaceAll("0*$", "");
        return Integer.parseInt(str);
    }

    

    public static void main(String[] args) {
        
        System.out.println(noBoringZeros(1450));
        System.out.println(noBoringZeros(960000));
        System.out.println(noBoringZeros(1050));
        System.out.println(noBoringZeros(-1050));
        System.out.println(noBoringZeros(0));

    }


}