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

const useStyles = makeStyles(theme => ({

    pagination: {
        color: "#c4ab9d",
        // margin: 'auto',
        // padding: 'auto'
    },
    formControl: {
        margin: theme.spacing(1),
        width: '30%',
        ['@media (max-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            width: '70%'
        }
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
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
    const { getMaterials, materials, totalPages } = useContext(materialsContext);
    const history = useHistory();
    const [page, setPage] = useState(getPage());
    const classes = useStyles();
    const [category, setCategory] = useState(getCategory());

    useEffect(() => {
        isUserLogedIn(history);
        getMaterials();
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
        setPage(page);
    }

    const saveFile = (url, fileName) => {
        FileSaver.saveAs(
            url,
            fileName
        );
    };

    return (
        <>
            <NavBar />
            <div className="news__container">
                <span className="news__title">?????????????????? ?????? ????????????????????</span>

                {/* Category start */}

                <FormControl className={classes.inputLabel} className={classes.formControl}>
                    <InputLabel classes={{ focused: classes.inputFocused }} id="demo-simple-select-label">???????????????? ???????????? ????????????????????</InputLabel>
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
                        <MenuItem value="all">?????? ??????????????????</MenuItem>
                        {
                            materials && materials.categories ?
                                materials.categories.map(elem => (
                                    <MenuItem key={elem} value={elem}>{elem}</MenuItem>
                                ))
                                :
                                <MenuItem value="all">?????????????? ??????????????????????</MenuItem>
                        }
                    </Select>
                </FormControl>

                {/* Category end */}

                <div className="download">
                    {
                        materials ?
                            (
                                materials.materials.map(elem => (
                                    <div key={elem.material_pathname} className="download__item">
                                        <span className="download__item__title">{elem.material_title}</span>
                                        <img className="download__item__image" src={elem.material_image} alt="" />
                                        <span className="download__item__name">{elem.material_name}</span>
                                        <span className="download__item__description">{elem.material_description}</span>
                                        <button onClick={() => saveFile(elem.material_pathname, elem.material_title)}>?????????????? <GetAppIcon /></button>
                                    </div>
                                ))
                            )
                            :
                            '?????????????????? ??????????????????????'
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