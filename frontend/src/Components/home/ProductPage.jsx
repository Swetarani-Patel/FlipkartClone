import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import LeftSideBar from "../productPage/LeftSideBar";
import Sort from "../productPage/Sort";
import ProductCard from "../productPage/ProductCard";
import { useParams } from "react-router-dom";
import { categoryMapping } from "./categoryMapping";
import { getProductByCategory } from "../../redux/actions/productAction";
import LeftBar from "./LeftBar";
import LoadingSkeleton from "./LoadingSkeleton";
import ProductNotAva from "../productPage/ProductNotAva";

function ProductPage() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const modifiedCategory = categoryMapping(category);
  const { categoriesedProd, loading } = useSelector(
    (state) => state.getProductByCategoryReducer
  );
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setProductsData(categoriesedProd);
    localStorage.setItem(
      "categorywise-product",
      JSON.stringify(categoriesedProd)
    );
  }, [categoriesedProd]);

  const onSort = (criteria) => {
    console.log(criteria);
    const sortedProducts = sortProducts(criteria);
    setProductsData(sortedProducts);
  };
  const sortProducts = (sortBy) => {
    if (sortBy === "Price -- Low to High") {
      dispatch(getProductByCategory(modifiedCategory, "asc_price"));
    } else if (sortBy === "Price -- High to Low") {
      dispatch(getProductByCategory(modifiedCategory, "desc_price"));
    } else if (sortBy === "Rating") {
      dispatch(getProductByCategory(modifiedCategory, "desc_rating"));
    } else if (sortBy === "MRP") {
      dispatch(getProductByCategory(modifiedCategory, "popularity"));
    } else if (sortBy === "Newest First") {
      dispatch(getProductByCategory(modifiedCategory, "newest_first"));
    } else {
      dispatch(getProductByCategory(modifiedCategory, ""));
    }
  };

  return (
    <>
      <Box display="flex">
        <LeftBar setProductsData={setProductsData} />

        <Box marginLeft="15px" width="100%" bgcolor="white">
          <Sort onSort={onSort} showDiscountOption={false} />

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
            {loading ? (
              <LoadingSkeleton totalLength={productsData.length} />
            ) : productsData.length > 0 ? (
              <>
                {productsData.map((ele) => {
                  return (
                    <ProductCard
                      key={ele.id}
                      ele={ele}
                      productsData={productsData}
                    />
                  );
                })}
              </>
            ) : (
              <ProductNotAva />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProductPage;
