package com.example.MiniProject.Admin;

import com.example.MiniProject.Aeorport.Aero;
import com.example.MiniProject.Aeorport.AeroRepo;
import com.example.MiniProject.Avion.Avion;
import com.example.MiniProject.Avion.AvionRepo;
import com.example.MiniProject.Vol.Vol;
import com.example.MiniProject.Vol.VolRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    private final AdminRepo adminRepo;
    private final AvionRepo avionRepo;
    private final VolRepo volRepo;
    private final AeroRepo aeroRepo;

    @Autowired
    public AdminService(AdminRepo adminRepo, AvionRepo avionRepo, VolRepo volRepo, AeroRepo aeroRepo) {
        this.adminRepo = adminRepo;
        this.avionRepo = avionRepo;
        this.volRepo = volRepo;
        this.aeroRepo = aeroRepo;
    }

    public void addAdmin(Admin admin) {
        if (adminRepo.findById(admin.getId()).isPresent()) {
            throw new IllegalArgumentException("Admin with email " + admin.getEmail() + " already exists.");
        }
        adminRepo.save(admin);
    }

    public List<Admin> getAll() {
        return adminRepo.findAll();
    }

    @Transactional
    public void updateAdmin(Long adminId, String password, String email, String nom_complet) {
        Admin admin = adminRepo.findById(adminId)
                .orElseThrow(() -> new IllegalArgumentException("Admin " + nom_complet + " not found"));

        if (nom_complet != null && !nom_complet.equals(admin.getNom_complet())) {
            admin.setNom_complet(nom_complet);
        }
        if (password != null && !password.equals(admin.getPassword())) {
            admin.setPassword(password);
        }
        if (email != null && !email.equals(admin.getEmail())) {
            Optional<Admin> existingAdmin = adminRepo.findByEmail(email);
            if (existingAdmin.isPresent()) {
                throw new IllegalArgumentException("Email " + email + " already exists.");
            }
            admin.setEmail(email);
        }
    }

    public Optional<Admin> getAdmin(Long adminId) {
        return adminRepo.findById(adminId);
    }

    public void deleteAdmin(Long adminId) {
        adminRepo.deleteById(adminId);
    }

    // AVION CRUD Actions
    public void addAvion(Avion avion) {
        avionRepo.save(avion);
    }

    public List<Avion> getAllAvions() {
        return avionRepo.findAll();
    }

    public Avion getAvion(Long avionId) {
        return avionRepo.findById(avionId)
                .orElseThrow(() -> new IllegalArgumentException("Avion with ID " + avionId + " not found."));
    }

    @Transactional
    public void updateAvion(Long avionId, String typeAvion, int capacite, int anneeFab, String model) {
        Avion avion = avionRepo.findById(avionId)
                .orElseThrow(() -> new IllegalArgumentException("Avion with ID " + avionId + " not found."));

        if (typeAvion != null && !typeAvion.isEmpty()) {
            avion.setType_avion(typeAvion);
        }
        if (capacite > 0) {
            avion.setCapacite(capacite);
        }
        if (anneeFab > 0) {
            avion.setAnnee_fab(anneeFab);
        }
        if (model != null && !model.isEmpty()) {
            avion.setModel(model);
        }
    }

    public void deleteAvion(Long avionId) {
        avionRepo.deleteById(avionId);
    }

    // AEROPORT CRUD Actions
    public void addAeroport(Aero aero) {
        aeroRepo.save(aero);
    }

    public List<Aero> getAllAeroports() {
        return aeroRepo.findAll();
    }

    public Aero getAero(Long aeroId) {
        return aeroRepo.findById(aeroId)
                .orElseThrow(() -> new IllegalArgumentException("Aeroport with ID " + aeroId + " not found."));
    }

    @Transactional
    public void updateAero(Long idAeroport, String aeroportIATA, String nomAeroport, String ville, String pays, int capacite) {
        Aero aero = aeroRepo.findById(idAeroport)
                .orElseThrow(() -> new IllegalArgumentException("Aeroport with ID " + idAeroport + " not found."));

        if (aeroportIATA != null && !aeroportIATA.isEmpty()) {
            aero.setAeroport_IATA(aeroportIATA);
        }
        if (capacite > 0) {
            aero.setCapacite(capacite);
        }
        if (nomAeroport != null && !nomAeroport.isEmpty()) {
            aero.setNom_aeroport(nomAeroport);
        }
        if (ville != null && !ville.isEmpty()) {
            aero.setVille(ville);
        }
        if (pays != null && !pays.isEmpty()) {
            aero.setPays(pays);
        }
    }

    public void deleteAeroport(Long aeroId) {
        aeroRepo.deleteById(aeroId);
    }

    // VOL CRUD Actions
    public void addVol(Vol vol) {
        volRepo.save(vol);
    }

    public List<Vol> getAllVols() {
        return volRepo.findAll();
    }

    public Vol getVol(Long volId) {
        return volRepo.findById(volId)
                .orElseThrow(() -> new IllegalArgumentException("Vol with ID " + volId + " not found."));
    }

    @Transactional
    public void updateVol(Long volId, String codeIATA, int numVol, Date dateVol, String IATADest, String IATAOrig) {
        Vol vol = volRepo.findById(volId)
                .orElseThrow(() -> new IllegalArgumentException("Vol with ID " + volId + " not found."));

        if (codeIATA != null && !codeIATA.isEmpty()) {
            vol.setCodeIATA(codeIATA);
        }
        if (numVol > 0) {
            vol.setNumVol(numVol);
        }
        if (IATADest != null && !IATADest.isEmpty()) {
            vol.setIATADest(IATADest);
        }
        if (IATAOrig != null && !IATAOrig.isEmpty()) {
            vol.setIATAOrig(IATAOrig);
        }
    }

    public void deleteVol(Long volId) {
        volRepo.deleteById(volId);
    }
}
