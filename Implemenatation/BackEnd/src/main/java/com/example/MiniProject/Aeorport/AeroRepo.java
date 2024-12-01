package com.example.MiniProject.Aeorport;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public
@Repository
interface AeroRepo extends JpaRepository<Aero, Integer> {
}
