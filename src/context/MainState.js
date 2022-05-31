import { useReducer, useState } from "react";
import MainContext from "./mainContext";

const initialState = {
    noteList: [
        {
            id: 1,
            date: '2022-01-05',
            title: 'Note Title 1',
            subtitle: 'Note subtitle 1',
            description: 'Note Description 1',
        },
        {
            id: 2,
            date: '2022-02-07',
            title: 'Note Title 2',
            subtitle: 'Note subtitle 2',
            description: 'Note Description 2',
        }
    ]
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export default function MainState({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MainContext.Provider value={{
            state,
            dispatch,
        }}>
            {children}
        </MainContext.Provider>
    );
}