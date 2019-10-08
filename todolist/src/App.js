import React, { useReducer } from "react";
import "reset-css"
import "normalize.css"
import "./App.css";
import { todoState } from "./state/TodoState";
import { todoReducer } from "./reducers/TodoReducer";
import { TodoContext } from "./contexts/TodoContext";
import List from "./components/List";

import AddItem from "./components/AddItem";

function App() {
    const [state, dispatch] = useReducer(todoReducer, todoState);

    return (
        <TodoContext.Provider value={state}>
            <div className="appContainer">
                <AddItem dispatch={dispatch} />
                <List dispatch={dispatch}/>
            </div>
        </TodoContext.Provider>
    );
}

export default App;
