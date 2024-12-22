package com.example.MiniProject.Vol;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
public class VolController {
    private final VolService volService;

    public VolController(VolService volService) {
        this.volService = volService;
    }

    // Add a new Vol
    @PostMapping("/addVol")
    public String addVol(@RequestBody Vol vol) { // Accept Vol object from the request body
        return volService.addVol(vol);
    }

    // Get all Vols
    @GetMapping("/vols")
    public List<Vol> getVols() {
        return volService.getVols();
    }
}
