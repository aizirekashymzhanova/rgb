import { CircularProgress } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { adminNewsContext } from '../../contexts/AdminNewsContext';
import { newsContext } from '../../contexts/NewsContext';
import AdminPanelNavBar from '../AdminPanelNavBar/AdminPanelNavBar';

const EditNews = (props) => {

    const { getNewsDetails, newsDetails } = useContext(newsContext);
    const { editEvent } = useContext(adminNewsContext);
    const [formData, setFormData] = useState({ ...newsDetails });
    const history = useHistory();

    function handleChanges(event) {
        setFormData(
            {
                ...formData,
                [event.target.name]: event.target.value
            }
        );
    };

    function handleSubmit(event) {
        event.preventDefault();
        editEvent(formData, history);
    }

    useEffect(() => {
        getNewsDetails(props.match.params.id)
    }, []);

    useEffect(() => {
        setFormData({ ...newsDetails });
    }, [newsDetails])

    return (
        <>
            <AdminPanelNavBar />
            <div className="admin-panel__container">
                <span className="admin-panel__title">РЕДАКТИРОВАНИЕ НОВОСТИ</span>
                {
                    formData ?
                        (
                            <form onSubmit={handleSubmit} className="add-event__form">
                                <span className="form__title">Поля со знаком * являются обязательными для заполнения</span>
                                <label>Заголовок новости *</label>
                                <input onChange={handleChanges} value={formData.title} name="title" type="text" placeholder="Заголовок" />

                                <label>Описние *</label>
                                <textarea onChange={handleChanges} value={formData.description} name="description" type="text" placeholder="Описание" />

                                {/* {Блок 2} */}
                                <label>Подзаголовок</label>
                                <input onChange={handleChanges} value={formData.subTitle} name="subTitle" type="text" placeholder="Подаголовок" />

                                <label>Второе описание *</label>
                                <textarea onChange={handleChanges} value={formData.additionalDescription} name="additionalDescription" type="text" placeholder="Дополнительное Описание" />

                                <label>Дата публикации *</label>
                                <input onChange={handleChanges} value={formData.date} name="date" type="text" placeholder="День/Месяц/Год" />

                                <button type="submit">СОХРАНИТЬ</button>
                            </form>
                        )
                        :
                        <CircularProgress />
                }
            </div>
        </>
    );
};

export default EditNews;