package com.example.MiniProject.Equipage;

import com.example.MiniProject.User.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/")
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
                equipageDTO.getNom_complet(),
                equipageDTO.getFonction(),
                equipageDTO.getNum_licence(),
                equipageDTO.getNationalite()
        );

        // Save using the service
        String response = equipageService.createEquipage(equipage);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/editEquipage/{id}")  // Add {id} to capture the id
    public ResponseEntity<String> editEquipage(@PathVariable Long id, @RequestBody EquipageDTO equipageDTO) {
        // Find existing equipage by ID
        Equipage existingEquipage = equipageRepo.findById(id).orElse(null);
        if (existingEquipage == null) {
            return ResponseEntity.badRequest().body("Equipage not found.");
        }

        // Update fields
        existingEquipage.setPassword(equipageDTO.getPassword());
        existingEquipage.setEmail(equipageDTO.getEmail());
        existingEquipage.setNom_complet(equipageDTO.getNom_complet());
        existingEquipage.setFonction(equipageDTO.getFonction());
        existingEquipage.setNum_licence(equipageDTO.getNum_licence());
        existingEquipage.setNationalite(equipageDTO.getNationalite());

        // Save updated equipage
        equipageRepo.save(existingEquipage);

        return ResponseEntity.ok("Equipage updated successfully.");
    }

    @DeleteMapping("/deleteEquipage")  // Add {id} to capture the id
    public ResponseEntity<String> deleteEquipage(@PathVariable Long id) {
        // Check if equipage exists
        if (!equipageRepo.existsById(id)) {
            return ResponseEntity.badRequest().body("Equipage not found.");
        }

        // Delete equipage
        equipageRepo.deleteById(id);

        return ResponseEntity.ok("Equipage deleted successfully.");
    }
}