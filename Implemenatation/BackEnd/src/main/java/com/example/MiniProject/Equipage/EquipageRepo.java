package com.example.MiniProject.Equipage;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EquipageRepo {
    List<Equipage> findAll();
    Equipage findById(int id);
    Equipage save(Equipage equipage);
    void delete(Equipage equipage);


}
