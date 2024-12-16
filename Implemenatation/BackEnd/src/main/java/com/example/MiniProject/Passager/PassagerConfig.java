package com.example.MiniProject.Passager;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.text.SimpleDateFormat;
import java.util.Date;
@Configuration
public class PassagerConfig {

    @Bean(name = "passagerCommandLineRunner")
    CommandLineRunner passagerCommandLineRunner(PassagerRepo passagerRepo) {
        return args -> {
            try {
                // Create a date format
                SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
                Date dateOfBirth = sdf.parse("02/08/2003");

                // Create Passager instances
                Passager passager1 = new Passager(
                        1L,
                        "password",
                        "ibrahim68@gmail.com",
                        "Kasmi Ibrahim",
                        "iia12973",
                        "ua128063",
                        dateOfBirth,
                        "Moroccan",
                        "Ksar Tiaaouanine",
                        0661, // Changed phone number to String for consistency
                        null  // Initially, the reservation is null
                );

                Passager passager2 = new Passager(
                        2L,
                        "anotherPassword",
                        "kasmi69@gmail.com",
                        "Kasmi Another",
                        "iia12974",
                        "ua128064",
                        dateOfBirth,
                        "Moroccan",
                        "Ksar Tiaaouanine",
                        0662, // Corrected phone format
                        null  // Initially, the reservation is null
                );

                // Check if Passagers already exist
                if (!passagerRepo.existsByEmail(passager1.getEmail())) {
                    passagerRepo.save(passager1);
                    System.out.println("Saved Passager 1: " + passager1.getNom_complet());
                } else {
                    System.out.println("Passager 1 already exists.");
                }

                if (!passagerRepo.existsByEmail(passager2.getEmail())) {
                    passagerRepo.save(passager2);
                    System.out.println("Saved Passager 2: " + passager2.getNom_complet());
                } else {
                    System.out.println("Passager 2 already exists.");
                }


            } catch (Exception e) {
                System.err.println("Error initializing Passager data: " + e.getMessage());
            }
        };
    }
}


