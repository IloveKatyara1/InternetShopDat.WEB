import Agrarian from './components/Agrarian';
import AboutCompany from './components/AboutCompany';
import News from './components/News';

const MainPage = () => {
    return (
        <main className="main">
            <Agrarian />
            <AboutCompany />
            <News />
        </main>
    );
};

export default MainPage;
