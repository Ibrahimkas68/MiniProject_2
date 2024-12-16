package com.example.MiniProject.Vol;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VolService {
    private final VolRepo volRepo;

    public VolService(VolRepo volRepo) {
        this.volRepo = volRepo;
    }

    public void addVol() {
        Vol vol = new Vol();
    }
    public List<Vol> getVols() {
        return volRepo.findAll();
    }
}
