package com.example.MiniProject.User;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String password;
    private String email;
    private String NomComplet;

    public UserEntity(Long id, String password, String email, String nomComplet) {
        this.id = id;
        this.password = password;
        this.email = email;
        NomComplet = nomComplet;
    }

    public UserEntity(String password, String email, String nomComplet) {
        this.password = password;
        this.email = email;
        NomComplet = nomComplet;
    }
    public UserEntity() {}
}
