import CarouselWithData from '../../../Components/CarouselWithData';

const News = () => {
    return (
        <section className="news">
            <h2 className="title left-leaf right-leaf">Новинки</h2>
            <CarouselWithData link="http://localhost:3000/news" />
        </section>
    );
};

export default News;
