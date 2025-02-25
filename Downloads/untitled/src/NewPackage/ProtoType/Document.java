package NewPackage.ProtoType;

public class Document implements Prototype{
    String Title ;
    String Content ;

    public Document(String title, String content) {
        Title = title;
        Content = content;
    }

    @Override
    public Prototype clone() {
        return new Document(this.Title,this.Content);

    }

    @Override
    public String toString() {
        return "Document{" +
                "Title='" + Title + '\'' +
                ", Content='" + Content + '\'' +
                '}';
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getContent() {
        return Content;
    }

    public void setContent(String content) {
        Content = content;
    }
}
