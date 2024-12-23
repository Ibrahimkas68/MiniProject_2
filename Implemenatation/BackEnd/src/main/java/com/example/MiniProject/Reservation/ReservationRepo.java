package com.example.MiniProject.Reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public
@Repository
interface ReservationRepo extends JpaRepository<Reservation, Long> {
}
