import React from 'react';

import Carousel from '../Carousel';

const CarouselGreenBg = ({ title, children }: { title: string; children: any }) => {
    return (
        <div className="carousel_green">
            <h2 className="title title_white left-leaf right-leaf">{title}</h2>
            <Carousel classes="white_dots">{React.Children.map(children, (child) => child)}</Carousel>
            <button className="button button_see-all">Дивитися усі товари</button>
        </div>
    );
};

export default CarouselGreenBg;
