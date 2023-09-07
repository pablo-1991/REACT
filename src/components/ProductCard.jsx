import { Box, CardMedia, CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types";

ProductCard.propTypes = {
  singleProduct: PropTypes.object,
};

function ProductCard({ singleProduct }) {
  const currentProduct = singleProduct.data;
  console.log(currentProduct);
  if (currentProduct) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "start",
        }}>
        <CardMedia
          component="img"
          alt={currentProduct.title}
          height="250"
          image={currentProduct.image}
          sx={{ flex: "1 0", objectFit: "contain", maxWidth: "15vmax" }}
        />
        <CardContent sx={{ flex: "2 0" }}>
          <Typography
            variant="h4"
            component="h3"
            fontWeight="bold"
            align="right">
            {currentProduct.title}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            color="text.primary"
            fontWeight="bold"
            align="right"
            sx={{ textTransform: "capitalize" }}>
            {currentProduct.category}
          </Typography>
          <Typography
            gutterBottom
            paragraph
            component="p"
            variant="body2"
            color="text.primary"
            align="right"
            my="1.5rem">
            {currentProduct.description}
          </Typography>
          <Typography
            variant="h4"
            component="div"
            fontWeight="bold"
            align="right">
            {currentProduct.price + " USD"}
          </Typography>
        </CardContent>
      </Box>
    );
  }
}
export default ProductCard;
