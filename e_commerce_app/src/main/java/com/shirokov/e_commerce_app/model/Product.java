package com.shirokov.e_commerce_app.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name="title")
    private String title;

    @Column(name="description")
    private String description;

    @Column(name="product_code")
    private long code;

    @Column(name="price")
    private int price;
    @Column(name="discounted_price")
    private int discountedPrice;
    @Column(name="discount_percent")
    private int discountPercent;
    @Column(name="quantity")
    private int quantity;

    @Column(name="color")
    private String color;

    @Embedded
    @ElementCollection
    @Column(name="sizes")
    private Set<Size>sizes=new HashSet<>();
    @Column(name="image_url")
    private String imageUrl;
    @ManyToOne()
    @JoinColumn(name="category_id")
    private Category category;

    private LocalDateTime createdAt;


    public Product() {

    }
    public Product(Long id, String title, String description, long code, int price, int discountedPrice, int discountPercent, int quantity, String color, Set<Size> sizes, String imageUrl, Category category, LocalDateTime createdAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.code = code;
        this.price = price;
        this.discountedPrice = discountedPrice;
        this.discountPercent = discountPercent;
        this.quantity = quantity;
        this.color = color;
        this.sizes = sizes;
        this.imageUrl = imageUrl;
        this.category = category;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getCode() {
        return code;
    }

    public void setCode(long code) {
        this.code = code;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getDiscountedPrice() {
        return discountedPrice;
    }

    public void setDiscountedPrice(int discountedPrice) {
        this.discountedPrice = discountedPrice;
    }

    public int getDiscountPercent() {
        return discountPercent;
    }

    public void setDiscountPercent(int discountPercent) {
        this.discountPercent = discountPercent;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Set<Size> getSizes() {
        return sizes;
    }

    public void setSizes(Set<Size> sizes) {
        this.sizes = sizes;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }


}
