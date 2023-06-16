import React, { useContext, useState, useEffect } from "react";
import NavBar from '../NavBar/NavBar';
import './About.css'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { LanguageContext } from '../../contexts/LanguageContext';

const About = () => {

    const { language } = useContext(LanguageContext);

    return (
        <>
            <NavBar />
            
            {language === 'ru' ? <div className="about__container">
                <span className="about-us__title">ОБЩЕСТВЕННЫЙ ФОНД ТЕХНОЛЭНД</span>

                <span className="about-us__title">Общие сведения</span>

                <span className="about__info"><span>Общественный фонд «Технолэнд» (далее «Фонд») создан в соответствии с Конституцией Кыргызской Республики, Гражданским кодексом Кыргызской Республики, Законом Кыргызской Республики «О некоммерческих организациях» и другими нормативными правовыми актами Кыргызской Республики. <a href='https://www.osoo.kg/inn/02112201510296/'>(https://www.osoo.kg/inn/02112201510296/)</a></span></span>

                <span className="about__info">Фонд является некоммерческой организацией. Общественный фонд Технолэнд учрежден преподавателями кафедры Телематика КГТУ им. И. Раззакова для продвижения ИТ технологий среди населения КР и участия в социально-значимых проектах.</span>

                <span className="about-us__title">Цели и задачи фонда</span>

                <span className="about__info">– Содействие развитию потенциала в области ИКТ для достижения целей Устойчивого развития;</span>

                <span className="about__info">– Содействие доступности ИКТ и их использованию для социально-экономического развития лиц с учетом их особых потребностей во всех сферах деятельности;</span>

                <span className="about__info">– Продвижение ИКТ технологий, повышающих качество жизни социально уязвимых слоев населения путем внедрения отзывчивых политик, программ и услуг;</span>

                <span className="about__info">– Повышение уровня знания населения в области ИКТ;</span>

                <span className="about-us__title">Миссия фонда</span>

                <span className="about__info">Развивать безграничный потенциал общества, помогая молодежи в поисках форм самореализации и поддерживая общественно значимые социальные проекты</span>

            </div> : <div className="about__container">
                <span className="about-us__title">PUBLIC FOUNDATION TECHNOLAND</span>

                <span className="about-us__title">General information</span>

                <span className="about__info"><span>Technoland Public Foundation (hereinafter referred to as the "Foundation") was established in accordance with the Constitution of the Kyrgyz Republic, the Civil Code of the Kyrgyz Republic, 
                    Law of the Kyrgyz Republic "On Non-Profit Organizations" and other normative legal acts of the Kyrgyz Republic. <a href='https://www.osoo.kg/inn/02112201510296/'>
                        (https://www.osoo.kg/inn/02112201510296/)</a></span></span>

                <span className="about__info">The Foundation is a non-profit organization. The Technoland Public Foundation was established by professors of the Telematics Department of KSTU named after I. Razzakov.   Telematics Department of KSTU named after I. Razzakov for the promotion of IT technologies among the population of the Kyrgyz Republic and participation in socially significant projects.</span>

                <span className="about-us__title">Goals and objectives of the fund</span>

                <span className="about__info">– Promoting the development of ICT capacity to achieve the Sustainable Development Goals;</span>

                <span className="about__info">– Promoting the accessibility and use of ICT for the socio-economic development of individuals, taking into account their special needs in all spheres of activity;</span>

                <span className="about__info">– Promoting ICT technologies that improve the quality of life of socially vulnerable populations through responsive policies, programs, and services;</span>

                <span className="about__info">– Increasing the knowledge of the population in the field of ICT;</span>

                <span className="about-us__title">Foundation mission</span>

                <span className="about__info">To develop the boundless potential of society by helping young people to find forms of self-realization and supporting socially significant social projects</span>

            </div>}

        </>
    );
};

export default About;