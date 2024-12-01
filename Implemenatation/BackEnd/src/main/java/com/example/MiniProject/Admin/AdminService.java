package com.example.MiniProject.Admin;

import com.example.MiniProject.Equipage.Equipage;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.beans.Transient;
import java.util.List;
import java.util.Optional;

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

    @Transactional
    public void updateAdmin(Long AdminId,String password, String email, String nom_complet) {
        Admin admin = adminRepo.findById(AdminId).orElseThrow(() -> new IllegalCallerException("Admin "+nom_complet+" not founded"));
        if(nom_complet != null && !nom_complet.equals(admin.getNomComplet())) {
            admin.setNomComplet(nom_complet);
        }
        if(password != null && !password.equals(admin.getPassword())) {
            admin.setPassword(password);
        }
        if(email != null && !email.equals(admin.getEmail())) {
            Optional<Admin> AdminOpt = adminRepo.findById(AdminId);
            if(AdminOpt.isPresent()) {
                throw new IllegalCallerException("Email : "+email+" already exists");
            }
            admin.setEmail(email);
        }

    }
}
