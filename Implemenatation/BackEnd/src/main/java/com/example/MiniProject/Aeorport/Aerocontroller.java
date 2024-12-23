package com.example.MiniProject.Aeorport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/auth/aeroport")
public class Aerocontroller {
    private final AeroService aeroService;
    @Autowired
    public Aerocontroller(AeroService aeroService) {
        this.aeroService = aeroService;
    }
    @GetMapping("/getAll")
    public List<Aero> getAeroService() {
        return aeroService.getAeroports();
    }


}
