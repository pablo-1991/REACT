import { ImageList, Container, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { Fragment } from "react";

import Service from "../Service";
import Product from "../components/Product";

export default function AllProducts() {
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: () => Service.getProducts(),
  });

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        component="h2"
        align="center"
        fontWeight="bold"
        my="2.5rem">
        Products
      </Typography>

      <Typography
        variant="subtitle1"
        component="h4"
        align="center"
        fontWeight="bold"
        mt="2.5rem">
        Esta es la lista completa de productos de esta tienda.
      </Typography>
      <Typography
        variant="subtitle1"
        component="h4"
        align="center"
        fontWeight="bold"
        mb="2.5rem">
        Haz click en cualquier producto para ver su detalle.
      </Typography>

      <ImageList
        cols={3}
        gap={25}
        sx={{
          justifyItems: "center",
        }}>
        {productsQuery.data?.map((product) => (
          <Fragment key={product.id}>
            <Product product={product} />
          </Fragment>
        ))}
      </ImageList>
    </Container>
  );
}
