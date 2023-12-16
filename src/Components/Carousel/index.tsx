import React, { useEffect, useState, useRef } from 'react';

import { TObjChangeSlides } from 'helpers/enums';

const Carousel = ({
    classes,
    children,
    showSlidesProp,
    infinity = true,
    objChangeSlides,
}: {
    classes?: string[] | string;
    children: any;
    showSlidesProp?: number;
    infinity?: boolean;
    objChangeSlides?: TObjChangeSlides;
}) => {
    const [showSlides, setShowSlides] = useState<number>(showSlidesProp || 3);
    const [lastShowSlides, setLastShowSlides] = useState(showSlides);

    const childrenSlides: any = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            className: child.props.className ? `${child.props.className} carouselComp_slide` : 'carouselComp_slide',
            style: { width: `${100 / showSlides}%` },
        });
    });

    const getCorrectDots = (): any[] => {
        const newDots: any[] = [];

        childrenSlides.forEach((el: any, i: number) => {
            if (i % showSlides === 0) {
                newDots.push(
                    <div
                        className="carouselComp__dot"
                        ref={(ref) => (dotsRef.current[i / showSlides] = ref)}
                        key={i}
                        onClick={() => setCurrentSlide(i)}>
                        {i}
                    </div>
                );
            }
        });

        return newDots;
    };

    const sliderContent = useRef<any>(null);
    const dotsRef = useRef<any[]>([]);
    const dotsParrentRef = useRef<any>(null);

    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [cantMove, setCantMove] = useState<boolean>(false);
    const [lastActiveDot, setLastActiveDot] = useState<number>(0);
    const [dots, setDots] = useState<any[]>(getCorrectDots());
    const [extraSlidesCount, setExtraSlidesCount] = useState(childrenSlides.length % showSlides);

    if (dots.length <= 5) infinity = false;

    const giveMinusUninfinity = infinity ? -100 : 0;

    const fullChildrenList: [] = infinity
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

    const onResize = () => {
        if (!objChangeSlides) {
            if (document.documentElement.clientWidth < 515) setShowSlides(1);
            else if (document.documentElement.clientWidth < 1075) setShowSlides(2);
            else setShowSlides(3);
        } else {
            let wasChanged: boolean = false;

            const variants = objChangeSlides['variants'];

            variants.forEach((obj) => {
                if (document.documentElement.clientWidth < obj['width']) {
                    setShowSlides(obj['showSlides']);
                    wasChanged = true;
                }
            });

            if (!wasChanged) setShowSlides(objChangeSlides['deffaultValue']);
        }
    };

    useEffect(() => {
        if (dots.length >= 5) dotsParrentRef.current.style.cssText = 'position: absolute;';
        else dotsParrentRef.current.style.cssText = 'position: static; justify-content: center;';

        onChangeCurrentSlide();
    }, [dots]);

    useEffect(() => {
        onResize();

        if (dots.length >= 5) dotsParrentRef.current.style.left = 0 + 'px';
        else dotsParrentRef.current.style.cssText = 'position: static; justify-content: center;';

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    useEffect(() => {
        const newCurrentSlide = (() => {
            if (currentSlide % showSlides !== 0 || showSlides == 1) {
                if (lastShowSlides > showSlides) return currentSlide + (currentSlide % showSlides);
                else return currentSlide - (currentSlide % showSlides);
            }

            return currentSlide;
        })();

        // const futureCurrentSlide: number = (() => {
        //     if (lastShowSlides > showSlides)
        //         return currentSlide === lastShowSlides ? showSlides : currentSlide - (currentSlide % showSlides);
        //     else if(lastShowSlides < showSlides)
        //         return currentSlide === lastShowSlides
        //             ? showSlides
        //             : currentSlide + (showSlides - (currentSlide % showSlides));
        //     else if(showSlides == 1)
        //         return currentSlide

        // })();

        setExtraSlidesCount(childrenSlides.length % showSlides);
        setDots(getCorrectDots());
        setCurrentSlide(newCurrentSlide);
        setLastShowSlides(showSlides);
        setLastActiveDot(newCurrentSlide / showSlides);
    }, [showSlides]);

    useEffect(() => {
        onChangeCurrentSlide();
    }, [currentSlide]);

    const onChangeCurrentSlide = () => {
        if (cantMove) return;

        sliderContent.current.style.left = -(currentSlide / showSlides) * 100 + giveMinusUninfinity + '%';

        console.log(
            'useEffect currentSlide',
            currentSlide,
            'currentSlide',
            childrenSlides.length,
            'childrenSlides.length'
        );

        if (currentSlide < 0 && infinity) {
            console.log('if');

            if (extraSlidesCount)
                sliderContent.current.style.left =
                    -((currentSlide - extraSlidesCount) / showSlides) * 100 + giveMinusUninfinity - 100 + '%';

            timeoutLastFirstSlide(childrenSlides.length - (extraSlidesCount || showSlides));
        } else if (currentSlide >= childrenSlides.length - extraSlidesCount && infinity) {
            console.log('else if');
            if (extraSlidesCount)
                sliderContent.current.style.left =
                    -((currentSlide - showSlides + extraSlidesCount) / showSlides) * 100 + giveMinusUninfinity + '%';

            timeoutLastFirstSlide(0);
        } else {
            console.log('else');
            changeActiveDot(currentSlide);
        }
    };

    const timeoutLastFirstSlide = (frstLast: number) => {
        setCantMove(true);

        changeActiveDot(frstLast);

        setTimeout(() => {
            if (sliderContent.current !== null) {
                sliderContent.current.style.transition = '0s all';
                sliderContent.current.style.left = -(frstLast / showSlides) * 100 + giveMinusUninfinity + '%';
            }

            setCurrentSlide(frstLast);

            setTimeout(() => {
                setCurrentSlide(frstLast);
                setCantMove(false);

                if (sliderContent.current !== null) sliderContent.current.style.transition = '1s all';
            }, 25);
        }, 975);
    };

    const changeActiveDot = (slide: number) => {
        let leftPx: number = 0;

        const correctI = slide / showSlides;

        if (correctI > childrenSlides.length / showSlides - 3) {
            leftPx = -16 * (childrenSlides.length / showSlides - 5);
        } else if (!(correctI < 2)) {
            leftPx = -16 * (correctI - 2);
        }

        if (dots.length > 5) dotsParrentRef.current.style.left = leftPx + 'px';

        console.log(
            slide / showSlides,
            'slide / showSlides',
            slide,
            'slide',
            showSlides,
            'showSlides',
            dotsRef,
            'dotsRef',
            dots,
            'dots'
        );

        dotsRef.current[lastActiveDot].classList.remove('carouselComp__dot_active');
        dotsRef.current[slide / showSlides].classList.add('carouselComp__dot_active');

        setLastActiveDot(slide / showSlides);
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

        sliderContent.current.style.left = (currentSlide / -showSlides) * 100 + giveMinusUninfinity - move / 4 + '%';
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
        else sliderContent.current.style.left = (currentSlide / -showSlides) * 100 + giveMinusUninfinity + '%';
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
