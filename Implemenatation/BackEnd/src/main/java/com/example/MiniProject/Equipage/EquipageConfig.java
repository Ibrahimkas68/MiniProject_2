package com.example.MiniProject.Equipage;

import com.example.MiniProject.User.Role;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EquipageConfig {

    @Bean
    CommandLineRunner initDatabase(EquipageRepo equipageRepo) {
        return args -> {
            Equipage equipage1 = new Equipage(Role.EQUIPAGE, "password123", "captain@example.com",
                    "John Doe", "Pilot", 12345, "American");
            Equipage equipage2 = new Equipage(Role.EQUIPAGE, "password456", "crew@example.com",
                    "Jane Doe", "Flight Attendant", 67890, "Canadian");
            equipageRepo.save(equipage1);
            equipageRepo.save(equipage2);
        };
    }
}
