import { useState, useReducer } from "react";
import MainContext from "./mainContext";

export default function MainState({ children }) {
    const [state, setState] = useState({
        title: 'test'
    });

    // reducer here

    return (
        <MainContext.Provider value={{ state, setState }}>
            {children}
        </MainContext.Provider>
    );
}