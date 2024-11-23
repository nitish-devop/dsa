package Arrays;

public class FindLargestElement {
    public int getLargestItem(int[] arr) {
        int largest = arr[0];

        for (int item : arr) {
            if(item > largest) {
                largest = item;
            }
        }
        return largest;
    }
}
