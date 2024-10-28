package com.example.MiniProject.Aeorport;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Objects;

public class Aero {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_aeroport;
    private String aeroport_IATA;
    private String nom_aeroport;
    private String ville;
    private String pays;
    private int capacite;

    public Aero(Long id_aeroport, String aeroport_IATA, String nom_aeroport, String ville, String pays, int capacite) {
        this.id_aeroport = id_aeroport;
        this.aeroport_IATA = aeroport_IATA;
        this.nom_aeroport = nom_aeroport;
        this.ville = ville;
        this.pays = pays;
        this.capacite = capacite;
    }

    public Long getId_aeroport() {
        return id_aeroport;
    }

    public void setId_aeroport(Long id_aeroport) {
        this.id_aeroport = id_aeroport;
    }

    public String getAeroport_IATA() {
        return aeroport_IATA;
    }

    public void setAeroport_IATA(String aeroport_IATA) {
        this.aeroport_IATA = aeroport_IATA;
    }

    public String getNom_aeroport() {
        return nom_aeroport;
    }

    public void setNom_aeroport(String nom_aeroport) {
        this.nom_aeroport = nom_aeroport;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getPays() {
        return pays;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }

    public int getCapacite() {
        return capacite;
    }

    public void setCapacite(int capacite) {
        this.capacite = capacite;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Aero aero = (Aero) o;
        return id_aeroport == aero.id_aeroport && capacite == aero.capacite && Objects.equals(aeroport_IATA, aero.aeroport_IATA) && Objects.equals(nom_aeroport, aero.nom_aeroport) && Objects.equals(ville, aero.ville) && Objects.equals(pays, aero.pays);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id_aeroport, aeroport_IATA, nom_aeroport, ville, pays, capacite);
    }

    @Override
    public String toString() {
        return "Aero{" +
                "id_aeroport=" + id_aeroport +
                ", aeroport_IATA='" + aeroport_IATA + '\'' +
                ", nom_aeroport='" + nom_aeroport + '\'' +
                ", ville='" + ville + '\'' +
                ", pays='" + pays + '\'' +
                ", capacite=" + capacite +
                '}';
    }

}
