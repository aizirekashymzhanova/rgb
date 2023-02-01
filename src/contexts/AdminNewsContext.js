import axios from 'axios';
import React, { useReducer, useContext } from 'react';
import { ADD_EVENT_API, UPDATE_EVENT_API, DELETE_EVENT_API, GET_NEWS_API, GET_NEWS_DETAILS_API } from '../helpers/constants';

export const adminNewsContext = React.createContext();

const INIT_STATE = {
    news: null,
    totalPages: 1,
    progress: null,
    errMessage: ''
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_NEWS":
            return {
                ...state,
                totalPages: action.payload.totalPages,
                news: action.payload
            }
        case "GET_ERROR_MESSAGE":
            return {
                ...state,
                errMessage: action.payload
            }
        case "GET_UPLOADING_PROGRESS":
            return {
                ...state,
                progress: action.payload
            }
        default:
            return state
    }
}

const AdminNewsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function postEvent(newEvent, history, images) {

        if (!newEvent.date) {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = dd + '/' + mm + '/' + yyyy;
            newEvent.date = today;
        }

        let formData = new FormData();
        formData.append(
            'data',
            JSON.stringify(newEvent)
        );

        try {
            Array.from(images).forEach(image => {
                formData.append(
                    'files[]',
                    image
                )
            });
        } catch (err) {
            console.log(err);
        }

        try {
            const { data } = await axios.post(ADD_EVENT_API, formData, {
                headers: { 'content-type': 'multipart/form-data' },
                onUploadProgress: data => {
                    //Set the progress value to show the progress bar
                    dispatch({
                        type: "GET_UPLOADING_PROGRESS",
                        payload: Math.round((100 * data.loaded) / data.total)
                    });
                },
            });
            console.log(data);
            if (data.success) {
                history.push("/admin-panel-news");
            }
            else {
                dispatch({
                    type: "GET_ERROR_MESSAGE",
                    payload: data.message
                });
                dispatch({
                    type: "GET_UPLOADING_PROGRESS",
                    payload: null
                });
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function getNews() {
        const { data } = await axios.get(`${GET_NEWS_API}${window.location.search}`);
        console.log(data);
        dispatch({
            type: "GET_NEWS",
            payload: data
        });
    }

    async function editEvent(editedEvent, history) {
        try {
            const { data } = await axios.post(UPDATE_EVENT_API, editedEvent);
            console.log(data);
            history.push("/admin-panel-news");
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteEvent(id) {
        const dataToDelete = { id }
        try {
            const { data } = await axios.post(DELETE_EVENT_API, dataToDelete);
            getNews();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <adminNewsContext.Provider value={{
            progress: state.progress,
            errMessage: state.errMessage,
            news: state.news,
            totalPages: state.totalPages,
            getNews,
            postEvent,
            editEvent,
            deleteEvent
        }}>
            {children}
        </adminNewsContext.Provider>
    )
}

export default AdminNewsContextProvider;