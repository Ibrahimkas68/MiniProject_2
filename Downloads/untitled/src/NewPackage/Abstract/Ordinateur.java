package NewPackage.Abstract;

public class Ordinateur {
    private String tailleEcran;
    private String processeur;
    private int ram;
    private String stockage;
    private String carteGraphique;

    private Ordinateur(OrdinateurBuilder builder) {
        this.tailleEcran = builder.tailleEcran;
        this.processeur = builder.processeur;
        this.ram = builder.ram;
        this.stockage = builder.stockage;
        this.carteGraphique = builder.carteGraphique;
    }

    public String getTailleEcran() {
        return tailleEcran;
    }

    public String getProcesseur() {
        return processeur;
    }

    public int getRam() {
        return ram;
    }

    public String getStockage() {
        return stockage;
    }

    public String getCarteGraphique() {
        return carteGraphique;
    }

    public static class OrdinateurBuilder {
        private String tailleEcran;
        private String processeur;
        private int ram;
        private String stockage;
        private String carteGraphique;

        public OrdinateurBuilder tailleEcran(String tailleEcran) {
            this.tailleEcran = tailleEcran;
            return this;
        }

        public OrdinateurBuilder processeur(String processeur) {
            this.processeur = processeur;
            return this;
        }

        public OrdinateurBuilder ram(int ram) {
            this.ram = ram;
            return this;
        }

        public OrdinateurBuilder stockage(String stockage) {
            this.stockage = stockage;
            return this;
        }

        public OrdinateurBuilder carteGraphique(String carteGraphique) {
            this.carteGraphique = carteGraphique;
            return this;
        }

        public Ordinateur build() {
            return new Ordinateur(this);
        }
    }
}
