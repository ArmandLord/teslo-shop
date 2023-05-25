import { ShopLayout } from "@/components/layouts";
import { Box, Typography } from "@mui/material";
import React from "react";

const PageNotFound = () => {
  return (
    <ShopLayout title="Page Not Found" pageDescription="Page Not Found">
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"calc(100vh - 200px)"}
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Typography
          variant={"h1"}
          component={"h1"}
          fontSize={100}
          fontWeight={100}
        >
          404 |
        </Typography>
        <Typography sx={{ ml: 2 }}>No encontramos la página</Typography>
      </Box>
    </ShopLayout>
  );
};

export default PageNotFound;
