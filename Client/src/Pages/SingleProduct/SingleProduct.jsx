import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import "./SingleProduct.css"
import Layout from '../../Components/Layout/Layout/Layout';
import Loader from '../../Components/Loader/Loader';

const SingleProduct = () => {
  const { productdetails } = useParams();
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

  if (loading) return <Loader/>;

  return (
    <Layout>
        <Container className='d-flex justify-content-center'>
            <Card>
                <Card.Img variant="top" src={product.image} alt={product.title}  style={{ width: "100px" }}/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
                    <Card.Text>${product.category}</Card.Text>
                    <Button className='m-2'>Add to Cart</Button>
                    <Button>Buy Now</Button>
                </Card.Body>
                </Card>
        </Container>
    </Layout>
  );
};

export default SingleProduct;
