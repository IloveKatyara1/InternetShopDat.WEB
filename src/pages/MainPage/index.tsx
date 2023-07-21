import Agrarian from './components/Agrarian';
import AboutCompany from './components/AboutCompany';
import News from './components/News';
import Discounts from './components/Discounts';
import Partners from './components/Partners';

const MainPage = () => {
    return (
        <main className="main">
            <Agrarian />
            <AboutCompany />
            <News />
            <Discounts />
            <Partners />
        </main>
    );
};

export default MainPage;
