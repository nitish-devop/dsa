package Patterns;

public class TriangularPattern {
    private int size;

    public TriangularPattern(int size) {
        this.size = size;
    }

    /**
        1 
        1 2 
        1 3 3 
        1 2 3 4
     **/
    public void patternType1() {
        for(int i = 1; i <= this.size; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print(j +" ");
            }
            System.out.println();
        }
        System.out.println();
    }

     /**
        1 
        2 3
        4 5 6 
        7 8 9 10
     **/
    public void patternType2() {
        int counter = 1;
        for(int i = 1; i <= this.size; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print(counter +" ");
                counter++;
            }
            System.out.println();
        }
        System.out.println();
    }

    /**
        1
        2 3 
        3 4 5
        4 5 6 7
     **/
    public void patternType3() {
        for(int i = 1; i <= this.size; i++) {
            for(int j = 0; j < i; j++) {
                System.out.print((i + j) +" ");
            }
            System.out.println();
        }

        System.out.println();
    }

}
