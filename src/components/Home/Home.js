import React, { useContext, useEffect } from "react";
import "./Home.css";
import Activities from "../Activities/Activities";
import NewsCard from "../NewsCard/NewsCard";
import Header from "../Header/Header";
import StickyNavBar from "../StickyNavBar/StickyNavBar";
import MobileStoreButton from "react-mobile-store-button";

import mediaPrimer from "../../assets/images/boy.png";
import signLangAr from "../../assets/images/sign-lang-ar.png";
import signLangFam from "../../assets/images/sign-lang-fam.png";
import signLangWorld from "../../assets/images/sign-lang-world.png";
import signLangDilgirim from "../../assets/images/sign-lang-dilgirim.png";
import Appstore from "../../assets/images/appstore.png";
import GooglePlay from "../../assets/images/playstore.png";
import { Link } from "react-router-dom";
//дактильная михаил добавил
import dakt from "../../assets/images/dakt.jpeg";
import ris from "../../assets/images/ris.jpeg";
import ris2 from "../../assets/images/tmrs.png";
import News from "../News/News";
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { LanguageContext } from '../../contexts/LanguageContext';


const Home = () => {

  const { language } = useContext(LanguageContext);

  return (
    <>
      <StickyNavBar />
      <Header />
      <div className="our-jobs">
        <div className="our-jobs__container">
        {language === 'ru' ? <h1 className="our-jobs__container__title">Наши разработки</h1> : <h1 className="our-jobs__container__title">Our developments</h1>}
        {language === 'ru' ? <h2 className="our-jobs__container__desciption">Большая часть наших работ направлена на продвижение ИКТ технологий,
            повышающих качество жизни социально уязвимых слоев населения путем
            внедрения отзывчивых политик, программ и услуг</h2> : <h2 className="our-jobs__container__desciption">Most of our work is aimed at promoting ICT technologies, that improve the quality of life for vulnerable populations by introducing responsive policies, programs, and services</h2>}

          <div className="our-jobs__cards">
            <div
              className="our-jobs__card"
              style={{ backgroundImage: `url(${mediaPrimer})` }}
            >
              {language === 'ru' ? <span className="our-jobs__card__title">
                Медиа-букварь <br /> дошколёнка
              </span> : <span className="our-jobs__card__title">
                Mediabook <br /> Preschooler
              </span>}

              {language === 'ru' ? <span className="our-jobs__card__description">
                Букварь для детей <br /> с нарушением слуха
              </span> : <span className="our-jobs__card__description">
              Primer for Children <br /> hearing-impaired
              </span>}
              
              <div className="our-jobs__card__hover">
              {language === 'ru' ? <a
                  href="https://technoland-inno4kg.kg"
                  className="our-jobs__card__more-btn"
                  target="blank"
                >
                  Перейти
                </a> : <a
                  href="https://technoland-inno4kg.kg"
                  className="our-jobs__card__more-btn"
                  target="blank"
                >
                  Go to
                </a>}
                
              </div>
            </div>

            <div
              className="our-jobs__card"
              style={{ backgroundImage: `url(${signLangAr})` }}
            >
              {language === 'ru' ? <span className="our-jobs__card__title">
                Язык жестов: Арифметика
              </span> : <span className="our-jobs__card__title">
              Sign Language: Arithmetic
              </span>}

              {language === 'ru' ? <span className="our-jobs__card__description">
                Обучающее мобильное приложение по арифметике
              </span> : <span className="our-jobs__card__description">
              An educational mobile app for arithmetic
              </span>}
              
              
              <div className="our-jobs__card__hover">
                <a
                  target="_blank"
                  href="https://apps.apple.com/de/app/%D1%8F%D0%B7%D1%8B%D0%BA-%D0%B6%D0%B5%D1%81%D1%82%D0%BE%D0%B2-%D0%B0%D1%80%D0%B8%D1%84%D0%BC%D0%B5%D1%82%D0%B8%D0%BA%D0%B0/id1534157649"
                  className="our-jobs__card__store-btn"
                >
                  <div className="store-btn__icon">
                    <img src={Appstore} alt="appstore" />
                  </div>
                  <div className="store-btn__text">
                  {language === 'ru' ? <span>Доступно в</span> : <span>Available in</span>}
                    <span>App Store</span>
                  </div>
                </a>

                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.technoland.arifmethik_2020_bishkek&hl=ky&gl=US"
                  className="our-jobs__card__store-btn"
                >
                  <div className="store-btn__icon">
                    <img src={GooglePlay} alt="appstore" />
                  </div>
                  <div className="store-btn__text">
                  {language === 'ru' ? <span>Доступно в</span> : <span>Available in</span>}
                    <span>Google Play</span>
                  </div>
                </a>
                {/* <span className="our-jobs__card__more-btn">Перейти</span> */}
              </div>
            </div>

            <div
              className="our-jobs__card"
              style={{ backgroundImage: `url(${signLangWorld})` }}
            >
              {language === 'ru' ? <span className="our-jobs__card__title">
                Язык жестов: Мой мир
              </span> : <span className="our-jobs__card__title">
              Sign Language: My World
              </span>}

              {language === 'ru' ? <span className="our-jobs__card__title">
                <span className="our-jobs__card__description">
                Обучающее мобильное приложение для слабослышащих детей.
              </span>
              </span> : <span className="our-jobs__card__description">
              An educational mobile app for hearing-impaired children.
              </span>}

              <div className="our-jobs__card__hover">
                <a
                  target="_blank"
                  href="https://apps.apple.com/bg/app/%D1%8F%D0%B7%D1%8B%D0%BA-%D0%B6%D0%B5%D1%81%D1%82%D0%BE%D0%B2-%D0%BC%D0%BE%D0%B9-%D0%BC%D0%B8%D1%80/id1536111864"
                  className="our-jobs__card__store-btn"
                >
                  <div className="store-btn__icon">
                    <img src={Appstore} alt="appstore" />
                  </div>
                  <div className="store-btn__text">
                    {language === 'ru' ? <span>Доступно в</span> : <span>Available in</span>}
                    <span>App Store</span>
                  </div>
                </a>

                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.technoland.my_world_2020_bishkek&hl=en_US&gl=US"
                  className="our-jobs__card__store-btn"
                >
                  <div className="store-btn__icon">
                    <img src={GooglePlay} alt="appstore" />
                  </div>
                  <div className="store-btn__text">
                    {language === 'ru' ? <span>Доступно в</span> : <span>Available in</span>}
                    <span>Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="our-jobs__card"
              style={{ backgroundImage: `url(${signLangFam})` }}
            >
              {language === 'ru' ? <span className="our-jobs__card__title">
                Язык жестов: Моя семья
              </span> : <span className="our-jobs__card__title">
              Sign Language: My Family
              </span>}

              {language === 'ru' ? <span className="our-jobs__card__description">
                Обучающее мобильное приложение для слабослышащих детей.
              </span> : <span className="our-jobs__card__description">
              An educational mobile app for hearing-impaired children.
              </span>}
              
              <div className="our-jobs__card__hover">
                <a
                  target="_blank"
                  href="https://apps.apple.com/us/app/%D1%8F%D0%B7%D1%8B%D0%BA-%D0%B6%D0%B5%D1%81%D1%82%D0%BE%D0%B2-%D0%BC%D0%BE%D1%8F-%D1%81%D0%B5%D0%BC%D1%8C%D1%8F/id1535583889"
                  className="our-jobs__card__store-btn"
                >
                  <div className="store-btn__icon">
                    <img src={Appstore} alt="appstore" />
                  </div>
                  <div className="store-btn__text">
                  {language === 'ru' ? <span>Доступно в</span> : <span>Available in</span>}
                    <span>App Store</span>
                  </div>
                </a>

                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.technoland.my_house_2020_bishkek&hl=ky&gl=US"
                  className="our-jobs__card__store-btn"
                >
                  <div className="store-btn__icon">
                    <img src={GooglePlay} alt="appstore" />
                  </div>
                  <div className="store-btn__text">
                  {language === 'ru' ? <span>Доступно в</span> : <span>Available in</span>}
                    <span>Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="our-jobs__card"
              style={{ backgroundImage: `url(${signLangDilgirim})` }}
            >
              {language === 'ru' ? <span className="our-jobs__card__title">Дилгирим</span> : <span className="our-jobs__card__title">Dilgirim</span>}
              {language === 'ru' ? <span className="our-jobs__card__description">
                Двуязычное мобильное приложение для детей с нарушением слуха.
              </span> : <span className="our-jobs__card__description">
              A bilingual mobile app for hearing-impaired children.
              </span>}

              <div className="our-jobs__card__hover">
                <a
                  target="_blank"
                  href="https://apps.apple.com/in/app/%D0%B4%D0%B8%D0%BB%D0%B3%D0%B8%D1%80%D0%B8%D0%BC/id1561892611"
                  className="our-jobs__card__store-btn"
                >
                  <div className="store-btn__icon">
                    <img src={Appstore} alt="appstore" />
                  </div>
                  <div className="store-btn__text">
                  {language === 'ru' ? <span>Доступно в</span> : <span>Available in</span>}
                    <span>App Store</span>
                  </div>
                </a>

                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.technoland.dilgir&hl=ky&gl=US"
                  className="our-jobs__card__store-btn"
                >
                  <div className="store-btn__icon">
                    <img src={GooglePlay} alt="appstore" />
                  </div>
                  <div className="store-btn__text">
                  {language === 'ru' ? <span>Доступно в</span> : <span>Available in</span>}
                    <span>Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="our-jobs__card"
              style={{ backgroundImage: `url(${dakt})` }}
            >
              {language === 'ru' ? <span className="our-jobs__card__title">Дактильная азбука</span> :  <span className="our-jobs__card__title">Dactyl Alphabet</span>}
             
              <span className="our-jobs__card__description"></span>
              <div className="our-jobs__card__hover">
                <Link to="/miha" className="our-jobs__card__store-btn">
                  <div>
                  {language === 'ru' ? <span>Перейти</span> : <span>Go to</span>}
                    
                  </div>
                </Link>
              </div>
            </div>

            <div
              className="our-jobs__card"
              style={{ backgroundImage: `url(${ris})` }}
            >
              {language === 'ru' ? <span className="our-jobs__card__title">Прописные тетради</span> :  <span className="our-jobs__card__title">Penmanship notebooks</span>}

              <span className="our-jobs__card__description"></span>
              <div className="our-jobs__card__hover">
                <Link to="/miha2" className="our-jobs__card__store-btn">
                  <div>
                  {language === 'ru' ? <span>Перейти</span> : <span>Go to</span>}
                  </div>
                </Link>
              </div>
            </div>

            <div
              className="our-jobs__card"
              style={{ backgroundImage: `url(${ris2})` }}
            >
               {language === 'ru' ? <span className="our-jobs__card__title">Видеоуроки по Кыргызскому языку</span> : <span className="our-jobs__card__title">Video lessons in the Kyrgyz language</span>}
              
              <span className="our-jobs__card__description"></span>
              <div className="our-jobs__card__hover">
                <div className="our-jobs__card__store-btn">
                  <div>
                  {language === 'ru' ? <a href="https://www.youtube.com/watch?v=ZGsDYsFAmDg" className="pereiti">Перейти</a> : <a href="https://www.youtube.com/watch?v=ZGsDYsFAmDg" className="pereiti">Go to</a>}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="our-tasks__section">
                        <div className="our-task__block">
                            <span>Содействие развитию потенциала в области ИКТ для достижения целей Устойчивого развития.</span>
                        </div>
                        <div className="our-task__block">
                            <span>Содействие доступности ИКТ и их использованию для социально-экономического развития лиц с учетом их особых потребностей во всех сферах деятельности.</span>
                        </div>
                        <div className="our-task__block">
                            <span>Продвижение ИКТ технологий, повышающих качество жизни социально уязвимых слоев населения путем внедрения отзывчивых политик, программ и услуг.</span>
                        </div>
                        <div className="our-task__block">
                            <span>Повышение уровня знания населения в области ИКТ.</span>
                        </div>
                    </div> */}
          {/* <Link to="about" className="our-jobs__more-btn"><span>ПОДРОБНЕЕ</span></Link> */}
        </div>
      </div>
      {/* <NewsCard /> */}
      <News />
      {/* <Activities /> */}
    </>
  );
};

export default Home;
