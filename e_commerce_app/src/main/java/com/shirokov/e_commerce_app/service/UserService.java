package com.shirokov.e_commerce_app.service;

import com.shirokov.e_commerce_app.exseption.UserException;
import com.shirokov.e_commerce_app.model.User;

public interface UserService {

    public User findUserById(Long userId) throws UserException;

    public User findUserProfileByJwt(String jwt) throws UserException;
}
