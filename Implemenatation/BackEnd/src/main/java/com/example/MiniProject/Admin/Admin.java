package com.example.MiniProject.Admin;

import com.example.MiniProject.User.User;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Objects;
@Entity
@Data
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Admin extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_admin;


    public Admin(Long id_admin , String password, String email, String nomComplet) {
        super(password, email, nomComplet);
    }


    public Admin() {

    }
    
}
