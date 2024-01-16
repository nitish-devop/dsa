// find minimum element which is greater than or equal to the target element
// Problem Link https://leetcode.com/problems/search-insert-position/description/
public class Implementaion {
    public static int findCeiling(int[] arr, int target) {
        int start = 0;
        int end  = arr.length;

        while(start <= end) {
            int mid = start + (end - start)/2;

            if(arr[mid] == target) return mid;
            else if(arr[mid] < target) {
                start = mid + 1;
            }
            else {
                end = mid-1;
            }
        }
        return start;
    }
}