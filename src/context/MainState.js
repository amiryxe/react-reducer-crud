import { useState, useReducer } from "react";
import MainContext from "./mainContext";

export default function MainState({ children }) {
    const [state, setState] = useState({
        //...
    });

    const reducer = (state, action) => {
        switch (action.type) {
            case "":
                return {
                    ...state,
                    ...action.payload
                };
            default:
                return state;
        }
    };

    return (
        <MainContext.Provider value={{ state, setState }}>
            {children}
        </MainContext.Provider>
    );
}