package com.example.MiniProject.Equipage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/equipage")
public class EquipageController {
    private final EquipageService equipageService;
    private final EquipageRepo equipageRepo;

    @Autowired
    public EquipageController(EquipageService equipageService, EquipageRepo equipageRepo) {
        this.equipageService = equipageService;
        this.equipageRepo = equipageRepo;
    }
    @GetMapping("/Equipage")
    public List<Equipage> getAllEquipages() {
        return equipageService.getAll();

    }
    @PostMapping("/addEquipage")
    public Equipage createEquipage(@RequestBody Equipage equipage) {
        return equipageService.createEquipage(equipage);
    }
}
