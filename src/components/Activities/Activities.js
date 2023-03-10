import React from 'react';
import ActivityCard from '../ActivityCard/ActivityCard';
import './Activities.css';

import mHealthPic from '../../assets/images/mhealth.jpg';
import eLearning from '../../assets/images/e-learning.jpg';
import smartDevicesPic from '../../assets/images/smart-gadgets.jpg';
import digitalResourcesPic from '../../assets/images/digital-resources.jpg';
import Particles from 'react-particles-js';

const Activities = () => {

    const activities = [
        {
            cardImg: digitalResourcesPic,
            cardTitle: "Цифровые ресурсы для детей с нарушением слуха",
            description: "Техноленд и СДОО № 87 заключили Меморандум о сотрудничестве, в соответствии с которым фонд будет помогать специалистам трансформировать учебно-дидактические наработки в цифровой вид в виде мобильных приложений и web-приложений. Цифровые пособия, включающие графические, анимационные и видео-материалы помогут быстрее освоить грамоту, способствуют формированию ассоциативного мышления, увеличению словарного запаса детей. Это поможет, в дальнейшем, лучше адаптироваться к инклюзивному образованию и интегрироваться в общество.",
            link: "/digital-resources"
        },
        {
            cardImg: mHealthPic,
            cardTitle: "Развитие mHealth как инструмент доступа к медицинским услугам",
            description: "Результаты развития проекта “Персональный ЭКГ-телемониторинг” были представлены 26-27 ноября 2019 года на 4-я-ой Региональной сетевой конференция CAREN (CRNC 2019) «Партнерство для будущего научных исследований и высшего образования в Центральной Азии». Совместно с Институтом Биоматики Обуда Университета (г. Будапешт, Венгрия) проведена интеграция мобильных ЭКГ-датчиков на сервер ИТ-центра ассоциации КРЕНА для дальнейшего хранения и анализа специалистами кардиолагами.Проект развивается совместно с сотрудниками Национального Института Кардиологии и Терапии им. Мирохимова. Работа была начата в рамках проекта, финансируемого программой EYR-CAREN.",
            link: "/mHealth"
        },
        {
            cardImg: eLearning,
            cardTitle: "E-learning. Сотрудничество с детскими центрами",
            description: "В Кыргызстане стартовал конкурс на лучшее видео-занятие среди учителей средних школ “Цифровая педагогика” Конкурс проводится для признания и популяризации деятельности талантливых учителей, обобщения эффективных практик по использованию современных образовательных технологий и методик, а также для повышения технологической компетентности педагогов.",
            link: "/e-learning"
        },
        {
            cardImg: smartDevicesPic,
            cardTitle: "Ассистентские устройства для общества слепых и глухих КР",
            description: "Общественный фонд содействует лицам с ограниченными возможностями в получении доступа к ассистивным устройствам и технологиям для достижения независимости в повседневной жизни. По оценке Всемирного Союза Слепых, устройства с сенсорными экранами создают один из самых больших барьеров доступности бытовой техники для людей с нарушениями зрения.",
            link: "/smart-devices"
        }
    ]

    return (
        <div className="activities__wrapper">
            <Particles id="activities__particles"
                params={{
                    particles: {
                        number: {
                            value: 150,
                            density: {
                                enable: true,
                                value_area: 1000,
                            }
                        },
                        move: {
                            speed: 0.5
                        },
                        color: {
                            value: '#c4b9b9'
                        },
                        "line_linked": {
                            enable: true,
                            distance: 150,
                            color: {
                                value: "#c4b9b9"
                            },
                            opacity: 0.4,
                            width: 1
                        },
                    },
                }}
            />
            <div className="activities__container">
                <span>Основные направления нашей деятельности</span>
                <div className="activities__container__cards">
                    {
                        activities.map(elem => (
                            <ActivityCard key={elem.link} image={elem.cardImg} title={elem.cardTitle} description={elem.description} link={elem.link} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Activities;