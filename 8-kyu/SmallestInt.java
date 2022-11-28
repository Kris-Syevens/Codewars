public class SmallestInt {

    public static int findSmallestInt(int[] args) {

        int smallInt = args[0];

        for (int x = 0; x < args.length; x++){
            if(smallInt >= args[x]) {
                smallInt = args[x];
            }
        }

        return smallInt;

    }

    public static void main(String[] args) {
        System.out.println(findSmallestInt(new int[] {1}));
        System.out.println(findSmallestInt(new int[] {1, 2, 3}));
        System.out.println(findSmallestInt(new int[] {3, 4}));
        System.out.println(findSmallestInt(new int[] {3, 4, 5, 10, 15, -1, -5, 150}));
    }

 }

//  import java.util.stream.IntStream;

// public class SmallestIntegerFinder {
//     public static int findSmallestInt(int[] args) {
//         return IntStream.of(args).min().getAsInt();
//     }
// }