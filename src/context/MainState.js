import { useState } from "react";
import MainContext from "./mainContext";

export default MainState(){
    const [state, setState] = useState({
        isLoggedIn: false,
        user: {},
        isLoading: false,
        error: null
    });

    return (
        <MainContext.Provider value={[state, setState]}>
            {props.children}
        </MainContext.Provider>
    );
}