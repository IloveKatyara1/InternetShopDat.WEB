import React, { useEffect, useState, useRef } from 'react';

const Carousel = ({
    classes,
    children,
    showSlidesProp,
    infinity = true,
}: {
    classes?: string[] | string;
    children: any;
    showSlidesProp?: number;
    infinity?: boolean;
}) => {
    const sliderContent = useRef<any>(null);
    const dotsRef = useRef<any[]>([]);
    const dotsParrentRef = useRef<any>(null);

    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [cantMove, setCantMove] = useState<boolean>(false);
    const [lastActiveDot, setLastActiveDot] = useState<number>(0);

    const needMinus = infinity ? 100 : 0;

    let showSlides: number = showSlidesProp || 3;

    if (document.documentElement.clientWidth < 515 && !showSlidesProp) {
        showSlides--;
    }
    if (document.documentElement.clientWidth < 1075 && !showSlidesProp) {
        showSlides--;
    }

    const childrenSlides: any = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            className: child.props.className ? `${child.props.className} carouselComp_slide` : 'carouselComp_slide',
            style: { width: `${100 / showSlides}%` },
        });
    });

    const dots: any = [];

    childrenSlides.forEach((el: any, i: number) => {
        if (i % showSlides === 0) {
            dots.push(
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

    if (dots.length <= 5) infinity = false;

    let fullChildrenList: [] = !infinity
        ? [
              ...childrenSlides
                  .slice(childrenSlides.length - showSlides, childrenSlides.length)
                  .map((child: any, index: number) => React.cloneElement(child, { key: `clone-${index}` })),

              ...childrenSlides,

              ...childrenSlides
                  .slice(0, showSlides)
                  .map((child: any, index: number) =>
                      React.cloneElement(child, { key: `clone-${index + childrenSlides.length}` })
                  ),
          ]
        : childrenSlides;

    const ChangeSlideByBtn = (num: number) => {
        if (
            (num < 0 && currentSlide <= 0 && !infinity) ||
            (num > 0 && currentSlide >= childrenSlides.length - showSlides && !infinity)
        ) {
            return;
        }

        let newCurrent = currentSlide;
        newCurrent += num > 0 ? showSlides : -showSlides;

        setCurrentSlide(newCurrent);
    };

    useEffect(() => {
        if (dots.length >= 5) dotsParrentRef.current.style.left = 0 + 'px';
        else dotsParrentRef.current.style.cssText = 'position: static; justify-content: center;';
    }, []);

    useEffect(() => {
        if (cantMove) {
            return;
        }

        sliderContent.current.style.left = (currentSlide / -showSlides) * 100 - needMinus + '%';

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

        const correctI = slide / showSlides;

        if (correctI < 2) {
            leftPx = 0;
        } else if (correctI > childrenSlides.length / showSlides - 3) {
            leftPx = -16 * (childrenSlides.length / showSlides - 5);
        } else {
            leftPx = -16 * (correctI - 2);
        }

        if (dots.length > 5) dotsParrentRef.current.style.left = leftPx + 'px';

        sliderContent.current.style.left = (currentSlide / -showSlides) * 100 - needMinus + '%';

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
        let move = mouseStart - e.nativeEvent.targetTouches[0].clientX;

        if (
            cantMove ||
            move > 400 ||
            move < -400 ||
            (move < 0 && currentSlide <= 0 && !infinity) ||
            (move > 0 && currentSlide >= childrenSlides.length - showSlides && !infinity)
        ) {
            return;
        }

        sliderContent.current.style.left = (currentSlide / -showSlides) * 100 - needMinus - move / 4 + '%';
    };

    const onEnd = (e: any) => {
        sliderContent.current.style.transition = '1s all';

        let end = mouseStart - e.nativeEvent.changedTouches[0].clientX;

        if (
            (end < 0 && currentSlide <= 0 && !infinity) ||
            (end > 0 && currentSlide >= childrenSlides.length - showSlides && !infinity)
        ) {
            return;
        }

        if (end > 100) setCurrentSlide((currentSlide) => currentSlide + showSlides);
        else if (end < -100) setCurrentSlide((currentSlide) => currentSlide - showSlides);
        else sliderContent.current.style.left = (currentSlide / -showSlides) * 100 - needMinus + '%';
    };

    let clazz: string = '';

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
            <div className={`carouselComp__dots_wrapper_parent ${clazz}__dots_wrapper_parent`}>
                <div className={`carouselComp__dots_wrapper ${clazz}__dots_wrapper`} ref={dotsParrentRef}>
                    {dots}
                </div>
            </div>
        </>
    );
};

export default Carousel;
