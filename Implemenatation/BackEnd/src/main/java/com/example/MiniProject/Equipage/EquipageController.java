package com.example.MiniProject.Equipage;

import com.example.MiniProject.User.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/auth")
public class EquipageController {
    private final EquipageService equipageService;
    private final EquipageRepo equipageRepo;

    @Autowired
    public EquipageController(EquipageService equipageService, EquipageRepo equipageRepo) {
        this.equipageService = equipageService;
        this.equipageRepo = equipageRepo;
    }
    @GetMapping("/equipages")
    public List<Equipage> getAll() {
        List<Equipage> equipages = equipageRepo.findAll();
        equipages.forEach(equipage -> {
            if (equipage.getUserType() == null) {
                equipage.setUserType(Role.EQUIPAGE);
            }
        });
        return equipages;
    }

    @PostMapping("/addEquipage")
    public ResponseEntity<String> createEquipage(@RequestBody EquipageDTO equipageDTO) {
        // Map DTO to entity
        Equipage equipage = new Equipage(
                null,                      // ID will be generated
                Role.EQUIPAGE,        // Set default role
                equipageDTO.getPassword(),
                equipageDTO.getEmail(),
                equipageDTO.getNomComplet(),
                equipageDTO.getFonction(),
                equipageDTO.getNumLicence(),
                equipageDTO.getNationalite()
        );

        // Save using the service
        String response = equipageService.createEquipage(equipage);
        return ResponseEntity.ok(response);
    }

}
