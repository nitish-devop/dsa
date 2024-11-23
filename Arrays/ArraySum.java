package Arrays;

import java.util.Scanner;

public class ArraySum {
    public static int getArraySum(int[] arr) {
        int sum = 0;

        for (int item : arr) {
            sum += item;
        }

        return sum;
    }

    public static int[] takeArrayInput() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of array : ");

        int n = sc.nextInt();

        int[] arr = new int[n];

        for(int i = 0; i < n; i++) {
            System.out.print("Enter item for index " + (i+1) + " : ");
            arr[i] = sc.nextInt();
        }

        return arr;
    }

    public static void main(String[] args) {
        int arr[] = takeArrayInput();
        int sum = getArraySum(arr);

        System.out.println("Sum is " + sum);

    
    }
}
