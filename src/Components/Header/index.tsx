import logo from '../../assets/img/Logo.png';
import log from '../../assets/icons/login.svg';
import iconSearch from '../../assets/icons/search.png';
import iconBtn1 from '../../assets/icons/header-btn1.png';
import iconBtn2 from '../../assets/icons/header-btn2.svg';
import iconBtn3 from '../../assets/icons/header-btn3.svg';
import iconBtn4 from '../../assets/icons/header-btn4.svg';
import iconBtn5 from '../../assets/icons/header-btn5.svg';
import phone from '../../assets/icons/phone.svg';
import scales from '../../assets/icons/scales.svg';
import basket from '../../assets/icons/basket.svg';
import heart from '../../assets/icons/heart.png';
import logoWhite from '../../assets/img/white_logo.png';
import phoneWhite from '../../assets/icons/white_phone.png';
import scalesWhite from '../../assets/icons/white_scales.png';
import basketWhite from '../../assets/icons/white_basket.png';
import heartWhite from '../../assets/icons/white_heart.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header_top">
                <div className="container">
                    <div className="header_nav_right header_nav_right_mobile">
                        <img className="header_nav_right__img" src={log} alt="" />
                        <div className="header_nav_right_text">
                            <h3 className="header_nav_right_sign">Вхід</h3>
                            <hr className="header_nav__hr" />
                            <h3 className="header_nav_right_sign">Реестрація</h3>
                        </div>
                    </div>
                    <nav className="header_nav">
                        <ul className="header_nav__ul">
                            <hr className="header_nav__hr_mobile" />
                            <a href="#">
                                <li className="header__li arrow_dropdown">Про нас</li>
                            </a>
                            <a href="#">
                                <li className="header__li">Каталог продукції</li>
                            </a>
                            <a href="#">
                                <li className="header__li">Оплата і доставка</li>
                            </a>
                            <a href="#">
                                <li className="header__li">Партнери</li>
                            </a>
                            <a href="#">
                                <li className="header__li">Новини</li>
                            </a>
                            <a href="#">
                                <li className="header__li">Контакти</li>
                            </a>
                        </ul>
                        <hr className="header_nav__hr" />
                        <div className="header_nav_right">
                            <img className="header_nav_right__img" src={log} alt="" />
                            <div className="header_nav_right_text">
                                <h3 className="header_nav_right_sign">Вхід</h3>
                                <hr className="header_nav__hr" />
                                <h3 className="header_nav_right_sign">Реестрація</h3>
                            </div>
                        </div>
                    </nav>
                    <div className="header__hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="header_midle">
                <div className="container">
                    <div className="header_midle_content">
                        <div className="header_midle_left">
                            <img src={logo} alt="DAT" className="header__logo" />
                            <div className="header_search">
                                <input type="text" className="header_search__input" placeholder="Пошук" />
                                <hr className="header_search__hr" />
                                <img src={iconSearch} alt="search" className="header_search__icon" />
                            </div>
                        </div>
                        <div className="header_midle_right">
                            <div className="header_support">
                                <button className="button_circle">
                                    <img src={phone} alt="phone" />
                                </button>
                                <div className="header_support_wrapper">
                                    <a href="tel:+380671150058" className="header_support__phone arrow_dropdown">
                                        +38 (067) 115 00 58
                                    </a>
                                    <a href="#" className="header_support__descr">
                                        Замовити зворотній зв’язок
                                    </a>
                                </div>
                            </div>
                            <div className="header_circles">
                                <button className="button_circle">
                                    <img src={heart} alt="вподобані" />
                                </button>
                                <button className="button_circle">
                                    <img src={scales} alt="ваги" />
                                </button>
                                <button className="button_circle">
                                    <img src={basket} alt="корзина" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_bottom">
                <div className="container header_bottom_container">
                    <button className="button_header button_header_active">
                        <img src={iconBtn1} alt="" />
                        <p className="arrow_dropdown">Насіння</p>
                    </button>
                    <button className="button_header">
                        <img src={iconBtn2} alt="" />
                        <p className="maxWidth">Засоби захисту рослин</p>
                    </button>
                    <button className="button_header">
                        <img src={iconBtn3} alt="" />
                        <p>Добрива</p>
                    </button>
                    <button className="button_header">
                        <img src={iconBtn4} alt="" />
                        <p>кормова група</p>
                    </button>
                    <button className="button_header">
                        <img src={iconBtn5} alt="" />
                        <p>Агроному в поміч</p>
                    </button>
                </div>
                <div className="container header_bottom_container_mobile">
                    <button className="button_header button_header_active arrow_dropdown">
                        <img src={iconBtn1} alt="" />
                        <p>Насіння</p>
                    </button>
                    <button className="button_header">
                        <img src={iconBtn2} alt="" />
                        <p className="maxWidth">Засоби захисту рослин</p>
                    </button>
                    <button className="button_header">
                        <img src={iconBtn3} alt="" />
                        <p>Добрива</p>
                    </button>
                    <button className="button_header">
                        <img src={iconBtn4} alt="" />
                        <p>кормова група</p>
                    </button>
                    <button className="button_header">
                        <img src={iconBtn5} alt="" />
                        <p>Агроному в поміч</p>
                    </button>
                </div>
            </div>
            <div className="header_sidebar">
                <div className="header_sidebar_top">
                    <img src={logoWhite} alt="white logo" className="header__logo" />
                    <div className="header_circles">
                        <button className="button_circle button_circle_white">
                            <img src={heartWhite} alt="вподобані" />
                        </button>
                        <button className="button_circle button_circle_white">
                            <img src={scalesWhite} alt="ваги" />
                        </button>
                        <button className="button_circle button_circle_white">
                            <img src={basketWhite} alt="корзина" />
                        </button>
                    </div>
                </div>
                <div className="header_search">
                    <input type="text" className="header_search__input" placeholder="Пошук" />
                    <hr className="header_search__hr" />
                    <img src={iconSearch} alt="search" className="header_search__icon" />
                </div>
                <div className="header_support">
                    <button className="button_circle button_circle_white">
                        <img src={phoneWhite} alt="phone" />
                    </button>
                    <div className="header_support_wrapper">
                        <a href="tel:+380671150058" className="header_support__phone arrow_dropdown">
                            +38 (067) 115 00 58
                        </a>
                        <a href="#" className="header_support__descr">
                            Замовити зворотній зв’язок
                        </a>
                    </div>
                </div>
                <ul className="header_sidebar__ul">
                    <hr className="header_sidebar__hr" />
                    <a href="#">
                        <li className="header__li">Про компанію</li>
                    </a>
                    <a href="#">
                        <li className="header__li">Каталог продукції</li>
                    </a>
                    <a href="#">
                        <li className="header__li">Оплата і доставка</li>
                    </a>
                    <a href="#">
                        <li className="header__li">Партнери</li>
                    </a>
                    <a href="#">
                        <li className="header__li">Новини</li>
                    </a>
                    <a href="#">
                        <li className="header__li">Контакти</li>
                    </a>
                </ul>
            </div>
        </header>
    );
};

export default Header;
