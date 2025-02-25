package NewPackage;

public class Livre {
    private String title;
    private String author;
    private int ISBN;
    private boolean disponible ;
    public Livre(String title, String author, int ISBN, boolean disponible) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.disponible = disponible;

    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getISBN() {
        return ISBN;
    }

    public void setISBN(int ISBN) {
        this.ISBN = ISBN;
    }

    public boolean isDisponible() {
        return disponible;
    }

    public void setDisponible(boolean disponible) {
        this.disponible = disponible;
    }
}
