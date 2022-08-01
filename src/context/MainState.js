import { useReducer } from "react";
import MainContext from "./mainContext";

const saveToLocalStorage = (arr) => {
    localStorage.setItem('noteList', JSON.stringify(arr));
}

const initialState = {
    noteList: localStorage.getItem('noteList') ? JSON.parse(localStorage.getItem('noteList')) : []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            saveToLocalStorage([...state.noteList, action.payload]);
            return { noteList: [...state.noteList, action.payload] };
        case 'DELETE_NOTE':
            saveToLocalStorage(state.noteList.filter(note => note.id !== action.payload));
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