import { Container, Card } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Service from "../Service";
import ProductCard from "../components/ProductCard";

export default function SingleProduct() {
  const { id } = useParams();
  const singleProductQuery = useQuery({
    queryKey: ["singleProduct", id],
    queryFn: () => Service.getSingleProduct(id),
  });

  console.log(singleProductQuery);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        marginTop: "3vmin",
        height: "87vh",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Card
        sx={{
          maxWidth: "sm",
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}>
        <ProductCard singleProduct={singleProductQuery} />
      </Card>
    </Container>
  );
}
