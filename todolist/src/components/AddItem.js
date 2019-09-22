import React, { useState } from "react";
import "./Todo.css";


const AddItem = props => {
    const [text, setText] = useState('');

    return (
        <div className="todoForm">
            <form>
                <input
                    type="text"
                    name="newItem"
                    onKeyPress={e => {
                        if (e.keyCode === 13) props.addNewItem();
                    }}
                    onChange={(e) =>  setText(e.target.value)}
                    value={text}
                    className="inputField"
                    id="todo"
                    required
                />
                <label>
                    <span>{props.inputText}</span>
                </label>
                <div className="formButtons">
                    <input
                        type="submit"
                        onClick={(e) => {e.preventDefault();props.dispatch({type: "ADD_TODO", payload: text });setText('')}}
                        value="Add To List"
                        className="subBtn"
                    />
                    <input
                        type="button"
                        onClick={() => props.dispatch({type: "CLEAR_COMPLETED"})}
                        value="Clear Complete"
                        className="clearBtn"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddItem;
