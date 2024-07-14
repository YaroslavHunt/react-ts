import React, {useState} from 'react';
import {ITodo} from "../models/ITodo";
import TodoComponent from "../components/TodoComponent";
import {Outlet} from "react-router-dom";

const TodosPage = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    fetch('https://dummyjson.com/todos')
        .then(value => value.json())
        .then(value => {
            setTodos(value.todos);
        });


    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <TodoComponent todos={todos}/>
        </div>
    );
};

export default TodosPage;