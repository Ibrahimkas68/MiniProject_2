package com.example.MiniProject.Admin;

import com.example.MiniProject.User.UserEntity;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true) // Ensures proper equals/hashCode including fields from UserEntity
@Data
@Entity // Marks this class as a JPA entity
public class Admin extends UserEntity {

    public Admin(Long id, String userType, String password, String email, String nom_complet) {
        super(id, userType, password, email, nom_complet);
    }

    public Admin(String userType, String password, String email, String nom_complet) {
        super(userType, password, email, nom_complet);
    }

    public Admin() {
        super();
    }
}
