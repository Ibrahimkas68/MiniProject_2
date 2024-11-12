package com.example.MiniProject.Avion;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/avion")
public class AvionController {
    private final AvionService avionService;
    @Autowired
    public AvionController(AvionService avionService) {
        this.avionService = avionService;
    }

}
