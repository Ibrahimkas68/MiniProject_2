package com.example.MiniProject.Avion;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class AvionConfig {

    @Bean(name = "avionCommandLineRunner")
        // Optional: Add profiles for different environments
    CommandLineRunner avionRunner(AvionRepo avionRepository) {
        return args -> {
            Avion avion1 = new Avion("Boeing 737", 180, 2010, "737-800");
            Avion avion2 = new Avion("Airbus A320", 200, 2015, "A320neo");

            avionRepository.saveAll(List.of(avion1, avion2));
        };
    }
}