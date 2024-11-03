package com.example.MiniProject.Avion;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;
import java.util.Objects;
@Entity
@Data
public class Avion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_avion;
    private String type_avion;
    private int capacite;
    private int annee_fab;
    private String model;

    public Avion(Long id_avion, String type_avion, int capacite, int annee_fab, String model) {
        this.id_avion = id_avion;
        this.type_avion = type_avion;
        this.capacite = capacite;
        this.annee_fab = annee_fab;
        this.model = model;
    }

    public Avion(String type_avion, int capacite, int annee_fab, String model) {
        this.type_avion = type_avion;
        this.capacite = capacite;
        this.annee_fab = annee_fab;
        this.model = model;
    }

    public Avion() {

    }

}
