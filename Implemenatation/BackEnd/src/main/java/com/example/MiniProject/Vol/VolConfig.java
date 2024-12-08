package com.example.MiniProject.Vol;

import com.example.MiniProject.Avion.Avion;
import com.example.MiniProject.Avion.AvionRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Date;
import java.util.List;

@Configuration
public class VolConfig {

    @Bean(name = "volCommandLineRunner")
        // Optional: Add profiles for different environments
    CommandLineRunner volRunner(VolRepo volRepository, AvionRepo avionRepository) {
        return args -> {
            Avion avion = avionRepository.findById(1L).orElse(null); // Ensure a valid Avion exists

            if (avion != null) {
                Vol vol1 = new Vol(1L,"ABC123", 101, new Date(), "JFK", "LAX", avion);
                Vol vol2 = new Vol(2L,"DEF456", 202, new Date(), "CDG", "DXB", avion);

                volRepository.saveAll(List.of(vol1, vol2));
            }
        };
    }
}
