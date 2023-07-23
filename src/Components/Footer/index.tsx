import Support from '../Support';

import logo from '../../assets/img/Logo.png';
import email from '../../assets/icons/email.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_colum">
                        <a href="#">
                            <img src={logo} alt="logo" className="footer__logo" />
                        </a>
                        <p className="footer__logo_descr">Пропонуємо покупцям широкий вибір насіння овочів</p>
                    </div>
                    <div className="footer_colum">
                        <h3 className="footer__title">Інформація</h3>
                        <ul className="footer__ul">
                            <li className="footer__li">
                                <a href="#">Про компанію</a>
                            </li>
                            <li className="footer__li">
                                <a href="#">Оплата і доставка</a>
                            </li>
                            <li className="footer__li">
                                <a href="#">Партнери</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_colum">
                        <h3 className="footer__title">Товари</h3>
                        <ul className="footer__ul">
                            <li className="footer__li">
                                <a href="#">Каталог продукції</a>
                            </li>
                            <li className="footer__li">
                                <a href="#">Засоби захисту рослин</a>
                            </li>
                            <li className="footer__li">
                                <a href="#">Насіння</a>
                            </li>
                            <li className="footer__li">
                                <a href="#">Добрива</a>
                            </li>
                            <li className="footer__li">
                                <a href="#">Агроному в поміч</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_colum">
                        <h3 className="footer__title">Контакти</h3>
                        <div className="footer_contacts_wrapper">
                            <Support classes={'footer_support'} />
                            <div className="footer_email">
                                <button className="button_circle">
                                    <img src={email} alt="email" />
                                </button>
                                <a href="email:DAT@gmail.com" className="footer_email__link">
                                    DAT@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="footer__hr" />
                <p className="footer__copy">© 2022 DAT</p>
            </div>
        </footer>
    );
};

export default Footer;
