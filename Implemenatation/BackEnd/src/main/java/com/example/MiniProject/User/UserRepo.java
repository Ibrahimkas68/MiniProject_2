package com.example.MiniProject.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<UserEntity, Long> {
    // Change the return type to Optional<UserEntity>
    UserEntity findByEmail(String email);

    boolean existsByEmail(String email);


    List<UserEntity> findByUserType(Role userType);
}

