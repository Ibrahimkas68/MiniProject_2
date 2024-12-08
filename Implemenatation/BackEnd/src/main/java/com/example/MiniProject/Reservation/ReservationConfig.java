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

                // Fetch Passagers (Users with type "PASSAGER")
                List<UserEntity> passagers = userRepo.findByUserType("PASSAGER");

                if (passagers.isEmpty()) {
                    throw new IllegalArgumentException("No passagers found with user_type = 'PASSAGER'");
                }

                // Create and populate a new Reservation
                Reservation reservation = new Reservation();
                reservation.setNumVol(vol);
                reservation.setDateReserv(new Date());  // Set current date for the reservation
                reservation.setStatus("Pending");
                reservation.setPrix(200.00);  // Set the price

                // Associate each Passager with the Reservation
                List<Passager> updatedPassagers = new ArrayList<>();
                for (UserEntity user : passagers) {
                    if (user instanceof Passager) {
                        Passager passager = (Passager) user;  // Cast UserEntity to Passager
                        passager.setReservation(reservation);
                        updatedPassagers.add(passager);
                    } else {
                        System.out.println("Skipping non-Passager user: " + user.getNom_complet());
                    }
                }

                // Save the Reservation
                reservationRepository.save(reservation);

                // Save the updated Passagers with the Reservation linked
                passagerRepo.saveAll(updatedPassagers);

                System.out.println("Reservation and Passagers saved successfully!");

            } catch (Exception e) {
                System.err.println("Error initializing Reservation data: " + e.getMessage());
            }
        };
    }
}
