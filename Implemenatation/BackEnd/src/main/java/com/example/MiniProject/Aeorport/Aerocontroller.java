package com.example.MiniProject.Aeorport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/aeroport")
public class Aerocontroller {
    private final AeroService aeroService;
    @Autowired
    public Aerocontroller(AeroService aeroService) {
        this.aeroService = aeroService;
    }

}
