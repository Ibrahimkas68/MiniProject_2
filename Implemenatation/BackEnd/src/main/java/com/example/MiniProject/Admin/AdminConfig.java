package com.example.MiniProject.Admin;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class AdminConfig {
    @Bean(name = "adminCommandLineRunner")
    CommandLineRunner adminCommandLineRunner(AdminRepo adminRepo) {
        return args -> {
            Admin admin1 = new Admin(1L,"ADMIN", "ibrahimkasmi@2003", "ibrahimkasmi68@gmail.com", "kasmi ibrahim");
            Admin admin2 = new Admin(2L,"ADMIN", "ibrahimkasmi@2003", "ibrahimkasmi68@gmail.com", "ibrahim");

            // Logging to confirm execution
            System.out.println("Saving admins: " + admin1.getNom_complet() + ", " + admin2.getNom_complet());

            // Saving admins to the repository
            adminRepo.saveAll(List.of(admin1, admin2));
        };
    }

}
