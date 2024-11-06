import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Card } from 'react-bootstrap';
import Layout from '../../Components/Layout/Layout/Layout';

const SingleProduct = () => {
  const { productId } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${productdetails}`);
      setProduct(response.data);
      setLoading(false);
    };
    fetchProduct();
  }, [productdetails]);

  if (loading) return <p>Loading...</p>;

  return (
    <Layout>
        <Container>
            <Card>
                <Card.Img variant="top" src={product.image} alt={product.title} />
                <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
                </Card.Body>
                </Card>
        </Container>
    </Layout>
  );
};

export default SingleProduct;
