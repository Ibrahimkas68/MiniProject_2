package com.example.MiniProject.User;

import org.springframework.security.core.userdetails.MapReactiveUserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepo userRepository;
    private final UserRepo userRepo;

    public UserService(UserRepo userRepository, UserRepo userRepo) {
        this.userRepository = userRepository;
        this.userRepo = userRepo;
    }

    public boolean authenticateUser(String email, String password) {
        UserEntity user = userRepo.findByEmail(email);
        if (user != null) {
            return user.getPassword().equals(password); // Simple plain text comparison
        }
        return false;
    }
}
