package com.shirokov.e_commerce_app.service;

import com.shirokov.e_commerce_app.exception.CartItemException;
import com.shirokov.e_commerce_app.exception.UserException;
import com.shirokov.e_commerce_app.model.Cart;
import com.shirokov.e_commerce_app.model.CartItem;
import com.shirokov.e_commerce_app.model.Product;

public interface CartItemService {
    public CartItem createCartItem(CartItem cartItem);
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException;
    public  CartItem isCartItemExist(Cart cart, Product product, String size, Long userId);
    public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException;
    public CartItem findCartItemById(Long cartItemId)throws CartItemException;
}
