package com.example.MiniProject.Passager;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public
@Repository
interface PassagerRepo extends JpaRepository<Passager, Long> {

}
