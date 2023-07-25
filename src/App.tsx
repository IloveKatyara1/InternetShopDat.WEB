import Header from './Components/Header';
import Footer from './Components/Footer';
import PageUp from './Components/PageUp';

import MainPage from './pages/MainPage';

import './assets/scss/style.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <MainPage />
            <Footer />
            <PageUp />
        </div>
    );
}

export default App;
