package com.example.MiniProject.Equipage;

import com.example.MiniProject.User.Role;
import com.example.MiniProject.User.UserEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Equipage extends UserEntity {
    private String fonction;
    private int num_licence;
    private String nationalite;

    public Equipage(Long id, String userType, String password, String email, String nom_complet, String fonction, int num_licence, String nationalite) {
        super(id, Role.EQUIPAGE, password, email, nom_complet);
        this.fonction = fonction;
        this.num_licence = num_licence;
        this.nationalite = nationalite;
    }

    public Equipage(String userType, String password, String email, String nom_complet, String fonction, int num_licence, String nationalite) {
        super(null,Role.EQUIPAGE, password, email, nom_complet);
        this.fonction = fonction;
        this.num_licence = num_licence;
        this.nationalite = nationalite;
    }


    public Equipage() {
    }
}
