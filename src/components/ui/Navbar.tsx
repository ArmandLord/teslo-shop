import NextLink from "next/link";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href={"/"}>
          <Link
            display={"flex"}
            alignItems={"center"}
            underline="none"
            component={"span"}
          >
            <Typography variant={"h6"}>Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <NextLink href={"/category/men"}>
            <Link underline="none" component={"span"}>
              <Button>Hombres</Button>
            </Link>
          </NextLink>
          <NextLink href={"/category/women"}>
            <Link underline="none" component={"span"}>
              <Button>Mujeres</Button>
            </Link>
          </NextLink>
          <NextLink href={"/category/kid"}>
            <Link underline="none" component={"span"}>
              <Button>Niños</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href={"/cart"}>
          <Link underline="none" component={"span"}>
            <IconButton>
              <Badge badgeContent={2} color="error">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
