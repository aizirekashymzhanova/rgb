import React, { useContext, useEffect, useState } from 'react';
import './NewsDetails.css'
import { CircularProgress, TextField } from '@material-ui/core';
import { isImage, isVideo } from '../../helpers/functions';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { newsContext } from '../../contexts/NewsContext';
import NavBar from '../NavBar/NavBar';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ReactVideo } from "reactjs-media";
import videoPoster from '../../assets/images/video_poster.png';

const NewsDetails = (props) => {
  const { getNewsDetails, newsDetails, language } = useContext(newsContext);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getNewsDetails(props.match.params.id);
  }, []);

  useEffect(() => {
    if (newsDetails?.media) {
      setImages(newsDetails.media.filter((elem) => isImage(elem)));
      setVideos(newsDetails.media.filter((elem) => isVideo(elem)));
    }
    console.log('Updating images');
  }, [newsDetails]);

  const translateTitle = (title) => {
    const translations = {
      'Новое оборудование для Специальной школы-интерната: Рельефные алфавиты Брайля для слепых детей': 'New equipment for Special Boarding School: Braille Relief Alphabets for blind children',
      'Преодоление последствий пандемии с ЮНИСЕФ и ПРООН в Кыргызской Республике': 'Overcoming the Consequences of the Pandemic with UNICEF and UNDP in the Kyrgyz Republic',
      'Переданы рельефные алфавиты Брайля в специализированную общеобразовательную школу для слепых и слабовидящих детей г. Бишкек.': 'These alphabets were produced by FabLab Bishkek, and the financial cost of the handouts was covered by SIFO (Seoul International Friendship Organization)',
      'Проект ОФ Технолэнд «Вовлечение детей с нарушением слуха к системам цифрового обучения» - победитель конкурса в рамках программы «Вызов открытым инновациям Inno4Kg», инициированный ПРООН для преодоления последствий пандемии.': "Technoland PF's project 'Engaging Hearing Impaired Children in Digital Learning Systems' is the winner of the UNDP Challenge to Open Innovation Inno4Kg program to overcome the effects of the pandemic.",
    };

    return translations[title] || title;
  };

  const translateDescription = (description) => {
    const translations = {
      'Специальной общеобразовательной школе-интернат для слепых и слабовидящих детей , г. Бишкек переданы грифели для письма по Брайлю, а также рельефные русские, кыргызские и английские алфавиты Брайля, которые разработаны совместно с FabLab Bishkek и организацией SIFO (Сеульская международная организация Дружбы)': 'A special general education boarding school for blind and visually impaired children in Bishkek received Braille slates, as well as Russian, Kyrgyz and English Braille alphabets in relief, which were developed together with FabLab Bishkek and SIFO (Seoul International Friendship Organization)',
      'С началом этого года для преодоления последствий пандемии ЮНИСЕФ и ПРООН в Кыргызской Республике оказали поддержку для разработки и запуску двуязычного мобильного приложения «Дилгир» для глухих и слабослышащих детей. Приложение является дополнением к учебнику “Дилгир-1”, над созданием которого работает методический совет Специальной общеобразовательной школы-интернат для глухих детей, совместно с общественным фондом «Технолэнд». Учебник представлен одновременно на русском и кыргызском языках, позволяющий внедрить единую методику обучения на обоих языках.': 'Since the beginning of this year to overcome the consequences of the pandemic, UNICEF and UNDP in the Kyrgyz Republic have supported the development and launch of a bilingual mobile application "Dilgir" for deaf and hard of hearing children. The app is a supplement to the Dilgir-1 textbook, which is being developed by the methodological council of the Special General Education Boarding School for Deaf Children, together with the Technoland Public Foundation. The textbook is presented simultaneously in Russian and Kyrgyz, allowing the introduction of a unified teaching methodology in both languages.',
      'Данные алфавиты изготовлены в лаборатории FabLab Bishkek, финансовые расходы на раздаточные материалы покрыты организацией SIFO (Сеульская международная организация дружбы)' : 'These alphabets were made in the FabLab Bishkek, the financial cost of the handouts was covered by SIFO (Seoul International Friendship Organization). Kubatbekov Kanat and Saadabaeva Kamila, 4th year student of "Telematics" direction, mentor - engineer of FabLab Bishkek Azisbek uulu Timur, took active part in development and production of materials.',
      'В апреле этого года Программа Развития ООН в Кыргызстане объявил конкурс «Вызов Открытым Инновациям — Inno4Kg» для преодоления последствий пандемии. Победитель конкурса  - проект «Вовлечение детей с нарушением слуха к системам цифрового обучения», инициированный общественным фондом «Технолэнд» в тесном сотрудничестве с СДОО №87 для детей с нарушением речи и слуха и Специальной общеобразовательной школой-интернат для глухих детей г.Бишкек.' : 'In April of this year, the United Nations Development Program in Kyrgyzstan announced the "Open Innovation Challenge - Inno4Kg" competition to overcome the consequences of the pandemic. The winner of the contest is the project "Involvement of children with hearing impairment in digital learning systems", initiated by the public foundation "Technoland" in close cooperation with...',
    };


    const sanitizedDescription = decodeURIComponent(description.trim().replace(/\s+/g, ' '));

    return translations[sanitizedDescription] || description;
  };

  return (
    <>
      <NavBar />
      <div className="news-details__container">
        {newsDetails ? (
          <>
            <span className="news-details__date">
              <AccessTimeIcon style={{ fontSize: 30, color: 'orange', marginRight: '2px' }} /> {newsDetails.date}
            </span>
            <span className="news-details__description">
              {language === 'ru' ? newsDetails.title : translateTitle(newsDetails.title)}
            </span>
            <span dangerouslySetInnerHTML={{ __html: language === 'ru' ? newsDetails.description : translateDescription(newsDetails.description) }} className="news-details__description"></span>
            <span dangerouslySetInnerHTML={{ __html: language === 'ru' ? newsDetails.additionalDescription : translateDescription(newsDetails.additionalDescription) }} className="news-details__description"></span>
            {images ? (
              <div>
                {images.map((elem) => (
                  <div key={elem}>
                    <img src={elem} className="news_detail_foto" />
                  </div>
                ))}
              </div>
            ) : (
              ''
            )}
            {videos &&
              videos.map((video) => (
                <div key={video} style={{ marginTop: '4vh' }}>
                  <ReactVideo src={video} primaryColor="transparent" poster={videoPoster} />
                </div>
              ))}
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
    </>
  );
};

export default NewsDetails;
