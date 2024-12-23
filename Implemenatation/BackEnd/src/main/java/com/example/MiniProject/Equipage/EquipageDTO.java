package com.example.MiniProject.Equipage;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EquipageDTO {
    // Getters and Setters
    private String password;
    private String email;
    private String nomComplet;
    private String fonction;
    private int numLicence;
    private String nationalite;

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setNomComplet(String nomComplet) {
        this.nomComplet = nomComplet;
    }

    public void setFonction(String fonction) {
        this.fonction = fonction;
    }

    public void setNumLicence(int numLicence) {
        this.numLicence = numLicence;
    }

    public void setNationalite(String nationalite) {
        this.nationalite = nationalite;
    }
}
