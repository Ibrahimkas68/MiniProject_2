package com.example.MiniProject.Equipage;

import com.example.MiniProject.User.UserEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Objects;
@Entity
@Data
@Table(name = "equipage")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Equipage extends UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String fonction;
    private int num_licence;
    private String nationalite;

    public Equipage(Long id, String password, String email, String nomComplet, String fonction, int num_licence, String nationalite) {
        super(id, password, email, nomComplet);
        this.fonction = fonction;
        this.num_licence = num_licence;
        this.nationalite = nationalite;
    }

    public Equipage(String password, String email, String nomComplet, String fonction, int num_licence, String nationalite) {
        super(password, email, nomComplet);
        this.fonction = fonction;
        this.num_licence = num_licence;
        this.nationalite = nationalite;
    }

    public Equipage() {
    }
}
