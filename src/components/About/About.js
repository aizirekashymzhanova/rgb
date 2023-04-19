import React from 'react';
import NavBar from '../NavBar/NavBar';
import './About.css'
import aa from '../../assets/images/aa.jpg';
import bb from '../../assets/images/bb.jpg';
import about from '../../assets/images/about.jpg';

const About = () => {
    return (
        <>
            <NavBar />
            <div className="about__container">
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

                {/* <span className="about-us__title">Проект фонда</span>

                <span className="about__info"><span>Проект "Рельефные  алфавиты Брайля для незрячих детей", разработанный ОФ "Технолэнд, FabLab Bishkek и SIFO (Сеульская международная организация Дружбы) занял первое место на конкурсу научно-исследовательских работ в КГТУ им. И.Раззакова. <a className='podrobnee' href='https://www.youtube.com/watch?v=oISf5jOUV2U'>Подробнее</a></span></span>

                <span className="about-us__title user_info">Специальная общеобразовательная школа-интернат для слепых и слабовидящих детей.</span>

                <img className="info__logo_user" src={about} alt="" />

                <span className="about-us__title user_info">Наблюдательный совет: Медралиева Бубусара Ниясбековна</span>

                <img className="info__logo_user" src={bb} alt="" />

                <span className="about-us__title user_info">Координатор проектов: Турдалиева Айзат Аманбековна</span>

                <img className="info__logo_user" src={aa} alt="" /> */}
            </div>
        </>
    );
};

export default About;