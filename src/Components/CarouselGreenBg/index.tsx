import React from 'react';

import Carousel from '../Carousel';
import CarouselWithData from '../CarouselWithData';

const CarouselGreenBg = (props: any) => {
    return (
        <div className="carousel_green">
            <h2 className="title title_white left-leaf right-leaf">{props.title}</h2>
            {props.link ? (
                <CarouselWithData classes="white_dots" {...props}></CarouselWithData>
            ) : (
                <Carousel classes="white_dots" {...props}>
                    {React.Children.map(props.children, (child) => child)}
                </Carousel>
            )}
            <button className="button button_see-all">Дивитися усі товари</button>
        </div>
    );
};

export default CarouselGreenBg;
