package com.example.MiniProject.Admin;

import com.example.MiniProject.User.UserEntity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Data

public class Admin extends UserEntity {



    public Admin(Long id, String password, String email, String nomComplet) {
        super(id, password, email, nomComplet);
    }

    public Admin(String password, String email, String nomComplet) {
        super(password, email, nomComplet);
    }

    public Admin() {
    }
}
