import { ShopLayout } from "@/components/layouts";
import {
  Card,
  CardActionArea,
  Grid,
  Typography,
  CardMedia,
} from "@mui/material";
import { initialData } from "../../database/products";
import { ProductList } from "@/components/products";

export default function Home() {
  return (
    <ShopLayout
      title="Teslo-Shop"
      pageDescription="Encuentra los mejores productos"
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productoss
      </Typography>

      <ProductList products={initialData.products} />
    </ShopLayout>
  );
}
