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


    public static void main(String args[]) {
        int[] arr = new int[]{4, 6, 8, 2, 1};

        // int ans[]  = approachFirst(arr);

        int ans[]  = approachSecond(arr);
        System.out.println(Arrays.toString(ans));

    }
}