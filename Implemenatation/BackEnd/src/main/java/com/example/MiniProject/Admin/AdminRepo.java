package com.example.MiniProject.Admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Long> {

    boolean existsByEmail(String email);
    List<Admin> findAll();

    Optional<Admin> findByEmail(String email);
}
