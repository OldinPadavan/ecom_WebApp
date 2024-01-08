package com.shirokov.e_commerce_app.service;

import com.shirokov.e_commerce_app.exception.ProductException;
import com.shirokov.e_commerce_app.model.Cart;
import com.shirokov.e_commerce_app.model.User;
import com.shirokov.e_commerce_app.request.AddItemRequest;

public interface CartService {

    public Cart createCart(User user);
    public String addCartItem(Long userId, AddItemRequest request) throws ProductException;
    public Cart findUserCart(Long userId);


}
