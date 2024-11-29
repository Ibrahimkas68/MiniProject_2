package com.example.MiniProject.Aeorport;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Objects;

@Entity
@Data
@Table(name = "aeroport")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
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

    public Aero() {

    }
}
