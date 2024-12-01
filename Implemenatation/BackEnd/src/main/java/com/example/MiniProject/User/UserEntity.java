package com.example.MiniProject.User;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "user_type", discriminatorType = DiscriminatorType.STRING)
@Table(name = "users")
public class UserEntity {
    @Id
    @SequenceGenerator(
            name = "User_sequence",
            sequenceName = "User_sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator = "User_sequence")
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
