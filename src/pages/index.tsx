import { ShopLayout } from "@/components/layouts";
import {
  Card,
  CardActionArea,
  Grid,
  Typography,
  CardMedia,
} from "@mui/material";
import { initialData } from "../../database/products";

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

      <Grid container spacing={4}>
        {initialData.products.map((product) => (
          <Grid key={product.slug} item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`products/${product.images[0]}`}
                  alt={product.title}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ShopLayout>
  );
}
