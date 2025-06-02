import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider2.css'
// Импортируйте JSON
import imageData from '../../data/data2.json';

const ImageSlider2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        adaptiveHeight: true,
    };

    return (
        <section className="slider">


                    <Box>
                        {/*<Typography variant="h4" gutterBottom align="center">*/}
                        {/*    Image Slider*/}
                        {/*</Typography>*/}
                        <Slider {...settings}>
                            {imageData.map((item) => (
                                <Box key={item.id} sx={{textAlign: 'center'}}>
                                    <img
                                        src={item.src}
                                        alt={`Slide ${item.id}`}
                                    />
                                    <div className="description">
                                        <h2>{item.title}</h2>
                                        <p className="price">from <span>{item.price}</span> ₪ / kg</p>
                                        <p className="text">{item.description} </p>
                                    </div>
                                </Box>
                            ))}
                        </Slider>
                    </Box>



        </section>

);
};

export default ImageSlider2;