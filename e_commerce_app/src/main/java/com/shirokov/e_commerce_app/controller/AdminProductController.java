package com.shirokov.e_commerce_app.controller;


import com.shirokov.e_commerce_app.exception.ProductException;
import com.shirokov.e_commerce_app.model.Product;
import com.shirokov.e_commerce_app.request.CreateProductRequest;
import com.shirokov.e_commerce_app.response.ApiResponse;
import com.shirokov.e_commerce_app.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/products")
public class AdminProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/")
    public ResponseEntity<Product> createProduct(@RequestBody CreateProductRequest request) {

        Product product = productService.createProduct(request);
        return new ResponseEntity<Product>(product, HttpStatus.CREATED);
    }

    @DeleteMapping("/{productId}/delete")
    public ResponseEntity<ApiResponse>deleteProduct(@PathVariable Long productId) throws ProductException {

        productService.deleteProduct(productId);
        ApiResponse res = new ApiResponse();
        res.setMessage("Product delete successfully");
        res.setStatus(true);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Product>> findAllProduct() {
        List<Product>products = productService.findAllProducts();

        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PutMapping("/{productId}/update")
    public ResponseEntity<Product>updateProduct(@RequestBody Product request,
                                                @PathVariable Long productId) throws ProductException{
        Product product = productService.updateProduct(productId, request);
        return new ResponseEntity<Product>(product, HttpStatus.CREATED);
    }

    @PostMapping("/creates")
    public ResponseEntity<ApiResponse>createMultipleProduct(@RequestBody CreateProductRequest[] requests) {

        for (CreateProductRequest productRequest : requests) {
            productService.createProduct(productRequest);
        }

        ApiResponse res = new ApiResponse();
        res.setMessage("Products created successfully!");
        res.setStatus(true);

        return new ResponseEntity<>(res,HttpStatus.CREATED);
    }



}
