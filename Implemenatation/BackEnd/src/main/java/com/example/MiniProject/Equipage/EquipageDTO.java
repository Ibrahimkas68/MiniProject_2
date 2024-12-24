package com.example.MiniProject.Equipage;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EquipageDTO {
    // Getters and Setters
    private String password;
    private String email;
    private String nom_complet;
    private String fonction;
    private int num_licence;
    private String nationalite;

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setNomComplet(String nom_complet) {
        this.nom_complet = nom_complet;
    }

    public void setFonction(String fonction) {
        this.fonction = fonction;
    }

    public void setNumLicence(int num_licence) {
        this.num_licence = num_licence;
    }

    public void setNationalite(String nationalite) {
        this.nationalite = nationalite;
    }
}