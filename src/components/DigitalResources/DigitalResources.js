import React from 'react';
import './DigitalResources.css';
import NavBar from '../NavBar/NavBar';
import screenshot1 from '../../assets/images/Screenshot_1-300x224.png';
import titul1 from '../../assets/images/titul-1-217x300.jpeg';
import titul2 from '../../assets/images/titul_buk_1-198x300.jpeg';
import sadik1 from '../../assets/images/sadik1-300x226.png';
import azbuka from '../../assets/images/azbuka1-1.jpg';
import privet1 from '../../assets/images/privet-1.gif';
import web_PD from '../../assets/images/web_PD.gif';
import girl1 from '../../assets/images/girl1.gif';
import girl2 from '../../assets/images/girl2.gif';

const DigitalResources = () => {
    return (
        <>
            <NavBar />
            <div className="activity-details__container">
                <span className="activity-details__title">Цифровые ресурсы для детей с нарушением слуха ОФ
                    <br /> Технолэнд и СДОО № 87 подписали меморандум о сотрудничестве</span>

                <span className="activity-details__description">
                    <img className="activity-details__image" src={screenshot1} alt="Ошибка загрузки изображения" />
                    Техноленд и СДОО № 87 заключили Меморандум о сотрудничестве, в соответствии с которым фонд будет помогать специалистам трансформировать учебно-дидактические наработки в цифровой вид в виде мобильных приложений и web-приложений. Цифровые пособия, включающие графические, анимационные и видео-материалы помогут быстрее освоить грамоту, способствуют формированию ассоциативного мышления, увеличению словарного запаса детей. Это поможет, в дальнейшем, лучше адаптироваться к инклюзивному образованию и интегрироваться в общество.</span>


                <span className="activity-details__title">Общественный фонд «Технолэнд» начал работу над реставрацией и оцифровкой учеников для Республиканской школы-интерната для глухих детей</span>
                <div className="activity-details__serial-images">
                    <img className="serial-images__elem" src={titul1} alt="Ошибка загрузки изображения" />
                    <img className="serial-images__elem" src={titul2} alt="Ошибка загрузки изображения" />
                </div>

                <span className="activity-details__description">“Звездочка” - Учебное пособие по развитию речи детей с недостатком слуха (подготовительный-первый классы). В рамках сотрудничества со специалистами дошкольной образовательной организацией №87 для детей с нарушениями речи и слуха начата работа по созданию цифровых образовательных ресурсов, которые позволят лучше подготовиться к школьному обучению и лучше адаптироваться к инклюзивному образованию. Разработан плакат дактильной азбуки, флеш-карты, мобильное приложение с дактильной азбукой на первую из первоочередных тем. В период вынужденного карантина воспитанники данного учреждения теперь имеют возможность повторять пройденный материал в домашних условиях. К сожалению, специализированные учреждения, до сих пор вынуждены заниматься по старым материалам периода 90-х годов прошлого века. Все методические материалы воспитатели вынуждены делать сами.</span>

                <div className="activity-details__serial-images">
                    <img className="serial-images__elem" src={sadik1} alt="Ошибка загрузки изображения" />
                    <img className="serial-images__elem" src={azbuka} alt="Ошибка загрузки изображения" />
                </div>

                <span className="activity-details__description">Начата разработка флеш-карты с дактильной азбукой. Получены замечания от специалистов – интерактивная анимация может отвлечь внимание от основного.</span>

                <span className="activity-details__title">ИЗУЧАЕМ ЯЗЫК ЖЕСТОВ И ДАКТИЛЬ</span>
                <img className="activity-details__image_center" src={privet1} alt="Ошибка загрузки изображения" />

                <span className="activity-details__description">При изучении вопроса оснащенности наших детей с нарушением слуха дидактическим материалом в свободном доступе, к сожалению, выяснили, что данный вопрос остается без внимания.</span>

                <div className="activity-details__serial-images">
                    <img className="serial-images__elem" src={girl1} alt="Ошибка загрузки изображения" />
                    <img className="serial-images__elem" src={web_PD} alt="Ошибка загрузки изображения" />
                    <img className="serial-images__elem" src={girl2} alt="Ошибка загрузки изображения" />
                </div>
            </div>
        </>
    );
};

export default DigitalResources;