package NewPackage.ProtoType;

public class TestPrototype {
    public static void main(String[] args) {
            // Créer un prototype
            Document originalDoc = new Document("Titre Principal", "Contenu de base");

            // Cloner l'objet prototype
            Document clonedDoc = (Document) originalDoc.clone();

            // Afficher les deux objets
            System.out.println("Original: " + originalDoc);
            System.out.println("Clone: " + clonedDoc);

            // Modifiez le clone
            clonedDoc.Content = "Contenu modifié";

            // Affichez les objets après modification
            System.out.println("Après modification:");
            System.out.println("Original: " + originalDoc);
            System.out.println("Clone: " + clonedDoc);

    }
}
