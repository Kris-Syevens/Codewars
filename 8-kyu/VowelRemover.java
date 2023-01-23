// DESCRIPTION:
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


public class VowelRemover {

    public static String shortcut (String str) {
        String finalStr = "";
        String[] arr = str.split("");

        for (int i = 0; i < arr.length; i++) {

            switch (arr[i]) {
                case "a":
                    continue;
                case "e":
                    continue;
                case "i":
                    continue;
                case "o":
                    continue;
                case "u":
                    continue;            
                default:
                    finalStr += arr[i];
                    break;
            }
            
        }

        return finalStr;
    
    }

    public static void main(String[] args) {

        System.out.println(shortcut("hello")); 
        System.out.println(shortcut("codewars"));
        System.out.println(shortcut("goodbye"));
        System.out.println(shortcut("HELLO"));
    
    }

}