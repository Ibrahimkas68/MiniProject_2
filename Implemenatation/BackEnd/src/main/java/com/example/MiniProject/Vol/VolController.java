package com.example.MiniProject.Vol;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
public class VolController {
    private final VolService volService;
    public VolController(VolService volService) {

        this.volService = volService;
    }
    @PostMapping("/addVol")
    public String addVol() {
    volService.addVol();
    return "Added Vol";
    }
    @GetMapping("/vol")
    public List<Vol> getVol() {
        return volService.getVols();
    }
}
