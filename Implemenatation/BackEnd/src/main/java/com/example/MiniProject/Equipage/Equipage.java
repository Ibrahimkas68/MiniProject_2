package com.example.MiniProject.Equipage;

import com.example.MiniProject.User.UserEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Objects;
@Entity
@Data
@DiscriminatorValue("EQUIPAGE")
public class Equipage extends UserEntity {
    @SequenceGenerator(
            name = "Equipage_sequence",
            sequenceName = "Equipage_sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator = "Equipage_sequence")
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
