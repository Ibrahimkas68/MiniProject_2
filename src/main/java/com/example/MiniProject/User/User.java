package com.example.MiniProject.User;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Objects;

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String password;
    private String email;
    private String NomComplet;

    public User(Long id, String password, String email, String nomComplet) {
        this.id = id;
        this.password = password;
        this.email = email;
        NomComplet = nomComplet;
    }

    public User(String password, String email, String nomComplet) {
        this.password = password;
        this.email = email;
        NomComplet = nomComplet;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNomComplet() {
        return NomComplet;
    }

    public void setNomComplet(String nomComplet) {
        NomComplet = nomComplet;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", NomComplet='" + NomComplet + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(password, user.password) && Objects.equals(email, user.email) && Objects.equals(NomComplet, user.NomComplet);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, password, email, NomComplet);
    }
}
