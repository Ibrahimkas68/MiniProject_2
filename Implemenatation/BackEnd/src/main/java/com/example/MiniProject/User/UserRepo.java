package com.example.MiniProject.User;

import org.springframework.stereotype.Repository;

public
@Repository
interface UserRepo {
    UserEntity findByEmail(String Email);
}
