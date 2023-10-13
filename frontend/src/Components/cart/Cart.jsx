import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import TotalBalance from "./TotalBalance";
import EmptyCart from "./EmptyCart";

const Component = styled(Grid)(({ theme }) => ({
  padding: "15px 5px",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0",
  },
}));
const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: "16px",

  [theme.breakpoints.down("md")]: {
    marginBottom: "15px",
  },
}));

function Cart() {
  const { cartItems } = useSelector((state) => state.cartReducer);

  
  return (
    <Box>
      {cartItems.length ? (
        <Component container>
          <LeftComponent item lg="9" md="9" sm="12" xs="12">
            <Box padding="15px 24px" bgcolor="#fff">
              <Typography>My Cart ({cartItems.length})</Typography>
            </Box>
            {cartItems.map((item, index) => (
              <CartItems item={item} key={index} />
            ))}
            <Box
              sx={{
                padding: "16px 22px",
                background: "#fff",
                boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
                borderTop: "1px solid #f0f0f0",
              }}
            >
              <Button
                sx={{
                  display: "flex",
                  marginLeft: "auto",
                  background: "#fb641b",
                  color: "#fff",
                  borderRadius: "2px",
                  width: "250px",
                  height: "51px",
                  fontWeight: "600",
                  fontSize: "16px",
                  "&:hover": {
                    background: "#e15215",
                  },
                }}
              >
                PLACE ORDER{" "}
              </Button>
            </Box>
          </LeftComponent>
          <Grid item lg="3" md="3" sm="12" xs="12">
            <TotalBalance cartItems={cartItems} />
          </Grid>
        </Component>
      ) : (
        <EmptyCart />
      )}
    </Box>
  );
}

export default Cart;