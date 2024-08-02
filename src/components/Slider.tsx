'use client'
import { Carousel } from 'react-bootstrap'

export default function Slider() {
    const visibleheight = (window.innerHeight - 90)
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    style={{ height: `${visibleheight}px`, objectFit: "cover" }}
                    src="https://images4.alphacoders.com/760/thumb-1920-760846.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    style={{ height: `${visibleheight}px`, objectFit: "cover" }}
                    src="https://static.vecteezy.com/system/resources/previews/032/309/521/large_2x/modern-living-room-with-sofa-and-furniture-ai-generated-free-photo.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    style={{ height: `${visibleheight}px`, objectFit: "cover" }}
                    src="https://www.home-designing.com/wp-content/uploads/2018/10/neutral-wallpaper-accent-wallin-luxury-master-bedroom-with-white-couch-and-accent-chairs.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
