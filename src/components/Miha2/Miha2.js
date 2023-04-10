import React from 'react';
import NavBar from '../NavBar/NavBar';
import gif0tetr from '../../assets/images/gif0tetr.gif';
import gif1tetr from '../../assets/images/gif1tetr.gif';
import gif2tetr from '../../assets/images/gif2tetr.gif';

const Miha2 = () => {
    return (
        <>
            <NavBar />
            <div className="about__container">
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
            </div>
        </>
    );
};

export default Miha2;