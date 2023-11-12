import { useState, useRef, useEffect } from 'react';

import Support from '../Support';

import logo from '../../assets/img/Logo.png';
import log from '../../assets/icons/login.svg';
import iconSearch from '../../assets/icons/search.png';
import iconBtn1 from '../../assets/icons/header-btn1.png';
import iconBtn2 from '../../assets/icons/header-btn2.svg';
import iconBtn3 from '../../assets/icons/header-btn3.svg';
import iconBtn4 from '../../assets/icons/header-btn4.svg';
import iconBtn5 from '../../assets/icons/header-btn5.svg';
import scales from '../../assets/icons/scales.svg';
import basket from '../../assets/icons/basket.svg';
import heart from '../../assets/icons/heart.png';
import logoWhite from '../../assets/img/white_logo.png';
import scalesWhite from '../../assets/icons/white_scales.png';
import basketWhite from '../../assets/icons/white_basket.png';
import heartWhite from '../../assets/icons/white_heart.png';

const Header = () => {
    const [needSideBar, setNeedSideBar] = useState<boolean>(false);
    const [needBtns, setNeedBtns] = useState<boolean>(false);
    const [needLiDropdown, setNeedLiDropdown] = useState<boolean>(false);
    const [clazzBtns, setClazzBtns] = useState<string>('');

    const bodyRef = useRef(document.body);
    const marginRef = useRef<HTMLElement | null>(null);

    if (needSideBar) bodyRef.current.style.overflow = 'hidden';
    else bodyRef.current.style.overflow = '';

    useEffect(() => {
        document.body.addEventListener('click', removeNeedSideBarForBody);

        marginRef.current = document.querySelector('.header_mobile_margin');

        return () => {
            document.body.removeEventListener('click', removeNeedSideBarForBody);
        };
    }, []);

    const removeNeedSideBarForBody = (e: any) => {
        if (needSideBar && !e.target.closest('.header_sidebar') && !e.target.closest('.header__hamburger')) {
            setNeedSideBar(false);
        }
    };

    const changeNeedBtn = () => {
        if (!needBtns && marginRef.current) {
            marginRef.current.style.transform = 'translateY(238px)';

            const parent = marginRef.current.parentElement;

            if (parent) {
                parent.classList.add('header_mobile_margin_parrent');
            }
        } else if (marginRef.current) {
            marginRef.current.style.transform = 'translateY(0px)';

            const parent = marginRef.current.parentElement;

            if (parent) {
                parent.classList.remove('header_mobile_margin_parrent');
            }
        }

        setClazzBtns(!needBtns ? 'fadeIn' : 'fadeOut');

        setNeedBtns((needBtns) => !needBtns);
    };

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
                            <li
                                className={`header__li arrow_dropdown ${
                                    needLiDropdown ? 'arrow_dropdown_reverse header__li_active' : ''
                                }`}
                                onClick={() => setNeedLiDropdown((needLiDropdown) => !needLiDropdown)}
                            >
                                Про нас
                            </li>
                            <div className={`header__li_dropdown ${needLiDropdown ? 'fadeIn' : 'fadeOut'}`}>
                                <a href="#">Наша команда</a>
                                <a href="#">Партнери</a>
                                <a href="#">Договір</a>
                            </div>
                            <li className="header__li">
                                <a href="#">Каталог продукції</a>
                            </li>
                            <li className="header__li">
                                <a href="#">Оплата і доставка</a>
                            </li>
                            <li className="header__li">
                                <a href="#">Партнери</a>
                            </li>
                            <li className="header__li">
                                <a href="#">Новини</a>
                            </li>
                            <li className="header__li">
                                <a href="#">Контакти</a>
                            </li>
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
                    <div
                        className={`header__hamburger ${needSideBar ? 'header__hamburger_active' : null}`}
                        onClick={() => setNeedSideBar((needSideBar) => !needSideBar)}
                    >
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
                            <Support classes="header_support" />
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
                    <button
                        className={`button_header button_header_active arrow_dropdown ${
                            needBtns ? 'arrow_dropdown_reverse' : null
                        }`}
                        onClick={changeNeedBtn}
                    >
                        <img src={iconBtn1} alt="" />
                        <p>Насіння</p>
                    </button>
                    <button className={`button_header ${clazzBtns}`}>
                        <img src={iconBtn2} alt="" />
                        <p className="maxWidth">Засоби захисту рослин</p>
                    </button>
                    <button className={`button_header ${clazzBtns}`}>
                        <img src={iconBtn3} alt="" />
                        <p>Добрива</p>
                    </button>
                    <button className={`button_header ${clazzBtns}`}>
                        <img src={iconBtn4} alt="" />
                        <p>кормова група</p>
                    </button>
                    <button className={`button_header ${clazzBtns}`}>
                        <img src={iconBtn5} alt="" />
                        <p>Агроному в поміч</p>
                    </button>
                </div>
            </div>
            <div className={`header_sidebar ${needSideBar ? 'header_sidebar_active' : null}`}>
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
                <div className="header_search header_sidebar_search">
                    <input type="text" className="header_search__input" placeholder="Пошук" />
                    <hr className="header_search__hr" />
                    <img src={iconSearch} alt="search" className="header_search__icon" />
                </div>
                <Support classes="header_support header_sidebar_support" classCircle="button_circle_white" />
                <ul className="header_sidebar__ul">
                    <hr className="header_sidebar__hr" />
                    <li className="header__li header_sidebar__li">
                        <a href="#">Про компанію</a>
                    </li>
                    <li className="header__li header_sidebar__li">
                        <a href="#">Каталог продукції</a>
                    </li>
                    <li className="header__li header_sidebar__li">
                        <a href="#">Оплата і доставка</a>
                    </li>
                    <li className="header__li header_sidebar__li">
                        <a href="#">Партнери</a>
                    </li>
                    <li className="header__li header_sidebar__li">
                        <a href="#">Новини</a>
                    </li>
                    <li className="header__li header_sidebar__li">
                        <a href="#">Контакти</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
