package com.example.MiniProject.Equipage;

import com.example.MiniProject.User.Role;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipageService {
    private final EquipageRepo equipageRepo;

    public EquipageService(EquipageRepo equipageRepo) {
        this.equipageRepo = equipageRepo;
    }

    /**
     * Retrieves all equipage entities from the repository.
     * @return a list of all equipages.
     */
    public List<Equipage> getAll() {
        return equipageRepo.findAll();
    }

    /**
     * Creates a new equipage entry and saves it to the repository.
     * @param equipage the equipage entity to save.
     * @return a success message.
     */
    public String createEquipage(Equipage equipage) {
        if (equipage.getUserType() == null) {
            equipage.setUserType(Role.EQUIPAGE); // Ensure userType is initialized
        }
        equipageRepo.save(equipage);
        return "Equipage Saved Successfully";
    }

    /**
     * Retrieves an equipage by ID.
     * @param id the ID of the equipage to retrieve.
     * @return the found equipage or throws an exception if not found.
     */
    public Equipage getById(Long id) {
        return equipageRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Equipage Not Found"));
    }

    /**
     * Deletes an equipage by ID.
     * @param id the ID of the equipage to delete.
     * @return a success message.
     */
    public String deleteEquipage(Long id) {
        if (!equipageRepo.existsById(id)) {
            throw new RuntimeException("Equipage not found with ID: " + id);
        }
        equipageRepo.deleteById(id);
        return "Equipage Deleted Successfully";
    }
}
