package com.example.MiniProject.Passager;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path = "api/passager")
public class PassagerController {
    private final PassagerService passagerService;

    @Autowired
    public PassagerController(PassagerService passagerService) {
        this.passagerService = passagerService;
    }

    // Create a new Passager
    @PostMapping
    public ResponseEntity<Passager> createPassager(@RequestBody Passager passager) {
        Passager createdPassager = passagerService.CPassager(passager);
        return ResponseEntity.ok(createdPassager);
    }

    // Get all Passagers
    @GetMapping("/getAll")
    public ResponseEntity<List<Passager>> getAllPassagers() {
        List<Passager> passagers = passagerService.getAll();
        return ResponseEntity.ok(passagers);
    }

    // Get a Passager by ID
    @GetMapping("/get/{id}")
    public ResponseEntity<Passager> getPassagerById(@PathVariable Long id) {
        Passager passager = passagerService.getById(id);
        return ResponseEntity.ok(passager);
    }

    // Update a Passager
    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<String> updatePassager(@PathVariable Long id,
                                                 @RequestParam(required = false) String CIN,
                                                 @RequestParam(required = false) Date dateNAissance,
                                                 @RequestParam(required = false) String Nationalite,
                                                 @RequestParam(required = false) String adresse,
                                                 @RequestParam(required = false) Integer numTell) {
        passagerService.UPassager(id, CIN, dateNAissance, Nationalite, adresse, numTell);
        return ResponseEntity.ok("Passager updated successfully.");
    }

    // Delete a Passager by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePassager(@PathVariable Long id) {
        passagerService.DPassagerById(id);
        return ResponseEntity.ok("Passager deleted successfully.");
    }
}









