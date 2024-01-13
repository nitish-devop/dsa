import java.util.Arrays;

public class Implementation {

    // most basic and brute force way
    /*
     * Idea is to traverse each element and calculate prodcut of entire array except itself
     * Time Complexity : O(n*n)
     * Space Complexity O(1)
     */
    public static int[] approachFirst(int[] nums) {
        
        int[] ans  = new int[nums.length];
        for(int i = 0; i < nums.length; i++) {
            int product = 1;
            for(int j = 0; j < nums.length; j++) {
                // ignore current element index
                if(i != j) {
                    product *= nums[j];
                }
            }
            ans[i] = product;
        }

        return ans;
    }

        // basic and slightly better way
    /*
     * Compte product of all array and keep it in a variable
     * Traverse entire array and devide product by current element and store in ans array
     * Time Complexity : O(n)
     * Space Complexity O(1)
     */
    public static int[] approachSecond(int[] nums) {
        
        int[] ans  = new int[nums.length];

        int product = 1;
        for(int num : nums) { product *= num; }

        for(int i = 0; i < nums.length; i++) {
            ans[i] = product / nums[i];
        }
        return ans;
    }


    // leetcode version : Don't use division operaion and try to solve in O(n) time
    /*
     * Idea is to use two array left and right.
     * Left array will have product of all elements at its left.
     * Right array will have product of all elements at its right
     * Compute the answer array by mulitplying ith index of both array
     * Time Complexity : O(n)
     * Space Complexity O(n)
     */

     public static int[] approachThird(int[] nums) {
        
        int[] ans  = new int[nums.length];

        int[] left = new int[nums.length];
        left[0] = 1;
        for(int i = 1; i < nums.length; i++) left[i] = left[i-1] * nums[i-1];

        int[] right = new int[nums.length];
        right[nums.length - 1] = 1;
        for(int i = nums.length - 2; i >= 0; i--) right[i] = right[i+1] * nums[i + 1];

        System.out.println(Arrays.toString(left));
        System.out.println(Arrays.toString(right));
        for(int i = 0; i < nums.length; i++) {
            ans[i] = left[i] * right[i];
        }
        return ans;
    }
    public static void main(String args[]) {
        int[] arr = new int[]{4, 6, 8, 2, 1};

        // int ans[]  = approachFirst(arr);

        // int ans[]  = approachSecond(arr);

        int ans[] = approachThird(arr);
        System.out.println(Arrays.toString(ans));

    }
}