import React, { useContext, useState } from 'react';
import './AddEvent.css';
import { adminNewsContext } from '../../contexts/AdminNewsContext';
import { useHistory } from 'react-router';
import AdminPanelNavBar from '../AdminPanelNavBar/AdminPanelNavBar';
import DoneIcon from '@material-ui/icons/Done';
import LinearWithValueLabel from '../LinearProgressWithLabel/LinearProgressWithLabel';

const AddEvent = () => {
    const { postEvent, errMessage, progress } = useContext(adminNewsContext);
    const history = useHistory();
    const [selectedImages, setSelectedImages] = useState();
    const [formData, setFormData] = useState(
        {
            title: '',
            description: '',
            subTitle: '',
            additionalDescription: '',
            date: ''
        }
    )

    function handleChanges(event) {
        setFormData(
            {
                ...formData,
                [event.target.name]: event.target.value
            }
        );
    };

    function onImageChange(event) {
        setSelectedImages(event.target.files);
        console.log(selectedImages);
    }

    function handleSubmit(event) {
        event.preventDefault();
        postEvent(formData, history, selectedImages);
    }

    return (
        <>
            <AdminPanelNavBar />
            <div className="admin-panel__container">
                <span className="admin-panel__title">ДОБАВЛЕНИЕ НОВОСТИ</span>
                <form onSubmit={handleSubmit} className="add-event__form">
                    <span className="form__title">Поля со знаком * являются обязательными для заполнения</span>
                    <label>Заголовок новости *</label>
                    <input onChange={handleChanges} value={formData.title} name="title" type="text" placeholder="Заголовок" />

                    <label>Описние *</label>
                    <textarea onChange={handleChanges} value={formData.description} name="description" type="text" placeholder="Описание" />

                    <label>Главное изображение *</label>
                    <div className="form__browse-block">
                        <label htmlFor="file-upload" className="form__browse-block__btn">{selectedImages ? 'Файлы выбраны' : 'Выберите файлы'}</label>
                        {selectedImages && <DoneIcon style={{ color: 'orange', fontSize: '35px' }} />}
                        <input className="form__browse-block__inp" id="file-upload" type="file" onChange={onImageChange} multiple="multiple" />
                    </div>

                    {/* {Блок 2} */}
                    <label>Подзаголовок</label>
                    <input onChange={handleChanges} value={formData.subTitle} name="subTitle" type="text" placeholder="Подаголовок" />

                    <label>Второе описание *</label>
                    <textarea onChange={handleChanges} value={formData.additionalDescription} name="additionalDescription" type="text" placeholder="Дополнительное описание" />

                    <label>Дата публикации (необязательно)</label>
                    <input onChange={handleChanges} value={formData.date} name="date" type="text" placeholder="День/Месяц/Год" />

                    <span className="news__form__error">{errMessage}</span>

                    {progress && <LinearWithValueLabel value={progress} />}

                    <button type="submit">ОПУБЛИКОВАТЬ</button>
                </form>
            </div>
        </>
    );
};

export default AddEvent;