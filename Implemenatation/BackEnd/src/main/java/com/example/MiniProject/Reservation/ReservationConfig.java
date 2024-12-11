package com.example.MiniProject.Reservation;

import com.example.MiniProject.Passager.Passager;
import com.example.MiniProject.Passager.PassagerRepo;
import com.example.MiniProject.User.UserEntity;
import com.example.MiniProject.User.UserRepo;
import com.example.MiniProject.Vol.Vol;
import com.example.MiniProject.Vol.VolRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Configuration
public class ReservationConfig {

    @Bean(name = "reservationCommandLineRunner")
    CommandLineRunner reservationCommandLineRunner(
            ReservationRepo reservationRepository,
            VolRepo volRepository,
            UserRepo userRepo,
            PassagerRepo passagerRepo) {
        return args -> {
            try {
                // Fetch the Vol (flight)
                Vol vol = volRepository.findById(1L).orElseThrow(() -> new IllegalArgumentException("Vol not found"));

                // Fetch a single Passager (User with type "PASSAGER")
                UserEntity userEntity = userRepo.findByUserType("PASSAGER")
                        .stream()
                        .findFirst()
                        .orElseThrow(() -> new IllegalArgumentException("No passager found with user_type = 'PASSAGER'"));

                if (!(userEntity instanceof Passager)) {
                    throw new IllegalArgumentException("User is not a Passager instance");
                }

                Passager passager = (Passager) userEntity;

                // Create and populate a new Reservation
                Reservation reservation = new Reservation();
                reservation.setNumVol(vol);
                reservation.setPassager(passager);
                reservation.setDateReserv(new Date());  // Set current date for the reservation
                reservation.setStatus("Pending");
                reservation.setPrix(200.00);  // Set the price

                // Save the Reservation
                reservationRepository.save(reservation);

                System.out.println("Reservation saved successfully for passager: " + passager.getNom_complet());

            } catch (Exception e) {
                System.err.println("Error initializing Reservation data: " + e.getMessage());
            }
        };
    }
}
