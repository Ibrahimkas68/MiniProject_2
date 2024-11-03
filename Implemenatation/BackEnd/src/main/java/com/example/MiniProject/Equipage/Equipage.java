package com.example.MiniProject.Equipage;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Objects;
@Entity
@Data
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)

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

    public Equipage() {

    }
}
