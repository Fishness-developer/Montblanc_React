import React, { useEffect, useState } from 'react';
import CaruselItem from '../CaruselItem/CaruselItem.jsx';
import slide1 from '../../assets/images/slides/slide_1.jpg';
import slide2 from '../../assets/images/slides/slide_2.jpg';
import slide3 from '../../assets/images/slides/slide_3.jpg';

const Carusel = () => {
    const itemData = [
        {
            id: 1,
            img: slide1,
            title: 'Breakfast1',
        },
        {
            id: 2,
            img: slide2,
            title: 'Breakfast2',
        },
        {
            id: 3,
            img: slide3,
            title: 'Breakfast3',
        },
    ];

    const [index, setIndex] = useState(0);

    // Автоматическое переключение слайдов
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % itemData.length);
        }, 5000);

        // Очистка интервала при размонтировании компонента
        return () => clearInterval(interval);
    }, [itemData.length]);

    return (
        <>
            {itemData.map((photo, idx) =>
                index === idx ? (
                    <CaruselItem key={photo.id} image={photo.img} title={photo.title} />
                ) : null
            )}
        </>
    );
};

export default Carusel;