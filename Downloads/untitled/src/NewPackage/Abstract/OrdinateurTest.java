package NewPackage.Abstract;

public class OrdinateurTest {
    public static void main(String[] args) {
        // Créer un ordinateur de configuration standard
        Ordinateur ordinateur1 = new Ordinateur.OrdinateurBuilder()
                .tailleEcran("15 pouces")
                .processeur("Intel i7")
                .ram(16)
                .stockage("SSD")
                .carteGraphique("NVIDIA GTX 1650")
                .build();

        System.out.println("Ordinateur 1 : ");
        System.out.println("Ecran : " + ordinateur1.getTailleEcran());
        System.out.println("Processeur : " + ordinateur1.getProcesseur());
        System.out.println("RAM : " + ordinateur1.getRam() + " Go");
        System.out.println("Stockage : " + ordinateur1.getStockage());
        System.out.println("Carte graphique : " + ordinateur1.getCarteGraphique());

        // Créer un autre ordinateur avec une configuration différente
        Ordinateur ordinateur2 = new Ordinateur.OrdinateurBuilder()
                .tailleEcran("13 pouces")
                .stockage("HDD")
                .carteGraphique("Intégrée")
                .build();

        System.out.println("\nOrdinateur 2 : ");
        System.out.println("Ecran : " + ordinateur2.getTailleEcran());
        System.out.println("Processeur : " + ordinateur2.getProcesseur());
        System.out.println("RAM : " + ordinateur2.getRam() + " Go");
        System.out.println("Stockage : " + ordinateur2.getStockage());
        System.out.println("Carte graphique : " + ordinateur2.getCarteGraphique());
    }
}
