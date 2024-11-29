package com.example.MiniProject.Passager;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/passager")
public class PassagerController {
    private final PassagerService passagerService;
    public PassagerController(PassagerService passagerService) {
        this.passagerService = passagerService;
    }
    @GetMapping("/GetAll")
    public List<Passager> getAllPassagers() {

        return passagerService.getAll();
    }
    @PostMapping("/addPassager")
    public Passager addPassager(@RequestBody Passager passager) {
        return passagerService.createPassager(passager);
    }


}
