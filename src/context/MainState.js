import { useReducer } from "react";
import MainContext from "./mainContext";

const initialState = {
    count: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
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
        <MainContext.Provider value={{ state, dispatch }}>
            {children}
        </MainContext.Provider>
    );
}