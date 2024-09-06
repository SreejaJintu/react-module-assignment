import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({product}) {



  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        
        <Card.Text>
          {product.price}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;