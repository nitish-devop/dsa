
public class Implementation {
    // most basic and brute force way
    /*
     * Idea is to keep each element count in array of n+1 size
     * Return that index where freq is less than 1
     * Time Complexity : O(n)
     * Space Complexity O(1)
     */
    public static int approachFirst(int[] nums) {
        
        int[] freq  = new int[nums.length + 1];

        // count frequency
        for(int num : nums) {
            if(num > 0) freq[num]++;
        }
        
        for(int i = 1; i < freq.length; i++) {
            if(freq[i] < 1) return i;
        }

        return nums.length + 1;
    }

    public static void main(String[] args) {
        int[] arr = new int[] {1,2,0};
        int ans = approachFirst(arr);
        System.out.println(ans);
    }
}
