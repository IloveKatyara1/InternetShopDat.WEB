import React, { useEffect, useState, useRef } from 'react';

const Carousel = ({ classes, children }: { classes?: string[] | string; children: any }) => {
    const sliderContent = useRef<any>(null);
    const dotsRef = useRef<any[]>([]);
    const dotsParrentRef = useRef<any>(null);

    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [cantMove, setCantMove] = useState<boolean>(false);
    const [lastActiveDot, setLastActiveDot] = useState<number>(0);

    let showSlides: number = 3;

    console.log(document.documentElement.clientWidth);

    if (document.documentElement.clientWidth < 515) {
        showSlides--;
    }
    if (document.documentElement.clientWidth < 1075) {
        showSlides--;
    }

    const childrenSlides = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            className: child.props.className ? `${child.props.className} carouselComp_slide` : 'carouselComp_slide',
            style: { width: `${100 / showSlides}%` },
        });
    });

    const dots = childrenSlides.map((el: any, i: number) => {
        if (i % showSlides === 0) {
            return (
                <div
                    className="carouselComp__dot"
                    ref={(ref) => dotsRef.current.push(ref)}
                    key={i}
                    onClick={() => setCurrentSlide(i)}>
                    {i}
                </div>
            );
        }
    });

    const fullChildrenList = [
        ...childrenSlides
            .slice(childrenSlides.length - showSlides, childrenSlides.length)
            .map((child: any, index: number) => React.cloneElement(child, { key: `clone-${index}` })),

        ...childrenSlides,

        ...childrenSlides
            .slice(0, showSlides)
            .map((child: any, index: number) =>
                React.cloneElement(child, { key: `clone-${index + childrenSlides.length}` })
            ),
    ];

    const ChangeSlideByBtn = (num: number) => {
        let newCurrent = currentSlide;
        newCurrent += num > 0 ? showSlides : -showSlides;

        setCurrentSlide(newCurrent);
    };

    useEffect(() => {
        dotsParrentRef.current.style.left = 0 + 'px';
    }, []);

    useEffect(() => {
        if (cantMove) {
            return;
        }

        sliderContent.current.style.left = (currentSlide / -showSlides) * 100 - 100 + '%';

        if (currentSlide < 0) {
            timeoutLastFirstSlide(childrenSlides.length - showSlides);
        } else if (currentSlide >= childrenSlides.length) {
            timeoutLastFirstSlide(0);
        } else {
            changeActiveDot(currentSlide);
        }
    }, [currentSlide]);

    const timeoutLastFirstSlide = (frstLast: number) => {
        setCantMove(true);

        changeActiveDot(frstLast);

        setTimeout(() => {
            sliderContent.current.style.transition = '0s all';
            sliderContent.current.style.left = (frstLast / -showSlides) * 100 - 100 + '%';

            setCurrentSlide(frstLast);

            setTimeout(() => {
                setCurrentSlide(frstLast);
                setCantMove(false);

                sliderContent.current.style.transition = '1s all';
            }, 25);
        }, 975);
    };

    const changeActiveDot = (slide: number) => {
        let leftPx: number = 0;

        const correctI = slide / 3;

        if (correctI < 2) {
            leftPx = 0;
        } else if (correctI > childrenSlides.length / 3 - 3) {
            leftPx = -16 * (childrenSlides.length / 3 - 5);
        } else {
            leftPx = -16 * (correctI - 2);
        }

        dotsParrentRef.current.style.left = leftPx + 'px';

        sliderContent.current.style.left = (currentSlide / -showSlides) * 100 - 100 + '%';

        setLastActiveDot(slide / showSlides);

        dotsRef.current[lastActiveDot].classList.remove('carouselComp__dot_active');
        dotsRef.current[slide / showSlides].classList.add('carouselComp__dot_active');
    };

    let mouseStart: number;

    const onStart = (e: any) => {
        if (cantMove) return;

        mouseStart = e.nativeEvent.targetTouches[0].clientX;

        sliderContent.current.style.transition = '0s all';
    };

    const onMove = (e: any) => {
        let move = e.nativeEvent.targetTouches[0].clientX;

        if (cantMove) return;
        if (mouseStart - move > 400 || mouseStart - move < -400) return;

        sliderContent.current.style.left = (currentSlide / -showSlides) * 100 - 100 - (mouseStart - move) / 4 + '%';
    };

    const onEnd = (e: any) => {
        sliderContent.current.style.transition = '1s all';

        let end = mouseStart - e.nativeEvent.changedTouches[0].clientX;

        if (end > 100) setCurrentSlide((currentSlide) => currentSlide + showSlides);
        else if (end < -100) setCurrentSlide((currentSlide) => currentSlide - showSlides);
        else sliderContent.current.style.left = (currentSlide / -showSlides) * 100 - 100 + '%';
    };

    let clazz: string = ' ';

    if (classes) {
        clazz = Array.isArray(classes) ? classes.join(', ') : classes;
    }

    return (
        <>
            <div className={`carouselComp ${clazz}`}>
                <button className="carouselComp__btn carouselComp__prev" onClick={() => ChangeSlideByBtn(-1)}>
                    &#8592;
                </button>
                <div className="carouselComp__inner">
                    <div
                        className="carouselComp__content"
                        style={{ width: (fullChildrenList.length / showSlides) * 100 + '%' }}
                        ref={sliderContent}
                        onTouchStart={onStart}
                        onTouchMove={onMove}
                        onTouchEnd={onEnd}>
                        {fullChildrenList}
                    </div>
                </div>
                <button className="carouselComp__btn carouselComp__next" onClick={() => ChangeSlideByBtn(1)}>
                    &#8594;
                </button>
            </div>
            <div className="carouselComp__dots_wrapper_parent">
                <div className="carouselComp__dots_wrapper" ref={dotsParrentRef}>
                    {dots}
                </div>
            </div>
        </>
    );
};

export default Carousel;
