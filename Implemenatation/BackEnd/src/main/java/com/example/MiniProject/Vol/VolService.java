package com.example.MiniProject.Vol;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VolService {
    private final VolRepo volRepo;

    public VolService(VolRepo volRepo) {
        this.volRepo = volRepo;
    }

    // Add a new Vol if it doesn't already exist (based on num_vol)
    public String addVol(Vol vol) {
        Optional<Vol> existingVol = volRepo.findByNumVol(vol.getNumVol()); // Check by num_vol
        if (existingVol.isPresent()) {
            return "Vol with this num_vol already exists in the database.";
        }
        volRepo.save(vol);
        return "Vol added successfully.";
    }

    // Get all Vols from the repository
    public List<Vol> getVols() {
        return volRepo.findAll();
    }
}
