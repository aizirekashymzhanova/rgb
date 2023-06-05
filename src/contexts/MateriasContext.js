import axios from 'axios';
import React, { useReducer } from 'react';
import { GET_MATERIALS_API } from '../helpers/constants';

export const materialsContext = React.createContext();

const INIT_STATE = {
    materials: null,
    totalPages: 1,
}

const INIT_STATE2 = {
    result: null,
    totalPages: 1,
  };
  

const reducer = (state = INIT_STATE, action) => {
    console.log(state, "1111")
    console.log(action, "action")
    switch (action.type) {
        case "GET_MATERIALS":
            return {
                ...state,
                totalPages: action.payload.totalPages,
                materials: action.payload
            }
        default:
            return state
    }
}

const reducer2 = (state2 = INIT_STATE2, action2) => {
    console.log(state2, "2222")
    console.log(action2, "action2")
    switch (action2.type) {
        case "GET_MATERIALS_COUNT":
            return {
                ...state2,
                result: action2.payload
            }
        default:
            return state2
    }
}

const MaterialsContextProvider = ({ children }) => {

    async function getMaterials() {
        const { data } = await axios.get(`${GET_MATERIALS_API}${window.location.search}`);
        console.log(data, "GET_MATERIALS");
        dispatch({
            type: "GET_MATERIALS",
            payload: data
        });
    }

    async function getMaterials_count() {
        const { data } = await axios.get(`https://lis.kg/coun_down_material`);
        console.log(data, "GET_MATERIALS_COUNT");
        dispatch2({
            type: "GET_MATERIALS_COUNT",
            payload: data
        });
    }

    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [state2, dispatch2] = useReducer(reducer2, INIT_STATE2);

    return (
        <materialsContext.Provider value={{
            materials: state.materials,
            totalPages: state.totalPages,
            result: state2.result,
            getMaterials,
            getMaterials_count
        }}>
            {children}
        </materialsContext.Provider>
    )
}

export default MaterialsContextProvider;