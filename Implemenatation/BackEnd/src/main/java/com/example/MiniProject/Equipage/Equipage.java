package com.example.MiniProject.Equipage;

import com.example.MiniProject.User.UserEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
@Entity
@Data
@Table(name = "equipage")// Value for this entity type in the discriminator column

public class Equipage extends UserEntity {
    private String fonction;
    private int num_licence;
    private String nationalite;

    public Equipage(Long id, String userType, String password, String email, String nom_complet, String fonction, int num_licence, String nationalite) {
        super(id, userType, password, email, nom_complet);
        this.fonction = fonction;
        this.num_licence = num_licence;
        this.nationalite = nationalite;
    }

    public Equipage(String userType, String password, String email, String nom_complet, String fonction, int num_licence, String nationalite) {
        super(userType, password, email, nom_complet);
        this.fonction = fonction;
        this.num_licence = num_licence;
        this.nationalite = nationalite;
    }


    public Equipage() {
    }
}
