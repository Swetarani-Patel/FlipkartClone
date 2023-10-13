import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import LeftSideBar from "../productPage/LeftSideBar";
import Sort from "../productPage/Sort";
import ProductCard from "../productPage/ProductCard";
import { useParams } from "react-router-dom";


function ProductPage() {
  const {category} = useParams()
  console.log(category);
  const { categoriesedProd } = useSelector((state) => state.getProductByCategoryReducer); 
  // const [productsData, setProductsData] = useState(categoriesedProd);
  

  // useEffect(() => {
   
  //   setProductsData(filteredProduct);
  // }, []);
  const filteredProduct = categoriesedProd.filter(
    (ele) => ele.category === category
  );
  console.log(filteredProduct)
  

  const onSort = () => {
    // const sortedProducts = sortProducts(criteria);
    // setProductsData(sortedProducts);
  };
  const sortProducts = (sortBy) => {
    // const filteredProduct = products?.filter(
    //   (ele) => ele.category === storedcategory || ele.tagline === storedtagline
    // );
    // if (sortBy === "Price -- Low to High") {
    //   return filteredProduct.sort((a, b) => a.price.cost - b.price.cost);
    // } else if (sortBy === "Price -- High to Low") {
    //   return filteredProduct.sort((a, b) => b.price.cost - a.price.cost);
    // } else if (sortBy === "Discount") {
    //   return filteredProduct.sort((a, b) => {
    //     const discountA = parseFloat(a.price.discount.replace("% off", ""));
    //     const discountB = parseFloat(b.price.discount.replace("% off", ""));
    //     return discountB - discountA;
    //   });
    // } else if (sortBy === "Rating") {
    //   return filteredProduct.sort((a, b) => b.rating - a.rating);
    // } else if (sortBy === "MRP") {
    //   return filteredProduct.filter((elm) => elm.rating > 4);
    // } else if (sortBy === "Newest First") {
    //   return filteredProduct.filter((elm) => elm.rating <= 2);
    // }
    // return filteredProduct;
  };

  return (
    <>
      <Box display="flex">
        <LeftSideBar
          
        />
         
          <Box marginLeft="15px" width="100%" bgcolor="white">
            <Sort onSort={onSort}/>

            <Box
              sx={{
                display: "grid",
                borderTop: "2px solid #f0f0f0",

                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                gap: "20px",
              }}
            >
              {categoriesedProd.map((ele) => {
                return <ProductCard key={ele.id} ele={ele}/>;
              })}
            </Box>
          </Box>
        
      </Box>
    </>
  );
}

export default ProductPage;
