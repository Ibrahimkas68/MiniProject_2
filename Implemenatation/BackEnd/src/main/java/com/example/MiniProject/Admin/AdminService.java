package com.example.MiniProject.Admin;

import com.example.MiniProject.Aeorport.Aero;
import com.example.MiniProject.Aeorport.AeroRepo;
import com.example.MiniProject.Avion.Avion;
import com.example.MiniProject.Avion.AvionRepo;
import com.example.MiniProject.Vol.Vol;
import com.example.MiniProject.Vol.VolRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
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

        return List.of();
    }

    @Transactional
    public void updateAdmin(Long AdminId,String password, String email, String nom_complet) {
        Admin admin = adminRepo.findById(AdminId).orElseThrow(() -> new IllegalCallerException("Admin "+nom_complet+" not founded"));
        if(nom_complet != null && !nom_complet.equals(admin.getNom_complet())) {
            admin.setNom_complet(nom_complet);
        }
        if(password != null && !password.equals(admin.getPassword())) {
            admin.setPassword(password);
        }
        if(email != null && !email.equals(admin.getEmail())) {
            Optional<Admin> AdminOpt = adminRepo.findById(AdminId);
            if(AdminOpt.isPresent()) {
                throw new IllegalCallerException("Email : "+email+" already exists");
            }
            admin.setEmail(email);
        }

    }

    public Optional<Admin> getAdmin(Long adminId) {
        return adminRepo.findById(adminId);
    }
    public void deleteAdmin(Long AdminId) {
        adminRepo.deleteById(AdminId);
    }
//    Avion CRUD Actions
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
        // Find the Avion entity by its ID
        Avion avion = avionRepo.findById(avionId)
                .orElseThrow(() -> new IllegalArgumentException("Avion with ID " + avionId + " not found."));

        // Update the type of avion
        if (typeAvion != null && !typeAvion.isEmpty()) {
            avion.setType_avion(typeAvion);
        }

        // Update the capacity
        if (capacite > 0) {
            avion.setCapacite(capacite);
        }

        // Update the year of fabrication
        if (anneeFab > 0) {
            avion.setAnnee_fab(anneeFab);
        }

        // Update the model
        if (model != null && !model.isEmpty()) {
            avion.setModel(model);
        }
    }


    public void deleteAvion(Long avionId) {
        avionRepo.deleteById(avionId);
    }

//   Aeropot CRUD

    public void addAeroport(Aero aero) {
        aeroRepo.save(aero);
    }
    public List<Aero> getAllAeroport() {
        return aeroRepo.findAll();
    }
    public Aero getAero(Long AeroId) {
        return aeroRepo.findById(AeroId)
                .orElseThrow(() -> new IllegalArgumentException("Avion with ID " + AeroId + " not found."));
    }
    @Transactional
    public void updateAero(Long id_aeroport,
    String aeroport_IATA,
    String nom_aeroport,
    String ville,
    String pays,
    int capacite) {
        Aero aero = aeroRepo.findById(id_aeroport)
                .orElseThrow(() -> new IllegalArgumentException("Avion with ID " + id_aeroport + " not found."));

        if (aeroport_IATA != null && !aeroport_IATA.isEmpty()) {
            aero.setAeroport_IATA(aeroport_IATA);
        }
        if (capacite > 0) {
            aero.setCapacite(capacite);
        }

        // Update the model
        if (nom_aeroport != null && !nom_aeroport.isEmpty()) {
            aero.setNom_aeroport(nom_aeroport);
        }
        if (ville != null && !ville.isEmpty()) {
            aero.setVille(ville);
        }
        if (pays != null && !pays.isEmpty()) {
            aero.setPays(pays);
        }

    }


    public void deleteAerport(Long aeroId) {
        aeroRepo.deleteById(aeroId);
    }

    //   VOL CRUD


    public void addVol(Vol vol) {
        volRepo.save(vol);
    }
    public List<Vol> getAllVol() {
        return volRepo.findAll();
    }
    public Vol getVol(Long VolId) {
        return volRepo.findById(VolId)
                .orElseThrow(() -> new IllegalArgumentException("Avion with ID " + VolId + " not found."));
    }
    @Transactional
    public void updateVol(Long id_vol,
    String codeIATA,
    int numVol,
    Date dateVol,
    String IATADest,
    String IATAOrig) {
        Vol vol = volRepo.findById(id_vol)
                .orElseThrow(() -> new IllegalArgumentException("Avion with ID " + id_vol + " not found."));

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
