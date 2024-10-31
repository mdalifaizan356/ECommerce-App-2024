import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";

const Header = () => {
  const containerStyle = {
    position: "fixed",
    top: "0",
    width: "100%",
    backgroundColor: "#f8f9fa",
    zIndex: 1000,
    height: "100px"
  };

  return (
    <>
      <Container fluid style={containerStyle} className="bg-success">
        <Row className="d-flex justify-content-between">
          <Col 
            className="bg-danger d-flex align-items-center justify-content-center" 
            style={{ 
              clipPath: "polygon(0 0, 95% 0, 100% 100%, 0% 100%)", 
              height: "30px",
              color: "white",
            }}
          >
            <p><i className="fa-solid fa-envelope"></i> Contact Us</p>
          </Col>
          <Col 
            className="bg-warning d-flex align-items-center justify-content-center"
            style={{ 
              clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)", 
              height: "30px",
              color: "white",
            }}
          >
            <h4>Follow Us</h4>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-pinterest"></i></a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;




{/* <section className="headerContainer">
        <header className="headerBox">
            <div className="newsBar">
                <p>Latest News</p>
                <marquee>Hiii</marquee>
            </div>
            <div className="contactBar">
                <div className="emailLink"><p><i className="fa-solid fa-envelope"></i></p></div>
                <div className="socialLink">
                    <h4>Follow Us</h4>
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-whatsapp"></i></a>
                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                    <a href=""><i className="fa-brands fa-youtube"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-pinterest"></i></a>
                </div>
            </div>
            <div className="logoANDLogin">
                <div className="logo">
                    <img src="./images/logo (1).jpeg" alt=""/>
                    <h1>CP BagEgeny</h1>
                </div>
                <div className="login">
                    <div className="PhIcon">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="PhNo">
                        <p>Call Us</p>
                        <h1>9887370536</h1>
                    </div>
                    <div className="LoginBtn">
                        <button>
                            <a href="./Common/Ragistration.php">
                                Enter
                                <i className="fa-solid fa-right-to-bracket"></i>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="navContainer">
                <nav id="nav">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Course</a></li>
                        <li><a href="">Admission</a></li>
                        <li>
                            <a href="#">Exam</a>
                            <ul>
                                <li><a href="">Time Table</a></li>
                                <li><a href="">Result</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="">Academics</a>
                            <ul>
                                <li><a href="">Principal Message</a></li>
                                <li><a href="">Approach</a></li>
                                <li><a href="">Facilities</a></li>
                                <li><a href="">School Uniform</a></li>
                            </ul>
                        </li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Events   </a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">About Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </section> */}