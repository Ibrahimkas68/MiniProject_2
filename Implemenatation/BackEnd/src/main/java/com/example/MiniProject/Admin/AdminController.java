package com.example.MiniProject.Admin;

import com.example.MiniProject.Aeorport.Aero;
import com.example.MiniProject.Vol.Vol;
import com.example.MiniProject.Avion.Avion;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path = "api/admin")
public class AdminController {

    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/admins")
    public ResponseEntity<String> addAdmin(@RequestBody Admin admin) {
        adminService.addAdmin(admin);
        return ResponseEntity.ok("Admin added successfully.");
    }

    @GetMapping("/admins")
    public ResponseEntity<List<Admin>> getAllAdmins() {
        return ResponseEntity.ok(adminService.getAll());
    }

    @GetMapping("/admins/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable Long id) {
        return adminService.getAdmin(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/admins/{id}")
    @Transactional
    public ResponseEntity<String> updateAdmin(@PathVariable Long id,
                                              @RequestParam(required = false) String password,
                                              @RequestParam(required = false) String email,
                                              @RequestParam(required = false) String nomComplet) {
        adminService.updateAdmin(id, password, email, nomComplet);
        return ResponseEntity.ok("Admin updated successfully.");
    }

    @DeleteMapping("/admins/{id}")
    public ResponseEntity<String> deleteAdmin(@PathVariable Long id) {
        adminService.deleteAdmin(id);
        return ResponseEntity.ok("Admin deleted successfully.");
    }

    // AVION CRUD
    @PostMapping("/avions")
    public ResponseEntity<String> addAvion(@RequestBody Avion avion) {
        adminService.addAvion(avion);
        return ResponseEntity.ok("Avion added successfully.");
    }

    @GetMapping("/avions")
    public ResponseEntity<List<Avion>> getAllAvions() {
        return ResponseEntity.ok(adminService.getAllAvions());
    }

    @GetMapping("/avions/{id}")
    public ResponseEntity<Avion> getAvionById(@PathVariable Long id) {
        Avion avion = adminService.getAvion(id);
        return ResponseEntity.ok(avion);
    }

    @PutMapping("/avions/{id}")
    public ResponseEntity<String> updateAvion(@PathVariable Long id, @RequestParam(required = false) String typeAvion,
                                              @RequestParam(required = false) int capacite, @RequestParam(required = false) int anneeFab,
                                              @RequestParam(required = false) String model) {
        adminService.updateAvion(id, typeAvion, capacite, anneeFab, model);
        return ResponseEntity.ok("Avion updated successfully.");
    }

    @DeleteMapping("/avions/{id}")
    public ResponseEntity<String> deleteAvion(@PathVariable Long id) {
        adminService.deleteAvion(id);
        return ResponseEntity.ok("Avion deleted successfully.");
    }

    // AEROPORT CRUD
    @PostMapping("/aeroports")
    public ResponseEntity<String> addAeroport(@RequestBody Aero aero) {
        adminService.addAeroport(aero);
        return ResponseEntity.ok("Aeroport added successfully.");
    }

    @GetMapping("/aeroports")
    public ResponseEntity<List<Aero>> getAllAeroports() {
        return ResponseEntity.ok(adminService.getAllAeroports());
    }

    @GetMapping("/aeroports/{id}")
    public ResponseEntity<Aero> getAeroportById(@PathVariable Long id) {
        Aero aero = adminService.getAero(id);
        return ResponseEntity.ok(aero);
    }

    @PutMapping("/aeroports/{id}")
    public ResponseEntity<String> updateAeroport(@PathVariable Long id, @RequestParam(required = false) String aeroportIATA,
                                                 @RequestParam(required = false) String nomAeroport, @RequestParam(required = false) String ville,
                                                 @RequestParam(required = false) String pays, @RequestParam(required = false) int capacite) {
        adminService.updateAero(id, aeroportIATA, nomAeroport, ville, pays, capacite);
        return ResponseEntity.ok("Aeroport updated successfully.");
    }

    @DeleteMapping("/aeroports/{id}")
    public ResponseEntity<String> deleteAeroport(@PathVariable Long id) {
        adminService.deleteAeroport(id);
        return ResponseEntity.ok("Aeroport deleted successfully.");
    }

    // VOL CRUD
    @PostMapping("/vols")
    public ResponseEntity<String> addVol(@RequestBody Vol vol) {
        adminService.addVol(vol);
        return ResponseEntity.ok("Vol added successfully.");
    }

    @GetMapping("/vols")
    public ResponseEntity<List<Vol>> getAllVols() {
        return ResponseEntity.ok(adminService.getAllVols());
    }

    @GetMapping("/vols/{id}")
    public ResponseEntity<Vol> getVolById(@PathVariable Long id) {
        Vol vol = adminService.getVol(id);
        return ResponseEntity.ok(vol);
    }

    @PutMapping("/vols/{id}")
    public ResponseEntity<String> updateVol(@PathVariable Long id, @RequestParam(required = false) String codeIATA,
                                            @RequestParam(required = false) int numVol, @RequestParam(required = false) Date dateVol,
                                            @RequestParam(required = false) String IATADest, @RequestParam(required = false) String IATAOrig) {
        adminService.updateVol(id, codeIATA, numVol, dateVol, IATADest, IATAOrig);
        return ResponseEntity.ok("Vol updated successfully.");
    }

    @DeleteMapping("/vols/{id}")
    public ResponseEntity<String> deleteVol(@PathVariable Long id) {
        adminService.deleteVol(id);
        return ResponseEntity.ok("Vol deleted successfully.");
    }
}
