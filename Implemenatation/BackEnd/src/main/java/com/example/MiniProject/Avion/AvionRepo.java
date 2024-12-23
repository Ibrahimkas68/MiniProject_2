package com.example.MiniProject.Avion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public
@Repository
interface AvionRepo extends JpaRepository<Avion, Long> {

}
