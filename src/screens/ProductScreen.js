import React, {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, ListGroup, Image } from 'react-bootstrap'
// import products from '../products'
import Rating from "../components/Rating"
import { Card , Button} from 'react-bootstrap'
import axios from 'axios'
function ProductScreen(match) {
    const { id } = useParams();
    // const product = products.find((p)=>p._id === id);
    const [product,setProduct] = useState([])
    useEffect(() => {
        async function fetchProduct(){
          const {data} =await axios.get(`/api/products/${id}`)
          console.log('hello')
          setProduct(data)
        }
        fetchProduct()
      }, [])
  return (
    <div>
        <Link to='/' className='btn btn-light my-3'> Go Back</Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
                <ListGroup virant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`}  color = {"#f8e825" }/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                         Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                         Descripition: ${product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <ListGroup virant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col> Price:</Col>
                            <Col>
                            <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col> Status:</Col>
                            <Col>
                               {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: '100%', maxWidth: '200px' }}> {/* Adjust maxWidth as needed */}
                                <Button className='btn-block w-100' type='button' disabled={product.countInStock === 0}>Add To Cart</Button>
                            </div>
                    </ListGroup.Item>

                </ListGroup>
            </Col>
        </Row>
    </div>
  )
}

export default ProductScreen