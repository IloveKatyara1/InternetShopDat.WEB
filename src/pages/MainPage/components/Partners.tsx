import { useState } from 'react';

import Carousel from 'Components/Carousel';

import { TObjChangeSlides } from 'helpers/enums';

import partner1 from 'assets/img/partners/partner1.png';
import partner2 from 'assets/img/partners/partner2.png';
import partner3 from 'assets/img/partners/partner3.png';
import partner4 from 'assets/img/partners/partner4.png';
import partner5 from 'assets/img/partners/partner5.png';
import partner6 from 'assets/img/partners/partner6.png';
import partner7 from 'assets/img/partners/partner7.png';

const Partners = () => {
    const [showSlides, setShowSlides] = useState<number>(3);

    if (document.documentElement.clientWidth < 1075 && showSlides !== 2) setShowSlides(2);
    else if (document.documentElement.clientWidth >= 1075 && showSlides !== 3) setShowSlides(3);

    const objChangeSlidesValue: TObjChangeSlides = {
        variants: [
            {
                width: 1075,
                showSlides: 2,
            },
        ],
        deffaultValue: 3,
    };

    return (
        <div className="partners">
            <h2 className="title left-leaf right-leaf">Партнери</h2>
            <Carousel classes="carousel_partners" infinity={false} objChangeSlides={objChangeSlidesValue}>
                <div className="partners_card">
                    <img src={partner1} alt="" />
                </div>
                <div className="partners_card">
                    <img src={partner2} alt="" />
                </div>
                <div className="partners_card">
                    <img src={partner3} alt="" />
                </div>
                <div className="partners_card">
                    <img src={partner4} alt="" />
                </div>
                <div className="partners_card">
                    <img src={partner5} alt="" />
                </div>
                <div className="partners_card">
                    <img src={partner6} alt="" />
                </div>
                <div className="partners_card">
                    <img src={partner7} alt="" />
                </div>
                <div className="partners_card">
                    <img src={partner1} alt="" />
                </div>
                <div className="partners_card">
                    <img src={partner2} alt="" />
                </div>
                <div className="partners_card">
                    <img src={partner3} alt="" />
                </div>
                <div className="partners_card">
                    <img src={partner4} alt="" />
                </div>
                <div className="partners_card">
                    <img src={partner1} alt="" />
                </div>
                <div className="partners_card">
                    <img src={partner2} alt="" />
                </div>
            </Carousel>
        </div>
    );
};

export default Partners;
