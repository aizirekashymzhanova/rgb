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

   const category_en = [
    {elem: 'Для студентов', elem_en: 'For students'},
    {elem: 'Arduino', elem_en: 'Arduino'},
    {elem: 'ГСН', elem_en: 'GSN'},
    {elem: 'ТЦС', elem_en: 'TCS'}
   ]

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
                  <MenuItem key={elem} value={elem}>
                    {language === 'ru' ? (
        <span >{elem}</span>
      ) : (
        <span >{category_en.find(item => item.elem === elem)?.elem_en}</span>
      )}            
                  </MenuItem>
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
                  <span className="download__item__title">
                  {language === 'ru' ? (
        <span >{elem.material_title}</span>
      ) : (
        <span >{result.result.find(item => item.material_id === elem.material_id)?.title}</span>
      )}</span>
                  <img className="download__item__image" src={elem.material_image} alt="" />
                  <span className="download__item__name">
                  {language === 'ru' ? (
        <span >{elem.material_name}</span>
      ) : (
        <span >{result.result.find(item => item.material_id === elem.material_id)?.material_name}</span>
      )}
                    
                    </span>
                  <span className="download__item__description">
                  {language === 'ru' ? (
        <span >{elem.material_description}</span>
      ) : (
        <span >{result.result.find(item => item.material_id === elem.material_id)?.description}</span>
      )}</span>
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


