import React, { useContext, useEffect } from "react";
import './Footer.css'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { LanguageContext } from '../../contexts/LanguageContext';

const Footer = () => {
    
    var { language } = useContext(LanguageContext);

    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__menu">
                        {language === 'ru' ? <div className="footer__menu__block">
                        
                        <span className="footer__menu__title">ОФ ТЕХНОЛЭНД</span>
                        <Link to="/about" className="footer__menu__link">О нас</Link>
                        <Link to="/partners" className="footer__menu__link">Наши партнеры</Link>
                        <Link to="/materials" className="footer__menu__link">Материалы <br />для скачивания</Link>
                        <Link to="/admin_panel" className="footer__menu__link">Админ-панель</Link>
                    </div> : <div className="footer__menu__block">
                        
                        <span className="footer__menu__title">OF TECHNOLAND</span>
                        <Link to="/about" className="footer__menu__link">About Us</Link>
                        <Link to="/partners" className="footer__menu__link">Our Partners</Link>
                        <Link to="/materials" className="footer__menu__link">Materials <br />for download</Link>
                        <Link to="/admin_panel" className="footer__menu__link">Admin Panel</Link>
                    </div>
                    }

                    {language === 'ru' ? <div className="footer__menu__block">
                        <span className="footer__menu__title">КАК СВЯЗАТЬСЯ?</span>
                        <Link to="/contacts" className="footer__menu__link">Контакты</Link>
                        <Link to="/contacts" className="footer__menu__link">Обратная связь</Link>
                        <a href="https://wa.me/+996722322652?text=Здравствуйте, пишу с сайта Technoland-pf.kg!"><span className="footer__menu__link"><WhatsAppIcon />WhatsApp</span></a>
                        <a href="tel:+996-772-322-652"><span className="footer__menu__link"><CallIcon />0772-322-652</span></a>
                    </div> : <div className="footer__menu__block">
                        <span className="footer__menu__title">HOW TO CONTACT?</span>
                        <Link to="/contacts" className="footer__menu__link">Contact</Link>
                        <Link to="/contacts" className="footer__menu__link">Feedback</Link>
                        <a href="https://wa.me/+996722322652?text=Здравствуйте, пишу с сайта Technoland-pf.kg!"><span className="footer__menu__link"><WhatsAppIcon />WhatsApp</span></a>
                        <a href="tel:+996-772-322-652"><span className="footer__menu__link"><CallIcon />0772-322-652</span></a>
                    </div>
                    }

                    {language === 'ru' ? <div className="footer__menu__block">
                        <span className="footer__menu__title">НОВОСТИ</span>
                        <Link to="/news"><span className="footer__menu__link">Лента</span></Link>
                        <Link to="/favourite-news"><span className="footer__menu__link">Избранное</span></Link>
                    </div> : <div className="footer__menu__block">
                        <span className="footer__menu__title">NEWS</span>
                        <Link to="/news"><span className="footer__menu__link">Ribbon</span></Link>
                        <Link to="/favourite-news"><span className="footer__menu__link">Favorites</span></Link>
                    </div>
                    }
                
                    
                    <div className="footer__menu__block">
                    {language === 'ru' ? <span className="footer__menu__title">МЫ В СОЦСЕТЯХ</span> : <span className="footer__menu__title">WE ARE IN SOCIETY</span>}
                        
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100047992961210"><span className="footer__menu__link"><FacebookIcon /> facebook</span></a>
                        <a target="_blank" href="https://www.instagram.com/of_technoland/"><span className="footer__menu__link"><InstagramIcon /> instagram</span></a>
                        <a target="_blank" href="https://studio.youtube.com/channel/UCZBtXh9Dq4CFdTTj5lM8bJA/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D"><span className="footer__menu__link"><YouTubeIcon /> YouTube</span></a>
                    </div>
                </div>
                <div className="footer__horizontal-line"></div>
                <div className="footer__info__blick">
                {language === 'ru' ? <p className="footer__info__block__text">
                        © 2021 | Кыргызстан, г.Бишкек
                        ул. Туголбай Ата 67/123 | Общественный фонд «Технолэнд» создан в соответствии с Конституцией Кыргызской Республики, Гражданским кодексом Кыргызской Республики, Законом Кыргызской Республики «О некоммерческих организациях» и другими нормативными правовыми актами Кыргызской Республики.
                    </p> : <p className="footer__info__block__text">
                    © 2021 | Kyrgyzstan, Bishkek 67/123, Tugolbai Ata str. Tugolbai Ata 67/123 | Public Foundation "Technoland" was established in accordance with the Constitution of the Kyrgyz Republic, the Civil Code of the Kyrgyz Republic, the Law of the Kyrgyz Republic "On non-profit organizations" and other normative legal acts of the Kyrgyz Republic.
                    </p>}
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;