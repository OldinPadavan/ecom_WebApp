package com.shirokov.e_commerce_app.repository;

import com.shirokov.e_commerce_app.model.Cart;
import com.shirokov.e_commerce_app.model.CartItem;
import com.shirokov.e_commerce_app.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long > {

    @Query("SELECT ci FROM CartItem ci WHERE ci.cart = :cart AND ci.product = :product"+
    " AND ci.size = :size AND ci.userId = :userId")
    public CartItem isCartItemExist(@Param("cart") Cart cart, @Param("product")Product product,
                                    @Param("size")String size, @Param("userId")Long userId);
}
