package com.example.MiniProject.Equipage;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Objects;

public class Equipage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom_complet;
    private String fonction;
    private int num_licence;
    private String nationalite;

    public Equipage(Long id, String nom_complet, String fonction, int num_licence, String nationalite) {
        this.id = id;
        this.nom_complet = nom_complet;
        this.fonction = fonction;
        this.num_licence = num_licence;
        this.nationalite = nationalite;
    }

    public Equipage(String nom_complet, String fonction, int num_licence, String nationalite) {
        this.nom_complet = nom_complet;
        this.fonction = fonction;
        this.num_licence = num_licence;
        this.nationalite = nationalite;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom_complet() {
        return nom_complet;
    }

    public void setNom_complet(String nom_complet) {
        this.nom_complet = nom_complet;
    }

    public String getFonction() {
        return fonction;
    }

    public void setFonction(String fonction) {
        this.fonction = fonction;
    }

    public int getNum_licence() {
        return num_licence;
    }

    public void setNum_licence(int num_licence) {
        this.num_licence = num_licence;
    }

    public String getNationalite() {
        return nationalite;
    }

    public void setNationalite(String nationalite) {
        this.nationalite = nationalite;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Equipage equipage = (Equipage) o;
        return id == equipage.id && num_licence == equipage.num_licence && Objects.equals(nom_complet, equipage.nom_complet) && Objects.equals(fonction, equipage.fonction) && Objects.equals(nationalite, equipage.nationalite);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nom_complet, fonction, num_licence, nationalite);
    }

    @Override
    public String toString() {
        return "Equipage{" +
                "id=" + id +
                ", nom_complet='" + nom_complet + '\'' +
                ", fonction='" + fonction + '\'' +
                ", num_licence=" + num_licence +
                ", nationalite='" + nationalite + '\'' +
                '}';
    }
}
