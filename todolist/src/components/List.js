import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import ListItem from "./ListItem";
import './Todo.css'

const List = (props) => {
    const todoList = useContext(TodoContext);

    return (
        <div className="outputList">
            {todoList.map(cur => {
                return (
                    <ListItem
                        todo={cur.description}
                        id={cur.id}
                        completed={cur.completed}
                        toggleItem={() => props.dispatch({type: "TOGGLE_COMPLETE", id: cur.id})}
                        key={cur.id}
                    />
                );
            })}
        </div>
    );
};

export default List;
