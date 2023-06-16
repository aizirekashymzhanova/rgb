import React, { useContext, useEffect, useState } from "react";
import NavBar from '../NavBar/NavBar';
import gif0tetr from '../../assets/images/gif0tetr.gif';
import gif1tetr from '../../assets/images/gif1tetr.gif';
import gif2tetr from '../../assets/images/gif2tetr.gif';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { LanguageContext } from '../../contexts/LanguageContext';


const Miha2 = () => {

    const { language } = useContext(LanguageContext);

    return (
        <>
            <NavBar />
            {language === 'ru' ? <div className="about__container">
            <span className="about__info"><img src={gif0tetr} align="right" width="200" height="auto" alt="gif" hspace="20" />Рабочие тетради для обучения письму, предназначены для детей подготовительной группы дошкольных образовательных учреждений для детей с нарушением слуха. 
            <br/>Автор методики: дефектолог-сурдопедагог СДОО №87 г.Бишкек,   магистр педагогики Аманбек кызы Жазгул.</span>
<span className="about__info"><img src={gif1tetr} align="right" width="200" height="auto" alt="gif" hspace="20" />Рабочая тетрадь–Считаем и рисуем.<br/> Предназначен для обучения письму и формированию элементарных элементарных математических представлений, для детей с нарушением слуха дошкольного возраста.
<br/>Автор методики: дефектолог-сурдопедагог СДОО №87 г.Бишкек,   магистр педагогики Аманбек кызы Жазгул</span>
<span className="about__info"><img src={gif2tetr} align="right" width="200" height="auto" alt="gif" hspace="20" />Рабочая тетрадь для обучения письму по методу без отрыва руки, предназначен для подготовительного класса школ глухих. <br/>Авторы методики- УМС школы интернат для глухих детей КР..</span>
<span className="about__info">

            <div>
                Зарегистрированным пользователям тетради доступны для скачивания в формате cdr(corel draw)
            </div>
</span>
            </div> : <div className="about__container">
            <span className="about__info"><img src={gif0tetr} align="right" width="200" height="auto" alt="gif" hspace="20" />Workbooks for learning to write, designed for children in the preparatory group of preschool educational institutions for children with hearing impairments.
            <br/>Author of the method: Amanbek kyzy Jazgul, defectologist and surdopedagogue, SDOO №87, Bishkek, master of pedagogy.</span>
<span className="about__info"><img src={gif1tetr} align="right" width="200" height="auto" alt="gif" hspace="20" />Workbook-Counting and Drawing.<br/> Designed to teach writing and the formation of elementary elementary mathematical ideas, for children with hearing impairment of preschool age.
<br/>Author of the method: Amanbek kyzy Jazgul, defectologist and surdopedagogue, SDOO №87, Bishkek, master of pedagogy.</span>
<span className="about__info"><img src={gif2tetr} align="right" width="200" height="auto" alt="gif" hspace="20" />A workbook for teaching writing according to the method without taking your hands off, designed for the preparatory class of schools for the deaf. <br/>The authors of the methodology are the UMS of the boarding school for deaf children of the Kyrgyz Republic.</span>
<span className="about__info">

            <div>
            Registered users can download notebooks in cdr format (corel draw)
            </div>
</span>
            </div>}

        </>
    );
};

export default Miha2;