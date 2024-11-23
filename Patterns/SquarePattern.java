package Patterns;

public class SquarePattern {
    private int size;

    public SquarePattern(int size) {
        this.size = size;
    }

    /**
        1 1 1 1
        2 2 2 2
        3 3 3 3
        4 4 4 4
     **/
    public void patternType1() {
        for(int i = 1; i <= this.size; i++) {
            for(int j = 1; j <= this.size; j++) {
                System.out.print(i +" ");
            }
            System.out.println();
        }
        System.out.println();
    }

     /**
        1 2 3 4
        1 2 3 4
        1 2 3 4
        1 2 3 4
     **/
    public void patternType2() {
        for(int i = 1; i <= this.size; i++) {
            for(int j = 1; j <= this.size; j++) {
                System.out.print(j +" ");
            }
            System.out.println();
        }
        System.out.println();
    }

    /**
        4 3 2 1
        4 3 2 1
        4 3 2 1
        4 3 2 1
     **/
    public void patternType3() {
        for(int i = 1; i <= this.size; i++) {
            for(int j = this.size; j >= 1; j--) {
                System.out.print(j +" ");
            }
            System.out.println();
        }

        System.out.println();
    }
}
