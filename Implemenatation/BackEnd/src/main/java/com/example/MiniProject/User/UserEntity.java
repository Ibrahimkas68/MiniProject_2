package com.example.MiniProject.User;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Table(name = "user_entity")// Inheritance strategy: Single table for all subclasses
public abstract class UserEntity {
    @Id
    @SequenceGenerator(
            name = "User_sequence",
            sequenceName = "User_sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "User_sequence")
    private Long id;
    @Column(name = "user_type")
    private String userType;


    private String password;
    private String email;
    private String nom_complet;  // Changed to camelCase

    public UserEntity(Long id, String userType, String password, String email, String nom_complet) {
        this.id = id;
        this.userType = userType;
        this.password = password;
        this.email = email;
        this.nom_complet = nom_complet;
    }

    public UserEntity(String userType, String password, String email, String nom_complet) {
        this.userType = userType;
        this.password = password;
        this.email = email;
        this.nom_complet = nom_complet;
    }

    public UserEntity() {
    }
}