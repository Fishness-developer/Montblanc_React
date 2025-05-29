import React from 'react';
import Slider from 'react-slick';
import {Box, Typography} from '@mui/material';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './SimpleSlider.css'
// Импортируйте JSON
import imageData from '../../data/data2.json';

const SimpleSlider = () => {
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
        <Box className="slider">

            <Slider {...settings} >
                {imageData.map((item) => (

                    <Box key={item.id} className="slider__items-inner">
                        <img src={item.src} alt={`Slide ${item.id}`}/>
                        <Typography className="description">
                            <h2>{item.title}</h2>
                            <p className="price">from <span>{item.price}</span> ₪ / kg</p>
                            <p className="text">{item.description} </p>
                        </Typography>
                    </Box>


                ))}
            </Slider>


        </Box>
    );
};

export default SimpleSlider;