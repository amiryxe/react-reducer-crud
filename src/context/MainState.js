import { useState } from "react";
import MainContext from "./mainContext";

export default function MainState({ children }) {
    const [state, setState] = useState({
        //...
    });

    return (
        <MainContext.Provider value={{ state, setState }}>
            {children}
        </MainContext.Provider>
    );
}