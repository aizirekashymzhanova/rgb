import React, { useContext, useState } from 'react';
import './Contacts.css'
import NavBar from '../NavBar/NavBar';
import { SEND_MAIL_API } from '../../helpers/constants';

import CallIcon from '@material-ui/icons/Call';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import axios from 'axios';
import siUseLg from '../../assets/images/rena.jpg';
import aa from '../../assets/images/aa.jpg';
import bb from '../../assets/images/bb.jpg';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { LanguageContext } from '../../contexts/LanguageContext';

const Contacts = () => {
    const { language } = useContext(LanguageContext);

    const [sendMessageFormData, setsendMessageFormData] = useState({ name: '', email: '', message: '' });
    const [statusMessage, setStatusMessage] = useState({});

    function changesHandler(event) {
        setsendMessageFormData({
            ...sendMessageFormData,
            [event.target.name]: event.target.value
        });
    }

    async function sendsendMessageFormData(event) {

        event.preventDefault();
        console.log(sendMessageFormData);

        if (!sendMessageFormData.name
            || !sendMessageFormData.email
            || !sendMessageFormData.message) {
            setStatusMessage({ message: 'Пожалуйста, заполните все поля' });
            return;
        }

        let formData = new FormData();
        formData.append(
            'name',
            sendMessageFormData.name
        )
        formData.append(
            'email',
            sendMessageFormData.email
        )
        formData.append(
            'message',
            sendMessageFormData.message
        )

        const { data } = await axios.post(SEND_MAIL_API, formData);
        setStatusMessage(data);
        if (data.success) {
            setsendMessageFormData({ name: '', email: '', message: '' })
        }
        console.log(data);
    }

    return (
        <>
            <NavBar />
            {language === 'ru' ? <div className="contacts__container">
                <span className="contacts-us__title">СВЯЖИТЕСЬ С НАМИ</span>
                <span className="contact__title">НАШИ КОНТАКТЫ</span>
                <span className="contact__info">Кыргызская Республика, г. Бишкек</span>
                <span className="contact__info">ул. Туголбай Ата 67/123</span>
                <span className="contact__info"><CallIcon />+996 312 469 320</span>
                <span className="contact__info"><AlternateEmailIcon />technolandpf@gmail.com</span>

                <span className="contact__title">Председатель общественного фонда</span>
                <span className="contact__info">Султангазиева Р.Т.</span>
                <span className="contact__info"><CallIcon /> +996 772 322 652</span>
                <span className="contact__info"><AlternateEmailIcon /> renasultangazieva@gmail.com</span>

                <span className="contact__title">Координатор фонда</span>
                <span className="contact__info">Турдалиева А.А.</span>
                <span className="contact__info"><CallIcon /> +996 778 810 250</span>
                <span className="contact__info"><AlternateEmailIcon /> aizada.amanbekovna@krena.kg</span>

                <span className="contact__title">Наблюдательный совет</span>
                <span className="contact__info">Медралиева Б.Н.</span>
                <span className="contact__info"><AlternateEmailIcon /> medralieva@mail.ru</span>


                <form onSubmit={sendsendMessageFormData} className="contacts__form">
                    <span className="form__title">ОБРАТНАЯ СВЯЗЬ</span>
                    <div className="form__inputs">
                        <div className="form__input__container">
                            <label>Введите ваше имя *</label>
                            <input onChange={changesHandler} value={sendMessageFormData.name} name="name" className="form__input" placeholder="Пример: Асанов Усон" />
                        </div>
                        <div className="form__input__container">
                            <label>Введите ваш email *</label>
                            <input onChange={changesHandler} value={sendMessageFormData.email} name="email" className="form__input" placeholder="example@example.com" />
                        </div>
                    </div>
                    <div className="form__textarea__container">
                        <label>Введите сообщение *</label>
                        <textarea onChange={changesHandler} value={sendMessageFormData.message} name="message" className="form__textarea" placeholder="Введите сообщение от 20 до 500 символов" />
                    </div>
                    <span className="contact-form__error" style={{ color: statusMessage.success ? 'green' : 'red' }}>{statusMessage.message}</span>
                    <button className="form__submit-btn" type="submit">Отправить сообщение</button>
                </form>
            </div> : <div className="contacts__container">
                <span className="contacts-us__title">CONTACT US</span>
                <span className="contact__title">OUR CONTACTS</span>
                <span className="contact__info">Kyrgyz Republic, Bishkek</span>
                <span className="contact__info">Ul. Tugolbai Ata 67/123</span>
                <span className="contact__info"><CallIcon />+996 312 469 320</span>
                <span className="contact__info"><AlternateEmailIcon />technolandpf@gmail.com</span>

                <span className="contact__title">Chairman of the Public Foundation</span>
                <span className="contact__info">Sultangazieva R.T.</span>
                <span className="contact__info"><CallIcon /> +996 772 322 652</span>
                <span className="contact__info"><AlternateEmailIcon /> renasultangazieva@gmail.com</span>

                <span className="contact__title">Fund coordinator</span>
                <span className="contact__info">Turdalieva A.A.</span>
                <span className="contact__info"><CallIcon /> +996 778 810 250</span>
                <span className="contact__info"><AlternateEmailIcon /> aizada.amanbekovna@krena.kg</span>

                <span className="contact__title">Supervisory Board</span>
                <span className="contact__info">Medralieva B.N.</span>
                <span className="contact__info"><AlternateEmailIcon /> medralieva@mail.ru</span>


                <form onSubmit={sendsendMessageFormData} className="contacts__form">
                    <span className="form__title">REFERENCE</span>
                    <div className="form__inputs">
                        <div className="form__input__container">
                            <label>Enter your name *</label>
                            <input onChange={changesHandler} value={sendMessageFormData.name} name="name" className="form__input" placeholder="Example: Uson Asanov" />
                        </div>
                        <div className="form__input__container">
                            <label>Enter your email *</label>
                            <input onChange={changesHandler} value={sendMessageFormData.email} name="email" className="form__input" placeholder="example@example.com" />
                        </div>
                    </div>
                    <div className="form__textarea__container">
                        <label>Enter the message *</label>
                        <textarea onChange={changesHandler} value={sendMessageFormData.message} name="message" className="form__textarea" placeholder="Enter a message between 20 and 500 characters" />
                    </div>
                    <span className="contact-form__error" style={{ color: statusMessage.success ? 'green' : 'red' }}>{statusMessage.message}</span>
                    <button className="form__submit-btn" type="submit">Send message</button>
                </form>
            </div>}
        </>
    );
};

export default Contacts;