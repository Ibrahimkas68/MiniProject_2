package com.example.MiniProject.Admin;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class AdminConfig {

    @Bean(name = "adminCommandLineRunner")
    CommandLineRunner adminCommandLineRunner(AdminRepo adminRepo, PasswordEncoder passwordEncoder) {
        return args -> {
            Admin admin1 = new Admin(passwordEncoder.encode("ibrahimkasmi@2003"), "ibrahimksmi68@gmail.com", "kasmi ibrahim");
            Admin admin2 = new Admin(passwordEncoder.encode("@2003"), "ibrahimkasmi68@gmail.com", "ibrahim");

            if (!adminRepo.existsByEmail(admin1.getEmail())) {
                adminRepo.save(admin1);
                System.out.println("Saved Admin 1: " + admin1.getNom_complet());
            } else {
                System.out.println("Admin 1 already exists.");
            }

            if (!adminRepo.existsByEmail(admin2.getEmail())) {
                adminRepo.save(admin2);
                System.out.println("Saved Admin 2: " + admin2.getNom_complet());
            } else {
                System.out.println("Admin 2 already exists.");
            }
        };
    }
}


