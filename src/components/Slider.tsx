'use client'
import { Carousel } from 'react-bootstrap'

export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    style={{ height: "700px", objectFit: "cover" }}
                    src="https://images4.alphacoders.com/260/260758.jpg"
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
                    style={{ height: "700px", objectFit: "cover" }}
                    src="https://c4.wallpaperflare.com/wallpaper/348/947/720/sofa-lamp-shelves-wallpaper-preview.jpg"
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
                    style={{ height: "700px", objectFit: "cover" }}
                    src="https://c4.wallpaperflare.com/wallpaper/297/717/246/5bd1c5ae6d201-wallpaper-preview.jpg"
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
