import {Button, Container, Card, Image} from 'react-bootstrap';
import bikeImage from './Images/Bike.avif'
import bikes from './Images/bikes-banner.png'

function Home () {
    return(
        <div>
            <Container className="text-center text-white bg-success border border-dark border-3 rounded p-0 m-4">
                <div className='text-center'>
                    <Image
                        src={bikes}
                        rounded
                        fluid
                        alt='bikes'
                    />
                </div>
                <h1 className='m-3'>Welcome to our bike shop!</h1>
                <Button variant='primary' type='button' className='shadow-lg border border-dark border-2 m-4'>Show Now</Button>
                <div className='d-flex justify-content-center'>
                    <Card style={{width: '18rem'}} className='text-center border border-dark border-2'>
                        <Card.Img variant='top' src={bikeImage}/>
                        <Card.Body>
                            <Card.Title>Vintage Bike</Card.Title>
                            <Card.Text>
                                This vintage bike is perfect for casual rides and makes any outing a good time.
                            </Card.Text>
                            <Button>View Options</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
}
export default Home