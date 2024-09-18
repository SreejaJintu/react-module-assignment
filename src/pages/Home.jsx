import React from 'react'
import './Home.css'
import image1 from '../images/Estrategias-ecommerce-para-los-pequenos-y-medianos-negocios.jpg'
import { Button, Card } from 'react-bootstrap';
import Navbar1 from '../components/Navbar1';
import Products from '../components/Products';
// import image1 from '../images/image.png'

function Home() {
  return (
    <div id='hero-container '>
       <Navbar1/>

    <Card className="bg-dark text-white border-0">
      <Card.Img src={image1} alt="hero"/>
      <Card.ImgOverlay>
        <div className="container">
        <Card.Title className='display-3 fw-bolder mb-0'>New Season Arrivals</Card.Title>
        <p>Check out all the trends</p>
        <Button variant="secondary" size="lg">
          Check out
        </Button>{' '}
        </div>
      </Card.ImgOverlay>
    </Card>
    <Products/>
    </div>
  );
}

export default Home