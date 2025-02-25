package NewPackage;

import java.util.ArrayList;

public class Membre implements ItemEmpruntable {
    protected String nom ;
    protected int id ;
    protected ArrayList<Livre> livresEmprunté ;

    public Membre(String nom, int id ) {
        this.nom = nom ;
        this.id = id ;
        this.livresEmprunté = new ArrayList<>();;
    }

    @Override
    public void emprunter(Livre livre) {
        if (livre.isDisponible()) {
            System.out.println("Le livre'"+livre.getTitle() +"' a été emprunté avec succès !");
            livre.setDisponible(false) ;
            livresEmprunté.add(livre);
        }else {
            System.out.println("Le livre'"+livre.getTitle() +"' est déjà emprunté !");
        }
    }

    @Override
    public void rendre(Livre livre) {
        if (livre.isDisponible() == false) {
            System.out.println("Le livre'"+livre.getTitle() +"' est retourné !");
            livre.setDisponible(true) ;
        }else {
            System.out.println("Le livre'"+livre.getTitle() +"' est déjà retourné !");
        }

    }

    public void listeDeLivresEmprunté() {
        if(livresEmprunté.isEmpty()) {
            System.out.println("Le membre "+nom+" n'a emprunté aucun livre.");
        }else {
            System.out.println("Le membre "+nom+" a emprunté les livres suivants : ");
            for(Livre livre : livresEmprunté) {
                System.out.println("- "+livre.getTitle());
            }
        }

    }
}
