package com.example.MiniProject.Admin;

import com.example.MiniProject.User.Role;
import com.example.MiniProject.User.UserEntity;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true) // Ensures proper equals/hashCode including fields from UserEntity
@Data
@Entity // Marks this class as a JPA entity
public class Admin extends UserEntity {

    public Admin(Long id, String password, String email, String nom_complet) {
        super(id, Role.ADMIN, password, email, nom_complet);
    }

    public Admin( String password, String email, String nom_complet) {
        super(null,Role.ADMIN, password, email, nom_complet);
    }

    public Admin() {
        super();
    }
}
