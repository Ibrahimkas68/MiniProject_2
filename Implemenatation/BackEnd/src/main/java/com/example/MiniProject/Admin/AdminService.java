package com.example.MiniProject.Admin;

import com.example.MiniProject.Equipage.Equipage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    private final AdminRepo adminRepo;
    public AdminService(AdminRepo adminRepo) {
        this.adminRepo = adminRepo;

    }
    @Autowired
    public AdminService(AdminRepo adminRepo, PasswordEncoder passwordEncoder) {
        this.adminRepo = adminRepo;

    }
    public Admin createAdmin(Admin admin) {
        return adminRepo.save(admin);
    }
    public List<Admin> getAll() {

        return List.of();
    }


}
