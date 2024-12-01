package com.example.MiniProject.Vol;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public
@Repository
interface VolRepo extends JpaRepository<Vol, Long> {
}
