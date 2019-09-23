import React, { useReducer, useEffect } from "react";
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
    console.log('App.js', state)
    // useEffect(() => {
    //   if (!localStorage.todoData) {
    //     localStorage.setItem('todoData', JSON.stringify([{description: 'Testing Galore', completed: true, id: 331242}]))
    //   }
  
    //   // let storedTodoArr = JSON.parse(localStorage.todoData)
    //   // dispatch({type: "FETCH_LOCAL", payload: storedTodoArr});
    // })
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
