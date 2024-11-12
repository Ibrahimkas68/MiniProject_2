package com.example.MiniProject.Equipage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/equipage")
public class EquipageController {
    private final EquipageService equipageService;
    @Autowired
    public EquipageController(EquipageService equipageService) {
        this.equipageService = equipageService;
    }
}
