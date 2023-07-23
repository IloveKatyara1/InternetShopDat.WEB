import Header from './Components/Header';
import Footer from './Components/Footer';
import MainPage from './pages/MainPage';

import './assets/scss/style.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <MainPage />
            <Footer />
        </div>
    );
}

export default App;
