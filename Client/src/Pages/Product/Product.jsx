import React, {useEffect, useState} from 'react';
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Loader from '../../Components/Loader/Loader';
import { Container, Row, Col, Button, Card, ListGroup} from 'react-bootstrap';
import "./Product.css";

const Product = () => {
  // const [data, setData] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading ] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(()=>{
    fetch();
  },[])

  const fetch = async()=>{
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log(">>>>>>>>>>>Response>>>>>>>>", response.data);
    setData(response.data);
    setLoading(false);
  }
  // console.log(data);
  // const abc = ()=>{
  //   setLoading(!loading)
  // }


  const filterData=data.filter((elements)=>
  elements.title.toLowerCase().includes(search.toLocaleLowerCase())||elements.description.toLowerCase().includes(search.toLocaleLowerCase())
  )

  const filterSort = ()=>{
    if(sort === "asc"){
      return[...filterData].sort((a,b)=>a.price - b.price);
    }
    if(sort === "dec"){
      return[...filterData].sort((a,b)=>b.price - a.price);
    }
    return filterData;
  }

  return (
    <Container>
    <Row className='d-flex justify-content-center'>
      {loading ? (
        <Loader />
      ) : (
        filterSort().map((item) => (
          <Col key={item.id} md={4} sm={6} xs={12} className='mb-4 d-flex justify-content-center'>
          <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card style={{ width: '18rem' }} className=' border border-danger d-flex justify-content-center'>
            <div className='d-flex justify-content-center' >
            <LazyLoadImage
              src={item.image} 
              style={{ width: "100px" }}
              effect='blur'
            />
            </div>
            
            <Card.Body >
              <Card.Title>{item.title}</Card.Title>
            <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item><p>Price: ${item.price}</p></ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button className='m-2'>Add to Cart</Button>
              <Button>Buy Now</Button>
            </Card.Body>
          </Card>
          </Link>
          </Col>
        ))
      )}
    </Row>
  </Container>
  )
}
export default Product








// <input type="text"
//             value={search}
//             placeholder='Search by titile'
//             onChange={(e)=>setSearch(e.target.value)}
//           />

//           <Button onClick={()=>setSort("asc")}>Low To High</Button>
//           <Button onClick={()=>setSort("dec")}>High To Low</Button>
