package com.example.MiniProject.Passager;

import org.springframework.stereotype.Repository;

public
@Repository
interface PassagerRepo {
    public Passager findPassagerByUsername(String username);
    public Passager save(Passager passager);
}
