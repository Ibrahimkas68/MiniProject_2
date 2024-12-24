package com.example.MiniProject.Equipage;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EquipageRepo extends JpaRepository<Equipage, Long> {


    boolean existsByEmail(String mail);
}
