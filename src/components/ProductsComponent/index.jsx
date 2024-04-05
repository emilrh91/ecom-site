import React, { useState, useEffect } from "react";
import { fetchAllProducts } from "../../services/api";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./index.css";

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    const getProducts = async () => {
      const allProducts = await fetchAllProducts();
      setProducts(allProducts.data);
    };

    getProducts();
  }, []);

  const handleSearchChange = (search) => {
    setSearchTerm(search);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
       <div className="mb-2">
    <SearchBar onSearchChange={handleSearchChange} />
    </div>
      <Row>
        <h2>Our Products</h2>
        {filteredProducts.map((product) => {
          const discount = product.price - product.discountedPrice;
          const discountPercentage = (discount / product.price) * 100;

          return (
            <Col key={product.id} xs={12} md={4} className="mb-3">
              <Card className="mb-4 h-100 d-flex flex-column">
                <Card.Img
                  variant="top"
                  src={product.image.url}
                  alt={product.image.alt}
                  className="product-image object-fit-cover"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: ${product.discountedPrice}</Card.Text>
                  {discount > 0 && (
                    <Card.Text className="text-muted">
                      Discount: {discountPercentage.toFixed(2)}%
                    </Card.Text>
                  )}
                  <Button
                    variant="success"
                    onClick={() => addToCart(product)}
                    className="mt-auto"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="primary"
                    as={Link}
                    to={`/product/${product.id}`}
                    className="mt-2"
                  >
                    View Product
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductsComponent;
