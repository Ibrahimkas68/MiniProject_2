package com.example.MiniProject.Admin;

import com.example.MiniProject.User.UserEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data

public class Admin extends UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_admin;


    public Admin(Long id_admin , String password, String email, String nomComplet) {
        super(password, email, nomComplet);
    }

    public Admin(String password, String email, String nomComplet, Long id_admin) {
        super(password, email, nomComplet);
        this.id_admin = id_admin;
    }

    public Admin() {

    }
    
}
