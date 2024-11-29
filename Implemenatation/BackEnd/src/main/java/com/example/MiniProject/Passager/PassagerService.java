package com.example.MiniProject.Passager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PassagerService {
    private final PassagerRepo passagerRepository;
    public PassagerService(PassagerRepo passagerRepository) {
        this.passagerRepository = passagerRepository;
    }
    @Autowired
    public PassagerService(PassagerRepo passagerRepository, PasswordEncoder passwordEncoder) {
        this.passagerRepository = passagerRepository;

    }
    public Passager createPassager(Passager passager) {
        return passagerRepository.save(passager);
    }

    public List<Passager> getAll() {
        return List.of();
    }
}
