import { Button, Carousel } from 'react-bootstrap';
import React from 'react'
import data from '../shared/constant/constantData';

const MycarouselComp = () => {
    return (
        <div>
            <h2>My carousel component </h2>
            <Button>React Button</Button>
            <Button variant='success'>React Button</Button>
            <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={data.bike3} height={'500px'} width={'500px'}/>
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={data.bike1} height={'500px'} width={'500px'} />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={data.bike2} height={'500px'} width={'500px'}  />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default MycarouselComp ;