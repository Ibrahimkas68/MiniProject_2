package com.example.MiniProject.Avion;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;
import java.util.Objects;
@Entity
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

    public Long getId_avion() {
        return id_avion;
    }

    public void setId_avion(Long id_avion) {
        this.id_avion = id_avion;
    }

    public String getType_avion() {
        return type_avion;
    }

    public void setType_avion(String type_avion) {
        this.type_avion = type_avion;
    }

    public int getCapacite() {
        return capacite;
    }

    public void setCapacite(int capacite) {
        this.capacite = capacite;
    }

    public int getAnnee_fab() {
        return annee_fab;
    }

    public void setAnnee_fab(int annee_fab) {
        this.annee_fab = annee_fab;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Avion avion = (Avion) o;
        return id_avion == avion.id_avion && capacite == avion.capacite && annee_fab == avion.annee_fab && Objects.equals(type_avion, avion.type_avion) && Objects.equals(model, avion.model);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id_avion, type_avion, capacite, annee_fab, model);
    }

    @Override
    public String toString() {
        return "Avion{" +
                "id_avion=" + id_avion +
                ", type_avion='" + type_avion + '\'' +
                ", capacite=" + capacite +
                ", annee_fab=" + annee_fab +
                ", model='" + model + '\'' +
                '}';
    }
}
