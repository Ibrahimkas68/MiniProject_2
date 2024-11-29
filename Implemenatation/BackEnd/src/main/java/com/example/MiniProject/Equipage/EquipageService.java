package com.example.MiniProject.Equipage;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipageService {
    private final EquipageRepo equipageRepo;
    public EquipageService(EquipageRepo equipageRepo) {
        this.equipageRepo = equipageRepo;
    }
    public List<Equipage> getAll() {

        return List.of();
    }
    public Equipage createEquipage(Equipage equipage) {
        return equipageRepo.save(equipage);
    }

}
