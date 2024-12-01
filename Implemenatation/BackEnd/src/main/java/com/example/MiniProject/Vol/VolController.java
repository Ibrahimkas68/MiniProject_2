package com.example.MiniProject.Vol;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/vol")
public class VolController {
    private final VolService volService;
    public VolController(VolService volService) {

        this.volService = volService;
    }
    @GetMapping("/addVol")
    public String addVol() {
    volService.addVol();
    return "Added Vol";
    }
}
