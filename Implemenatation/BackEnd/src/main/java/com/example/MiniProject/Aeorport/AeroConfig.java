package com.example.MiniProject.Aeorport;

import com.example.MiniProject.Admin.Admin;
import com.example.MiniProject.Admin.AdminRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import java.util.List;

public class AeroConfig {
    @Bean(name = "adminCommandLineRunner")
    CommandLineRunner adminCommandLineRunner(AeroRepo aeroRepo) {
        return args -> {
            Aero Aeroport1 = new Aero(1L, "IataDes","Aeroport1","Lile","France",1500);
            Aero Aeroport2 = new Aero(2L, "Iatas","Aeroport2","Paris","France",1200);


            // Saving all groups to the repository
            aeroRepo.saveAll(List.of(Aeroport1, Aeroport2));
        };
    }
}
