package com.example.MiniProject.Passager;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class PassagerService {
    private final PassagerRepo passagerRepository;

    public PassagerService(PassagerRepo passagerRepo) {
        this.passagerRepository = passagerRepo;
    }

    // Create
    public Passager CPassager(Passager passager) {
        if (!passagerRepository.existsByEmail(passager.getEmail())) {
            return passagerRepository.save(passager);
        }else throw new IllegalArgumentException("Passager with this email already exists.");

    }

    // Read All
    public List<Passager> getAll() {
        return passagerRepository.findAll();
    }

    // Read by ID
    public Passager getById(Long id_passager) {
        return passagerRepository.findById(id_passager)
                .orElseThrow(() -> new IllegalArgumentException("Passager with ID " + id_passager + " not found."));
    }

    // Update
    @Transactional
    public void UPassager(Long id_passager, String CIN, Date dateNAissance,
                          String Nationalite, String adresse, Integer numTell) {
        Passager passager = passagerRepository.findById(id_passager)
                .orElseThrow(() -> new IllegalArgumentException("Passager with ID " + id_passager + " not found."));

        if (Nationalite != null && !Nationalite.isEmpty()) {
            passager.setNationalite(Nationalite);
        }
        if (numTell != null && numTell > 0) {
            passager.setNumTell(numTell);
        }
        if (adresse != null && !adresse.isEmpty()) {
            passager.setAdresse(adresse);
        }
        if (CIN != null && !CIN.isEmpty()) {
            passager.setCIN(CIN);
        }
        if (dateNAissance != null) {
            passager.setDateNAissance(dateNAissance);
        }
    }

    // Delete by ID
    public void DPassagerById(Long id_passager) {
        if (!passagerRepository.existsById(id_passager)) {
            throw new IllegalArgumentException("Passager with ID " + id_passager + " not found.");
        }
        passagerRepository.deleteById(id_passager);
    }
}
