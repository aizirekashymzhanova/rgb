import React from 'react';
import '../DigitalResources/DigitalResources.css';
import NavBar from '../NavBar/NavBar';
import elearning from '../../assets/images/elearning.png';

import DateRangeIcon from '@material-ui/icons/DateRange';

import photokrena1 from '../../assets/images/photokrena1.jpeg';
import photokrena2 from '../../assets/images/photokrena2.jpeg';
import photokrena3 from '../../assets/images/photokrena3.jpeg';
import photokrena4 from '../../assets/images/photokrena4.jpeg';
import videokrena from '../../assets/images/videokrena.mp4';
const ELearning = () => {
    return (
        <>
            <NavBar />
            <div className="activity-details__container">
                <span className="activity-details__title">E-learning. Сотрудничество с детскими центрами и конкурс “ЦИФРОВАЯ ПЕДАГОГИКА”</span>
                <span className="activity-details__description">
                    <img className="activity-details__image" src={elearning} alt="Ошибка загрузки изображения" />

                    В Кыргызстане стартовал конкурс на лучшее видео-занятие среди учителей средних школ “Цифровая педагогика” Конкурс проводится для признания и популяризации деятельности талантливых учителей, обобщения эффективных практик по использованию современных образовательных технологий и методик, а также для повышения технологической компетентности педагогов. Черновые варианты отсняты, впереди монтаж…</span>
                <span className="activity-details__image-description"><DateRangeIcon />Апрель 06, 2020</span>

                <span className="activity-details__title">ИДУТ ПЕРВЫЕ ОН-ЛАЙН ЗАНЯТИЯ УЧИТЕЛЕЙ ДЕТСКОГО ЦЕНТРА ШАИР</span>
                <span className="activity-details__description">В помощь учителям для проведения он-лайн занятий общественный фонд Технолэнд и ассоциация Крена предоставила платформу BigBlueButton и наш фонд проводит техническое сопровождение учителей в их занятиях</span>
                <span className="activity-details__image-description"><DateRangeIcon />Март 28, 2020</span>

                <span className="activity-details__title">ОБЩЕСТВЕННЫЙ ФОНД “ТЕХНОЛЭНД” И АССОЦИАЦИЯ КРЕНА.</span>
                <span className="activity-details__description">Общественный фонд Технолэнд и ассоциация Крена оказывают техническую поддержку и предоставляют свою платформу BigBlueButton для проведения он-лайн занятий ЦДТ “Шайыр балалык” .</span>
                <span className="activity-details__description"><video width="auto" height="480" controls src={videokrena} align="center"/></span>
                <span className="activity-details__image-description"><DateRangeIcon />Март 26, 2020</span>

                <span className="activity-details__title">О ПЛАТФОРМЕ BIGBLUEBUTTON</span>
                <span className="activity-details__description">Что представляет собой платформа BigBlueButton и как она используется для проведения дистанционных занятий. Для учителей, которые проводят занятия на нашей платформе мы отсняли видеоролик в ознакомительных целях</span>
                <span className="activity-details__description">Как зайти на нашу платформу BigBlueButton. Многие учителя испытывают различные трудности, когда впервые пытаются зайти на нашу платформу для проведения он-лайн занятий со своими учениками. Поэтому в помощь учителям предлагаем ознакомиться с нижепредставленным видео-роликом.</span>
                <span className="activity-details__image-description"><DateRangeIcon />Март 23, 2020</span>

                <span className="activity-details__title">О тренингах для сотрудников Центрального Детского Творчества  "Шайыр Балалык"</span>
                <span className="activity-details__description">C 16 – 18 июня 2020 совместно с Ассоциацией KRENA  были проведены бесплатные тренинги для сотрудников Центрального Детского Творчества  "Шайыр Балалык". Учителя научились организовывать конференции в приложении Zoom,  создавать презентации, видео-презентации, основы технологий дистанционного обучения и др.</span>
                <span className="activity-details__description"><img src={photokrena1} align="left" width="auto" height="180" alt="pics" hspace="20"/><img src={photokrena2} align="left" width="auto" height="180" alt="pics" hspace="20"/><img src={photokrena3} align="left" width="auto" height="180" alt="pics" hspace="20"/><img src={photokrena4} align="left" width="auto" height="180" alt="pics" hspace="20"/></span>
                <span className="activity-details__image-description"><DateRangeIcon />Июнь 20, 2020</span>
            </div>
        </>
    );
};

export default ELearning;