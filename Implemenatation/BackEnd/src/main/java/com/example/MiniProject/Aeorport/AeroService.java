package com.example.MiniProject.Aeorport;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AeroService {
    private final AeroRepo aeroRepository;
    public AeroService(AeroRepo aeroRepository) {
        this.aeroRepository = aeroRepository;
    }
    public List<Aero> getAeroports( ) {
        return aeroRepository.findAll();
    }
}
