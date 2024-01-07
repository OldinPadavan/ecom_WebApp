package com.shirokov.e_commerce_app.service;

import com.shirokov.e_commerce_app.config.JwtProvider;
import com.shirokov.e_commerce_app.exception.UserException;
import com.shirokov.e_commerce_app.model.User;
import com.shirokov.e_commerce_app.repository.UserRepository;

import java.util.Optional;

public class UserServiceImplementation implements UserService{

    private UserRepository userRepository;
    private JwtProvider jwtProvider;

    public UserServiceImplementation() {
    }

    public UserServiceImplementation(UserRepository userRepository, JwtProvider jwtProvider) {
        this.userRepository = userRepository;
        this.jwtProvider = jwtProvider;
    }

    @Override
    public User findUserById(Long userId) throws UserException {
        Optional<User>user = userRepository.findById(userId);
        if (user.isPresent()) {
            return user.get();
        }
        throw new UserException("User not found with id" + userId);
    }

    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {
        String email=jwtProvider.getEmailFromToken(jwt);

        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw  new UserException("User not found with email" + email);
        }
        return user;
    }
}