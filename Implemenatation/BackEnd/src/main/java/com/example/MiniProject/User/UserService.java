package com.example.MiniProject.User;


import org.apache.catalina.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UserService {
    private final UserRepo userRepository;
    private final UserRepo userRepo;

    public UserService(UserRepo userRepository, UserRepo userRepo) {
        this.userRepository = userRepository;
        this.userRepo = userRepo;
    }

//    public boolean authenticateUser(String email, String password) {
//        Optional<UserEntity> UserEntity user = userRepo.findByEmail(email);
//        if (user != null) {
//            // Compare the plain text password with the stored password
//            return password.equals(user.getPassword());
//        }
//        return false;
//    }

    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }
}
