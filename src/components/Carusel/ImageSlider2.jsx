import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
                                    {/*<Typography variant="caption" display="block" sx={{mt: 1}}>*/}
                                    {/*    Slide {item.id}*/}
                                    {/*</Typography>*/}
                                </Box>
                            ))}
                        </Slider>
                    </Box>



        </section>

);
};

export default ImageSlider2;