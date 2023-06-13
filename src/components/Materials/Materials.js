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

const Materials = () => {
  const { isUserLogedIn } = useContext(authContext);
  const { getMaterials, materials, totalPages, getMaterials_count, result } = useContext(materialsContext);
  const history = useHistory();
  const [page, setPage] = useState(getPage());
  const classes = useStyles();

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

  return (
    <>
      <NavBar />
      <div className="news__container">
        <span className="news__title">МАТЕРИАЛЫ ДЛЯ СКАЧИВАНИЯ</span>

        {/* Category start */}
        <FormControl className={combinedClass}>
          <InputLabel classes={{ focused: classes.inputFocused }} id="demo-simple-select-label">Выберите раздел материалов</InputLabel>
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
            <MenuItem value="all">Все материалы</MenuItem>
            {
              materials && materials.categories ?
                materials.categories.map(elem => (
                  <MenuItem key={elem} value={elem}>{elem}</MenuItem>
                ))
                :
                <MenuItem value="all">Разделы отсутствуют</MenuItem>
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
                  }}>Скачать <GetAppIcon /></button>
                  <span>Количество скачиваний: {result && result.result ? result.result.find(item => item.material_id === elem.material_id)?.count : 0}</span>
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

export default Materials;
