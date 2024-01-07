package com.shirokov.e_commerce_app.service;

import com.shirokov.e_commerce_app.exception.ProductException;
import com.shirokov.e_commerce_app.model.Product;
import com.shirokov.e_commerce_app.model.Size;
import com.shirokov.e_commerce_app.request.CreateProductRequest;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {

    public Product createProduct(CreateProductRequest request);

    public String deleteProduct(Long productId) throws ProductException;

    public Product updateProduct(Long productId, Product newProduct) throws ProductException;

    public Product findProductById(Long id) throws ProductException;

    public List<Product> findProductByCategory(String category);

    public Page<Product> getAllProduct(String category, List<String> colors, List<Size>sizes,
                                       Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock,
                                       Integer pageNumber, Integer pageSize);


}
