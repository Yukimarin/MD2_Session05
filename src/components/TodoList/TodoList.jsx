import React, { useState } from "react";
import Form from "./Form";
import ListTodo from "./ListTodo";
import Total from "./Total";
function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edits, setEdits] = useState("");
  const [total, setTotal] = useState(todos.length);
  return (
    <div>
      <div className='container'>
        <h1>TODOLIST</h1>
        <Form
          input={input}
          setInput={setInput}
          todo={todos}
          setTodo={setTodos}
          setTotal={setTotal}
        ></Form>
        <ListTodo
          todo={todos}
          setTodo={setTodos}
          edit={edits}
          setEdit={setEdits}
          setTotal={setTotal}
        ></ListTodo>
        <Total total={total} setTotal={setTotal} setTodo={setTodos}></Total>
      </div>
    </div>
  );
}

export default TodoList;
