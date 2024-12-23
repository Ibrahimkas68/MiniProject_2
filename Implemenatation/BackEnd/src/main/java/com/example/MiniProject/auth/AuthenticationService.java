package com.example.MiniProject.auth;

import com.example.MiniProject.User.Role;
import com.example.MiniProject.User.UserEntity;
import com.example.MiniProject.User.UserRepo;
import com.example.MiniProject.config.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepo userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;  // Ensure this is injected properly
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        // Check if a user with the given email already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("User with this email already exists.");
        }

        var user = UserEntity.builder()
                .nom_complet(request.getNom_complet())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .userType(Role.ADMIN)
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user); // Now jwtService is injected and available
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

//

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        // Fetch user
        var user = userRepository.findByEmail(request.getEmail());

        // Generate JWT token
        var jwtToken = jwtService.generateToken(user);

        // Return the response with user_type
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .userType(user.getUserType()) // Ensure getUserType() exists in your User model
                .build();
    }
}
