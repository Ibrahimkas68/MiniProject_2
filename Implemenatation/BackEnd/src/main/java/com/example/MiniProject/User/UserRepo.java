package com.example.MiniProject.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public
@Repository
interface UserRepo extends JpaRepository<UserEntity, Long> {
    UserEntity findByEmail(String Email);
}
