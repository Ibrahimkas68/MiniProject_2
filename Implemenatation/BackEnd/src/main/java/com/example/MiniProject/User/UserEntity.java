package com.example.MiniProject.User;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
@Entity
@Builder
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Table(name = "user_entity")// Inheritance strategy: Single table for all subclasses
public class UserEntity implements UserDetails {
    @Id
    @SequenceGenerator(
            name = "User_sequence",
            sequenceName = "User_sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "User_sequence")
    private Long id;
    @Enumerated(EnumType.STRING)
    private Role userType;


    private String password;
    private String email;
    @Column(unique = true)
    private String nom_complet;  // Changed to camelCase

    public UserEntity(Long id, Role userType, String password, String email, String nom_complet) {
        this.id = id;
        this.userType = userType;
        this.password = password;
        this.email = email;
        this.nom_complet = nom_complet;
    }

    public UserEntity(Role userType, String password, String email, String nom_complet) {
        this.userType = userType;
        this.password = password;
        this.email = email;
        this.nom_complet = nom_complet;
    }

    public UserEntity() {
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(userType.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


}