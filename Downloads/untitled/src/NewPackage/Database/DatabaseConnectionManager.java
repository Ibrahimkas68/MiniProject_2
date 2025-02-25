package NewPackage.Database;

public class DatabaseConnectionManager {
    private static DatabaseConnectionManager  instance;
    private DatabaseConnectionManager() {

    }
    public static DatabaseConnectionManager getInstance(){
        if(instance == null){
            instance = new DatabaseConnectionManager();
        }
        return instance;

    }
    public void openConnection(){
        System.out.println("Connection successful to the database...");
    }
    public void closeConnection(){
        System.out.println("Connection closed   to the database...");
    }

}
