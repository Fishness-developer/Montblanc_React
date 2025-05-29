import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../../assets/images/slides/slide_1.jpg';
import slide2 from '../../assets/images/slides/slide_2.jpg';
import slide3 from '../../assets/images/slides/slide_3.jpg';
// Sample images (replace with your own image URLs)
const images = [slide1, slide2, slide3];

const ImageSlider = () => {

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
        <Box >
            <Typography variant="h4" gutterBottom align="center">
                Image Slider
            </Typography>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <Box key={index} sx={{ textAlign: 'center' }}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                        />
                        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                            Slide {index + 1}
                        </Typography>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default ImageSlider;