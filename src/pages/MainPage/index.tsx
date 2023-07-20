import Agrarian from './components/Agrarian';
import AboutCompany from './components/AboutCompany';
import News from './components/News';
import Discounts from './components/Discounts';

const MainPage = () => {
    return (
        <main className="main">
            <Agrarian />
            <AboutCompany />
            <News />
            <Discounts />
        </main>
    );
};

export default MainPage;
