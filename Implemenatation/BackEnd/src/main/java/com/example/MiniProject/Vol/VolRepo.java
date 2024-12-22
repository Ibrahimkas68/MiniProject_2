package com.example.MiniProject.Vol;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public
@Repository
interface VolRepo extends JpaRepository<Vol, Long> {
    Optional<Vol> findByNumVol(int numVol);
}
