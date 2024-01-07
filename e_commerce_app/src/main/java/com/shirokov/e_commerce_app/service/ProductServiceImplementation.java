package com.shirokov.e_commerce_app.service;

import com.shirokov.e_commerce_app.exception.ProductException;
import com.shirokov.e_commerce_app.model.Category;
import com.shirokov.e_commerce_app.model.Product;
import com.shirokov.e_commerce_app.model.Size;
import com.shirokov.e_commerce_app.repository.CategoryRepository;
import com.shirokov.e_commerce_app.repository.ProductRepository;
import com.shirokov.e_commerce_app.request.CreateProductRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static java.util.List.of;

@Service
public class ProductServiceImplementation implements ProductService {

    private ProductRepository productRepository;
    private UserService userService;
    private CategoryRepository categoryRepository;

    public ProductServiceImplementation() {
    }

    public ProductServiceImplementation(ProductRepository productRepository,
                                        UserService userService, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.userService = userService;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Product createProduct(CreateProductRequest request) {

        Category firstLevel=categoryRepository.findByName(request.getFirstLevelCategory());

        if (firstLevel == null) {
            Category firstLevelCategory=new Category();
            firstLevelCategory.setName(request.getFirstLevelCategory());
            firstLevelCategory.setLevel(1);

            firstLevel=categoryRepository.save(firstLevelCategory);
        }

        Category secondLevel=categoryRepository.findByNameAndParent(request.getSecondLevelCategory(),firstLevel.getName());

        if(secondLevel == null) {
            Category secondLevelCategory=new Category();
            secondLevelCategory.setName(request.getSecondLevelCategory());
            secondLevelCategory.setParentCategory(firstLevel);
            secondLevelCategory.setLevel(2);

            secondLevel = categoryRepository.save(secondLevelCategory);
        }

        Category thirdLevel=categoryRepository.findByNameAndParent(request.getThirdLevelCategory(), secondLevel.getName());

        if (thirdLevel == null) {
            Category thirdLevelCategory = new Category();
            thirdLevelCategory.setName(request.getThirdLevelCategory());
            thirdLevelCategory.setParentCategory(secondLevel);
            thirdLevelCategory.setLevel(3);

            thirdLevel = categoryRepository.save(thirdLevelCategory);
        }


        Product product = new Product();
        product.setTitle(request.getTitle());
        product.setDescription(request.getDescription());
        product.setCode(request.getCode());
        product.setColor(request.getColor());
        product.setDiscountedPrice(request.getDiscountedPrice());
        product.setDiscountPercent(request.getDiscountPercent());
        product.setImageUrl(request.getImageUrl());
        product.setPrice(request.getPrice());
        product.setSizes(request.getSizes());
        product.setQuantity(request.getQuantity());
        product.setCategory(thirdLevel);
        product.setCreatedAt(LocalDateTime.now());

        Product savedProduct = productRepository.save(product);
        return savedProduct;
    }

    @Override
    public String deleteProduct(Long productId) throws ProductException {
        Product product=findProductById(productId);

        product.getSizes().clear();
        productRepository.delete(product);
        return "Product deleted successfully";
    }

    @Override
    public Product updateProduct(Long productId, Product newProduct) throws ProductException {

        Product product=findProductById(productId);

        if(newProduct.getQuantity()!= 0) {
            product.setQuantity(newProduct.getQuantity());
        }

        return productRepository.save(product);
    }

    @Override
    public Product findProductById(Long id) throws ProductException {

        Optional<Product> opt=productRepository.findById(id);

        if(opt.isPresent()) {
            return opt.get();
        } throw new ProductException("Product not found with id" + id);
    }

    @Override
    public List<Product> findProductByCategory(String category) {
        return null;
    }

    @Override
    public Page<Product> getAllProduct(String category, List<String> colors, List<Size> sizes, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {


        Pageable pageable= PageRequest.of(pageNumber, pageSize);
        List<Product>products=productRepository.filterProducts(category,minPrice,maxPrice,minDiscount,sort);
        if (!colors.isEmpty()) {
            products=products.stream().filter(p -> colors.stream().anyMatch(c -> c.equalsIgnoreCase(p.getColor())))
                    .collect(Collectors.toList());
        }

        if (stock != null) {
            if (stock.equals("in_stock")){
                products = products.stream().filter(p -> p.getQuantity()>0).collect(Collectors.toList());
            } else if (stock.equals("out_of_stock")) {
                products=products.stream().filter(p -> p.getQuantity()<1).collect(Collectors.toList());
            }
        }

        int startIndex = (int) pageable.getOffset();
        int endIndex = Math.min(startIndex + pageable.getPageSize(), products.size());

        List<Product>pageContent = products.subList(startIndex, endIndex);

        Page<Product>filteredProducts = new PageImpl<>(pageContent, pageable, products.size());

        return filteredProducts;
    }
}
