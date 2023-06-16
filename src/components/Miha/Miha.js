import React, { useContext, useEffect, useState } from "react";
import NavBar from '../NavBar/NavBar';
import gifdakt from '../../assets/images/gifdakt.gif';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { LanguageContext } from '../../contexts/LanguageContext';



const Miha = () => {

    const { language } = useContext(LanguageContext);

    return (
        <>
            <NavBar />
            <div className="about__container">
            {language === 'ru' ?  <span className="about__info"><img src={gifdakt} align="right" width="200" height="auto" alt="gif" hspace="20"/>1) Дактильный алфавит для 1 класса Специальной образовательной школы-интернат  глухих детей г.Бишкек.<br />
2) Дактильный алфавит для подготовительных групп Специальной дошкольной образовательной организация для детей с нарушением речи и слуха №87 г.Бишкек.<br />
3) Дактильный обучающий плакат по математике для подготовительных групп Специальной дошкольной образовательной организация для детей с нарушением речи и слуха №87 г.Бишкек.<br />
4) Двусторонние ламинированные пластиковые алфавитные и счетные карточки для индивидуального обучения детей подготовительной группы СДОО №87.<br />
5) Ламинированные алфавитные карточки для индивидуального обучения детей СОШИГ.<br />
Все материалы были разработаны по просьбе и по методике специалистов образовательных учреждений для детей с нарушением слуха.</span> : <span className="about__info"><img src={gifdakt} align="right" width="200" height="auto" alt="gif" hspace="20"/>
1) Dactyl alphabet for grade 1 of the Special Boarding School for Deaf Children in Bishkek.<br />
2) Dactyl alphabet for preparatory groups of the Special Preschool Educational Organization for Children with Speech and Hearing Disabilities № 87 in Bishkek.<br />
3) Dactyl training poster on mathematics for the preparatory groups of the Special Preschool Educational Organization for children with speech and hearing disorders № 87 in Bishkek.<br />
4) Double-sided laminated plastic alphabet and counting cards for individual learning of children preparatory group of Kindergarten №87.<br />
5) Laminated alphabet cards for individual education of children with SOSHIG.<br />
All materials were developed at the request and according to the methodology of specialists of educational institutions for children with hearing impairments.</span>}
            
            </div>
        </>
    );
};


export default Miha;