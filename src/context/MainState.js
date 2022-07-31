import { useReducer } from "react";
import MainContext from "./mainContext";

const initialState = {
    noteList: localStorage.getItem('noteList') ? JSON.parse(localStorage.getItem('noteList')) : []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            localStorage.setItem('noteList', JSON.stringify([...state.noteList, action.payload]));
            return { noteList: [...state.noteList, action.payload] };
        case 'DELETE_NOTE':
            return { noteList: [...state.noteList.filter(item => item.id !== action.payload)] };
        default:
            throw new Error();
    }
}

export default function MainState({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MainContext.Provider value={{
            noteList: state.noteList,
            dispatch,
        }}>
            {children}
        </MainContext.Provider>
    );
}