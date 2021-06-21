import { useState, useEffect, useReducer, useCallback, useRef } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/Todoinsert";
import TodoList from "./components/TodoList";


const createLag = () => {
  const arr = [];
  for (let i = 1; i < 2505; i++) {
    arr.push({
      id: i,
      text: `할일 $(i)`,
      checked: true
    });
  }
  return arr;
}


function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT":
      return todos.concat(action.todo1);
    case "REMOVE":
      return todos.filter(todo => todo.id !== action.id);
    case "TOGGLE":
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo);
    default:
      return todos;
  }
}
const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({
    name: "",
    username: ""
  });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setForm({
        ...form,
        name: value
      });
    }, [form]
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };
      setData({
        ...data,
        array: data.array.concat(info)
      });

      setForm({
        name: "",
        username: ""
      });
      nextId.current += 1;
    }, [data, form.name, form.username]
  )

  const onRemove = useCallback(
    id => {
      setData({
        ...data,
        array: data.array.filter(info => info.id !== id)
      });
    }, [data]
  );



  {/* todoList
  const [todos, dispatch] = useReducer(todoReducer, undefined, createLag);
  const nextId = useRef(2501);
  const onInsert = useCallback(
    (text) => {
      const todo1 = {
        id: nextId.current,
        text: text,
        checked: false
      };
      dispatch({ type: "INSERT", todo1 });
      nextId.current += 1;
    }, [todos]);

  const onRemove = useCallback(
    (id) =>
      dispatch({ type: "REMOVE", id })
    , [])

  const onToggle = useCallback(
    (id) =>
      dispatch({ type: "TOGGLE", id }, []));
  */}
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="ID!!"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="name"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등로옥</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.usename} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>


    /* todoList
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
    */
  );
}

export default App;
