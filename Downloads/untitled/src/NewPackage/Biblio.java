package NewPackage;

import java.util.ArrayList;

public class Biblio {
    static ArrayList<Livre> livres = new ArrayList <>();
    static ArrayList <Membre> membres = new ArrayList <>();

    public static Livre rechercherLivreParISBN(int ISBN) {
        for (Livre livre : livres) {
            if (livre.getISBN() == ISBN) {
                System.out.println("Livre trouvé");
                return livre;
            }
        }
        System.out.println("Livre n'est pas trouvé");
        return null;
    }

    public static void main(String[] args) {

        Livre livre1 = new Livre("La boite à merveille", "Ahmed Sefrioui", 124354, true);
        Livre livre2 = new Livre("Le dernier jour d'un condamné", " Victor Hugo", 543367, true);

        Membre membre1 = new Membre("Mohamed", 1111);
        Membre membre2 = new Membre("ibrahim", 1564);

        livres.add(livre1);
        livres.add(livre2);

        membres.add(membre1);
        membres.add(membre2);

        membre1.emprunter(livre1);
        membre1.rendre(livre2);

        membre1.listeDeLivresEmprunté();
        membre2.listeDeLivresEmprunté();

        rechercherLivreParISBN(124354);
    }
}
