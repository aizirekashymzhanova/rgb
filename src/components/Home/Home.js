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
import News from "../News/News";
//

const Home = () => {
  return (
    <>
      <StickyNavBar />
      <Header />
      <div className="our-jobs">
        <div className="our-jobs__container">
          <h1 className="our-jobs__container__title">Наши разработки</h1>
          <h2 className="our-jobs__container__desciption">
            Большая часть наших работ направлена на продвижение ИКТ технологий,
            повышающих качество жизни социально уязвимых слоев населения путем
            внедрения отзывчивых политик, программ и услуг
          </h2>
          <div className="our-jobs__cards">
            <div
              className="our-jobs__card"
              style={{ backgroundImage: `url(${mediaPrimer})` }}
            >
              <span className="our-jobs__card__title">
                Медиа-букварь <br /> дошколёнка
              </span>
              <span className="our-jobs__card__description">
                Букварь для детей <br /> с нарушением слуха
              </span>
              <div className="our-jobs__card__hover">
                <a
                  href="https://technoland-inno4kg.kg"
                  className="our-jobs__card__more-btn"
                  target="blank"
                >
                  Перейти
                </a>
              </div>
            </div>

            <div
              className="our-jobs__card"
              style={{ backgroundImage: `url(${signLangAr})` }}
            >
              <span className="our-jobs__card__title">
                Язык жестов: Арифметика
              </span>
              <span className="our-jobs__card__description">
                Обучающее приложение по арифметике
              </span>
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
                    <span>Доступно в</span>
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
                    <span>Доступно в</span>
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
              <span className="our-jobs__card__title">
                Язык жестов: Мой мир
              </span>
              <span className="our-jobs__card__description">
                Обучающее приложение для слабослышащих детей.
              </span>
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
                    <span>Доступно в</span>
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
                    <span>Доступно в</span>
                    <span>Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="our-jobs__card"
              style={{ backgroundImage: `url(${signLangFam})` }}
            >
              <span className="our-jobs__card__title">
                Язык жестов: Моя семья
              </span>
              <span className="our-jobs__card__description">
                Обучающее приложение для слабослышащих детей.
              </span>
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
                    <span>Доступно в</span>
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
                    <span>Доступно в</span>
                    <span>Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="our-jobs__card"
              style={{ backgroundImage: `url(${signLangDilgirim})` }}
            >
              <span className="our-jobs__card__title">Дилгирим</span>
              <span className="our-jobs__card__description">
                Двуязычное приложение для детей с нарушением слуха.
              </span>
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
                    <span>Доступно в</span>
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
                    <span>Доступно в</span>
                    <span>Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="our-jobs__card"
              style={{ backgroundImage: `url(${dakt})` }}
            >
              <span className="our-jobs__card__title">Дактильная азбука</span>
              <span className="our-jobs__card__description"></span>
              <div className="our-jobs__card__hover">
                <Link to="/miha" className="our-jobs__card__store-btn">
                  <div>
                    <span>Перейти</span>
                  </div>
                </Link>
              </div>
            </div>

            <div
              className="our-jobs__card"
              style={{ backgroundImage: `url(${ris})` }}
            >
              <span className="our-jobs__card__title">Прописные тетради</span>
              <span className="our-jobs__card__description"></span>
              <div className="our-jobs__card__hover">
                <Link to="/miha2" className="our-jobs__card__store-btn">
                  <div>
                    <span>Перейти</span>
                  </div>
                </Link>
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
      <Activities />
    </>
  );
};

export default Home;
