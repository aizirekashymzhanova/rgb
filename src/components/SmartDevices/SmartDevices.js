import React from 'react';
import '../DigitalResources/DigitalResources.css'
import NavBar from '../NavBar/NavBar';
import hed from '../../assets/images/hed.png';
import bek from '../../assets/images/bek.gif';
import nazira3 from '../../assets/images/nazira3.png';
import isee1 from '../../assets/images/isee5-1.jpg';
import iseep from '../../assets/images/isee_p.jpg';

import DateRangeIcon from '@material-ui/icons/DateRange';

const SmartDevices = () => {
    return (
        <>
            <NavBar />
            <div className="activity-details__container">
                <span className="activity-details__title">Ассистентские устройства для общества слепых и глухих КР</span>
                <span className="activity-details__description">
                    <img className="activity-details__image" src={hed} alt="Ошибка загрузки изображения" />

                    Общественный фонд содействует лицам с ограниченными возможностями в получении доступа к ассистивным устройствам и технологиям для достижения независимости в повседневной жизни. По оценке Всемирного Союза Слепых, устройства с сенсорными экранами создают один из самых больших барьеров доступности бытовой техники для людей с нарушениями зрения. Для решения проблемы нами разработан модуль, работающий поверх сенсорных панелей бытовых электроприборов (микроволновые печи, посудомоечная машина, стиральная машина и пр.), который по командам мобильного приложения реализует алгоритм работы сенсорных панелей. Мобильное приложение с повторяет интерфейс сенсорных панелей управления и используется совместно с голосовым ассистентом.</span>
                <img className="activity-details__image_center" src={bek} alt="Ошибка загрузки изображения" />
                <span className="activity-details__description">Кыргызское общество слепых и глухих пригласило депутата ЖК КР Дастана Бекешева к нам ознакомиться с нашими разработками. Депутат выразил желание приобрести несколько экземпляров нашего модуля для бытовых электроприборов с сенсорными панелями управления. После тестирования, апробации и стандартизации модуля планируем ввести их в массовую эксплуатацию</span>
                <span className="activity-details__description">Глава федерации незрячих КР Гульназ Жузбаева тестирует нашу модель. Гульназ организовала реабилитационный курс для незрячих кыргызстанцев, и хотела бы на одном из занятий продемонстрировать наш модуль</span>
                <img className="activity-details__image_center" src={nazira3} alt="Ошибка загрузки изображения" />
                <span className="activity-details__description">Один из активных членов Кыргызского общества слепых и глухих, начинающий блоггер Назира Илимказиева. Как всякая женщина, много времени проводящая на кухне, часто пользуется бытовыми электроприборами, и потому, ее заинтересовала наша разработка</span>
                <span className="activity-details__image-description"><DateRangeIcon />Ноябрь 23, 2019</span>

                <span className="activity-details__title">О СОТРУДНИЧЕСТВЕ С КЫРГЫЗСКИМ ОБЩЕСТВОМ СЛЕПЫХ И ГЛУХИХ. ПРОЕКТ ISEE</span>
                <span className="activity-details__description">Идея проекта “Isee” принадлежит группе школьниц, участвовавших в программе “Женщины КР в STEM”, реализуемой МОФ «Инициатива Розы Отунбаевой» А мы курировали этот проект, и для того, чтобы точней определиться с постановкой задачи решили пригласить на обсуждение членов Общества слепых и глухих, во главе с торагой общества. Основная задача проекта “ISEE”-помочь слабовидящим людям определить какой общественный транспорт подходит к остановке. Решение задачи в масштабе города – это большая задача интеллектуальных транспортных систем, требует серверных ресурсов и сетевой поддержки. Однако реализация такой задачи было бы хорошим решением в социальном аспекте. Сейчас эта тема легла в основу студенческой дипломной работы.</span>

                <img className="activity-details__image_center" src={isee1} alt="Ошибка загрузки изображения" />
                <img className="activity-details__image_center" src={iseep} alt="Ошибка загрузки изображения" />
                <span className="activity-details__image-description">На обсуждении проекта ISEE</span>
                <span className="activity-details__image-description"><DateRangeIcon />Май 23, 2019</span>
            </div>
        </>
    );
};

export default SmartDevices;