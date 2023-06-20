import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { authContext } from '../../contexts/AuthContext';
import './Materials.css';
import NavBar from '../NavBar/NavBar';
import { materialsContext } from '../../contexts/MateriasContext';
import GetAppIcon from '@material-ui/icons/GetApp';
import FileSaver from 'file-saver';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { LanguageContext } from '../../contexts/LanguageContext';


const useStyles = makeStyles(theme => ({
  pagination: {
    color: "#c4ab9d",
  },
  formControl: {
    margin: theme.spacing(1),
    width: '30%',
    ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
      width: '70%'
    }
  },
  select: {
    '&:before': {
      borderColor: 'orange',
    },
    '&:after': {
      borderColor: 'orange',
    }
  },
  icon: {
    fill: 'orange',
  },
  inputFocused: {
    color: '#000',
    '&.Mui-focused': {
      color: '#7c6f6f',
    }
  }
}));

export default function Materials (props){
  const { isUserLogedIn } = useContext(authContext);
  const { getMaterials, materials, totalPages, getMaterials_count, result } = useContext(materialsContext);
  const history = useHistory();
  const [page, setPage] = useState(getPage());
  const classes = useStyles();

  const { language } = useContext(LanguageContext);

  const [category, setCategory] = useState(getCategory());

  useEffect(() => {
    isUserLogedIn(history);
    getMaterials();
    getMaterials_count();

    // if (result && result.result) {
    //   const counts = {};
    //   result.result.forEach(item => {
    //     counts[item.material_id] = item.count;
    //   });
    //   setDownloadCounts(counts);
    // }
  }, []);

  function getCategory() {
    const search = new URLSearchParams(history.location.search);
    return search.get("category") ? search.get("category") : "";
  }

  const handleChangeCategory = (event) => {
    if (event.target.value === "all") {
      history.push(`${history.location.pathname.replace("category")}`);
      getMaterials();
      return;
    }
    const search = new URLSearchParams(history.location.search);
    search.set("category", event.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getMaterials(history);
    setCategory(event.target.value);
  };

  function getPage() {
    const search = new URLSearchParams(history.location.search);
    return search.get("page") ? search.get("page") : 1;
  }

  function handlePage(event, page) {
    const search = new URLSearchParams(history.location.search);
    search.set("page", page);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getMaterials();
    getMaterials_count()
    setPage(page);
  }

  const saveFile = (url, fileName, materialId) => {
    FileSaver.saveAs(url, fileName);
  
    // Находим объект с соответствующим materialId в массиве result.result
    const material = result.result.find(item => item.material_id === materialId);
  
    if (material) {
      // Получаем текущее значение количества скачиваний
      const currentDownloadCount = material.count;
  
      // Увеличение количества скачиваний на 1
      const newDownloadCount = currentDownloadCount + 1;
  
      // Вывод значений для проверки
      console.log('materialId:', materialId);
      console.log('newDownloadCount:', newDownloadCount);
  
      // Отправка POST-запроса на сервер
      axios
        .post('https://lis.kg/coun_down_material_edit', {
          materialId: materialId,
          downloadCount: newDownloadCount,
        })
        .then(response => {
          console.log('Ответ от сервера:', response);
          console.log('Запрос успешно отправлен');
        })
        .catch(error => {
          console.error('Ошибка при отправке запроса:', error);
        });
    }
  
    getMaterials_count();
  };
  

  const combinedClass = `${classes.inputLabel} ${classes.formControl}`;

  // const translateTitle = (material_title) => {
  //   const translations = {
  //     'План изучения Node.JS': 'New equipment for Special Boarding School: Braille Relief Alphabets for blind children',
  //     'Пишем калькулятор на JS' : 'Overcoming the Consequences of the Pandemic with UNICEF and UNDP in the Kyrgyz Republic',
  //     'Светодиоды и фоторезистор (Arduino)': 'These alphabets were produced by FabLab Bishkek, and the financial cost of the handouts was covered by SIFO (Seoul International Friendship Organization)',
  //     'Код спутников GPS': "Technoland PF's project 'Engaging Hearing Impaired Children in Digital Learning Systems' is the winner of the UNDP Challenge to Open Innovation Inno4Kg program to overcome the effects of the pandemic.",
  //     'Технологии PDH и SDH': "Technoland PF's project 'Engaging Hearing Impaired Children in Digital Learning Systems' is the winner of the UNDP Challenge to Open Innovation Inno4Kg program to overcome the effects of the pandemic.",
  //     'Дискретизация и квантование сигналов': "Technoland PF's project 'Engaging Hearing Impaired Children in Digital Learning Systems' is the winner of the UNDP Challenge to Open Innovation Inno4Kg program to overcome the effects of the pandemic.",
  //     'Построение РЛСС': "Technoland PF's project 'Engaging Hearing Impaired Children in Digital Learning Systems' is the winner of the UNDP Challenge to Open Innovation Inno4Kg program to overcome the effects of the pandemic.",
  //     'Код спутников GPS': "Technoland PF's project 'Engaging Hearing Impaired Children in Digital Learning Systems' is the winner of the UNDP Challenge to Open Innovation Inno4Kg program to overcome the effects of the pandemic.",
  //   };

  //   return translations[material_title] || material_title;
  // };

  // const translateDescription = (material_description) => {
  //   const translations = {
  //     'Специальной общеобразовательной школе-интернат для слепых и слабовидящих детей , г. Бишкек переданы грифели для письма по Брайлю, а также рельефные русские, кыргызские и английские алфавиты Брайля, которые разработаны совместно с FabLab Bishkek и организацией SIFO (Сеульская международная организация Дружбы)': 'A special general education boarding school for blind and visually impaired children in Bishkek received Braille slates, as well as Russian, Kyrgyz and English Braille alphabets in relief, which were developed together with FabLab Bishkek and SIFO (Seoul International Friendship Organization)',
  //     'С началом этого года для преодоления последствий пандемии ЮНИСЕФ и ПРООН в Кыргызской Республике оказали поддержку для разработки и запуску двуязычного мобильного приложения «Дилгир» для глухих и слабослышащих детей. Приложение является дополнением к учебнику “Дилгир-1”, над созданием которого работает методический совет Специальной общеобразовательной школы-интернат для глухих детей, совместно с общественным фондом «Технолэнд». Учебник представлен одновременно на русском и кыргызском языках, позволяющий внедрить единую методику обучения на обоих языках.': 'Since the beginning of this year to overcome the consequences of the pandemic, UNICEF and UNDP in the Kyrgyz Republic have supported the development and launch of a bilingual mobile application "Dilgir" for deaf and hard of hearing children. The app is a supplement to the Dilgir-1 textbook, which is being developed by the methodological council of the Special General Education Boarding School for Deaf Children, together with the Technoland Public Foundation. The textbook is presented simultaneously in Russian and Kyrgyz, allowing the introduction of a unified teaching methodology in both languages.',
  //     'Данные алфавиты изготовлены в лаборатории FabLab Bishkek, финансовые расходы на раздаточные материалы покрыты организацией SIFO (Сеульская международная организация дружбы)' : 'These alphabets were made in the FabLab Bishkek, the financial cost of the handouts was covered by SIFO (Seoul International Friendship Organization). Kubatbekov Kanat and Saadabaeva Kamila, 4th year student of "Telematics" direction, mentor - engineer of FabLab Bishkek Azisbek uulu Timur, took active part in development and production of materials.',
  //     'В апреле этого года Программа Развития ООН в Кыргызстане объявил конкурс «Вызов Открытым Инновациям — Inno4Kg» для преодоления последствий пандемии. Победитель конкурса  - проект «Вовлечение детей с нарушением слуха к системам цифрового обучения», инициированный общественным фондом «Технолэнд» в тесном сотрудничестве с СДОО №87 для детей с нарушением речи и слуха и Специальной общеобразовательной школой-интернат для глухих детей г.Бишкек.' : 'In April of this year, the United Nations Development Program in Kyrgyzstan announced the "Open Innovation Challenge - Inno4Kg" competition to overcome the consequences of the pandemic. The winner of the contest is the project "Involvement of children with hearing impairment in digital learning systems", initiated by the public foundation "Technoland" in close cooperation with...',
  //   };


  //   const sanitizedDescription = decodeURIComponent(material_description.trim().replace(/\s+/g, ' '));

  //   return translations[sanitizedDescription] || material_description;
  // };

  const translations = {
    // Русский -> Английский
    ru: {
      'Заголовок 1': 'Title 1',
      'Заголовок 2': 'Title 2',
      // Другие переводы...
    }
  };

  return (
    <>
      <NavBar />
      <div className="news__container">

        {language === 'ru' ? (
        <span className="news__title">МАТЕРИАЛЫ ДЛЯ СКАЧИВАНИЯ</span>
      ) : (
        <span className="news__title">MATERIALS FOR DOWNLOAD</span>
      )}

        {/* Category start */}
        <FormControl className={combinedClass}>
          <InputLabel classes={{ focused: classes.inputFocused }} id="demo-simple-select-label">
          {language === 'ru' ? (
        <span >Выберите раздел материалов</span>
      ) : (
        <span >Select a materials section</span>
      )}
            </InputLabel>
          <Select
            className={classes.select}
            inputProps={{
              classes: {
                icon: classes.icon
              },
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            onChange={handleChangeCategory}
          >
            <MenuItem value="all">
            {language === 'ru' ? (
        <span >Все материалы</span>
      ) : (
        <span >All materials</span>
      )}
            </MenuItem>
            {
              materials && materials.categories ?
                materials.categories.map(elem => (
                  <MenuItem key={elem} value={elem}>{elem}</MenuItem>
                ))
                :
                <MenuItem value="all">
                  {language === 'ru' ? (
        <span >Разделы отсутствуют</span>
      ) : (
        <span >There are no sections</span>
      )}
                  </MenuItem>
            }
          </Select>
        </FormControl>
        {/* Category end */}

        <div className="download">
          {
            materials ?
              materials.materials.map(elem => (
                <div key={elem.material_pathname} className="download__item">
                  <span className="download__item__title">{elem.material_title}</span>
                  <img className="download__item__image" src={elem.material_image} alt="" />
                  <span className="download__item__name">{elem.material_name}</span>
                  <span className="download__item__description">{elem.material_description}</span>
                  <button onClick={() => {
                    saveFile(elem.material_pathname, elem.material_title, elem.material_id);
                   // incrementDownloadCount(elem.material_id);
                  }}>
                    {language === 'ru' ? (
        <span >Скачать</span>
      ) : (
        <span >Download</span>
      )}
                     <GetAppIcon /></button>

                     {language === 'ru' ? (
        <span>Количество скачиваний: {result && result.result ? result.result.find(item => item.material_id === elem.material_id)?.count : 0}</span>
      ) : (
        <span>Number of downloads: {result && result.result ? result.result.find(item => item.material_id === elem.material_id)?.count : 0}</span>
      )}
                </div>
              ))
              :
              'Материалы отсутствуют'
          }
        </div>
        {
          materials ?
            <Pagination className={classes.pagination} page={+page} onChange={handlePage} count={totalPages} />
            :
            ''
        }
      </div>
    </>
  );
};


