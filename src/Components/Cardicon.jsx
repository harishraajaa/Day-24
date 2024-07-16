import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardicon({data}) {
  return (
    <div className="col mb-5">
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={data.image} className='imgclass' />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.author}</Card.Text>
        <Button variant="primary">Explore</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cardicon;