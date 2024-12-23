package com.example.MiniProject.Vol;

import com.example.MiniProject.Aeorport.Aero;
import com.example.MiniProject.Aeorport.AeroRepo;
import com.example.MiniProject.Avion.Avion;
import com.example.MiniProject.Avion.AvionRepo;
import com.example.MiniProject.Reservation.Reservation;
import com.example.MiniProject.Reservation.ReservationRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Configuration
public class VolConfig {

    @Bean(name = "volCommandLineRunner")
        // Optional: Add profiles for different environments
    CommandLineRunner volRunner(VolRepo volRepository, AvionRepo avionRepository, AeroRepo aeroRepository, ReservationRepo reservationRepo) {
        return args -> {
            Avion avion = avionRepository.findById(1L).orElse(null);
            Avion avion1 = avionRepository.findById(2L).orElse(null);

            Aero aero = aeroRepository.findById(1L).orElse(null);
            Aero aeroDest = aeroRepository.findById(2L).orElse(null);
            Reservation reservation = reservationRepo.findById(1L).orElse(null);
            Reservation reservation2 = reservationRepo.findById(2L).orElse(null);
            List<Reservation> reservations = new ArrayList<>();
            reservations.add(reservation);
            reservations.add(reservation2);

            if (avion != null) {
                Vol vol1 = new Vol(1L,"ABU120",23, new Date(),aero.getAeroport_IATA(),aeroDest.getAeroport_IATA(),new BigDecimal("2000.00"),avion,reservations);
                Vol vol2 = new Vol(1L,"ABU120",23, new Date(),aero.getAeroport_IATA(),aeroDest.getAeroport_IATA(),new BigDecimal("3000.00"),avion1,reservations);

                volRepository.saveAll(List.of(vol1, vol2));
            }
        };
    }
}
