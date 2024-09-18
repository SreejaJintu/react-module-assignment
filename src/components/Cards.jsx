import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({product}) {



  return (
    <div className='col-md-3'>

    <Card className='h-100 text-center p-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} style={{ height: '250px' }} />
      <Card.Body>
        <Card.Title className='mb-0'>{product.title.substring(0,12)}</Card.Title>
        
        <Card.Text>
          ${product.price}
        </Card.Text>
        <Button variant="btn btn-outline-dark" href=''>Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;