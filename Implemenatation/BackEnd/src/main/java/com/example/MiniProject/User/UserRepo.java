package com.example.MiniProject.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public
@Repository
interface UserRepo extends JpaRepository<UserEntity, Long> {
    UserEntity findByEmail(String Email);

    List<UserEntity> findByUserType(String userType);
}
