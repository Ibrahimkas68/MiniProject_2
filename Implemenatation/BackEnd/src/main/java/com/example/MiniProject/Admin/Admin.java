package com.example.MiniProject.Admin;

import com.example.MiniProject.User.User;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Objects;

public class Admin extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_admin;


    public Admin(Long id_admin , String password, String email, String nomComplet) {
        super(password, email, nomComplet);
    }

    public Long getId_admin() {
        return id_admin;
    }

    public void setId_admin(Long id_admin) {
        this.id_admin = id_admin;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Admin admin = (Admin) o;
        return Objects.equals(id_admin, admin.id_admin);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), id_admin);
    }

    @Override
    public String toString() {
        return "Admin{" +
                '}';
    }
}
