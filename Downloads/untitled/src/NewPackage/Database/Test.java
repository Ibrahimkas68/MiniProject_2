package NewPackage.Database;

public class Test {
    public static void main(String[] args) {
        DatabaseConnectionManager connection1 = DatabaseConnectionManager.getInstance();
        connection1.openConnection();

        DatabaseConnectionManager connection2 = DatabaseConnectionManager.getInstance();
        connection2.openConnection();

        DatabaseConnectionManager connection3 = DatabaseConnectionManager.getInstance();
        connection3.openConnection();
        System.out.println(connection1.hashCode());
        System.out.println(connection2.hashCode());
        if (connection1.equals(connection2)) {
            System.out.println("Les deux instances sont identiques, il n'y a qu'une seule instance du gestionnaire de connexion.");
        } else {
            System.out.println("Les instances sont différentes, il y a un problème dans l'implémentation Singleton.");
        }


        connection1.closeConnection();
        connection2.closeConnection();

    }
}
