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
            Admin admin1 = new Admin(1l,"ibrahimkasmi@2003","ibrahimkasmi68@gmail.com","kasmi ibrahim");
            Admin admin2 = new Admin(2l,"ibrahimkasmi@2003","ibrahimkasmi68@gmail.com"," ibrahim");


            // Saving all groups to the repository
            adminRepo.saveAll(List.of(admin1, admin2));
        };
    }
}
