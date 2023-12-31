package com.shirokov.e_commerce_app.repository;

import com.shirokov.e_commerce_app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    public User findByEmail(String email);

}
