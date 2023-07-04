import React from 'react';
import Header from './Components/Header';

import MainPage from './pages/MainPage';

import './assets/scss/style.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <MainPage />
        </div>
    );
}

export default App;
