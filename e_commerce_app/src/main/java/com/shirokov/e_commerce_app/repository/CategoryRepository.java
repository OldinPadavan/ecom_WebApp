package com.shirokov.e_commerce_app.repository;

import com.shirokov.e_commerce_app.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    public Category findByName(String name);

    @Query("SELECT c from Category c WHERE c.name = :name " +
            "AND c.parentCategory.name = :parentCategoryName")
    public Category findByNameAndParent(@Param("name")String name,
                                        @Param("parentCategoryName")String parentCategoryName);
}
