import { useState, useEffect } from 'react';

import { useHttp } from '../../hooks/http.hook';
import setComponent from '../../utils/setComponent';

import Carousel from '../Carousel';
import Card from '../Card';

type ItemDataBase = {
    img: string;
    name: string;
    href: string;
    price: number;
    itemsAvailable: number;
};

const CarouselWithData = (props: any) => {
    const { getData, resetError, state, setState } = useHttp();

    const [childrenList, setChildrenList] = useState<any>();

    useEffect(() => {
        getDataForCarousel();
    }, []);

    const getDataForCarousel = async () => {
        const dataList: ItemDataBase[] | void = await getData(props.link);

        if (dataList && state !== 'error') {
            setChildrenList(
                dataList.map((item: ItemDataBase, i: number) => {
                    return (
                        <Card
                            img={item.img}
                            itemsAvailable={item.itemsAvailable}
                            name={item.name}
                            price={item.price}
                            link={item.href}
                            key={i}
                        />
                    );
                })
            );
            setState('success');
        }
    };

    return setComponent(state, () => <Carousel {...props}>{childrenList}</Carousel>);
};

export default CarouselWithData;
