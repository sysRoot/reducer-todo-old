import React, { useReducer } from "react";
import { todoState } from "./state/TodoState";
import { todoReducer } from "./reducers/TodoReducer";
import { TodoContext } from "./contexts/TodoContext";
import List from "./components/List";
import "./App.css";
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
