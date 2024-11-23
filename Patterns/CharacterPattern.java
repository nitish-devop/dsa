package Patterns;

public class CharacterPattern {
    private int size;

    public CharacterPattern(int size) {
        this.size = size;
    }

    /**
        A B C D
        A B C D
        A B C D
        A B C D
     **/
    public void patternType1() {
        for(int i = 1; i <= this.size; i++) {
            for(int j = 1; j <= this.size; j++) {
                char c = (char) ('A' + j - 1);
                System.out.print(c +" ");
            }
            System.out.println();
        }
        System.out.println();
    }
}
