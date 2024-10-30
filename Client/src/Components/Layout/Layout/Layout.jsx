import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import {Container, Row, Col} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = (props) => {
  return (
    <>

        <Header/>
        <main style={{minHeight:'90vh'}}>
        {props.children}
        </main>
        <Footer/>
    </>
  )
}

export default Layout



// <Container fluid className='bg-danger'>
//             <Row>
//                 <Col >
//                     <Header/>
//                 </Col>
//             </Row>
//         </Container>
//         <Container style={{minHeight:'90vh'}}>
//             <Row>
//                 <Col>
//                     {props.children}
//                 </Col>
//             </Row>
//         </Container>
//         <Container fluid className='bg-danger' >
//             <Row>
//                 <Col>
//                     <Footer/>
//                 </Col>
//             </Row>
//         </Container>