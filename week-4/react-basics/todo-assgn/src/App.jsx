import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const addTodo = () => {
    const todo = {
      id: Math.random() * 1000,
      title: title,
      description: description
    };
    // Create a new array using spread operator
    const todoListUpdated = [...todoList, todo];
    setTodoList(todoListUpdated);

    console.log(todoListUpdated);
  }

  return (
    <>
      <div>
        <input type="text" name="title" id="title" value={title} placeholder='Enter Title Here' onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="description" id="description" value={description} placeholder='Enter Description Here' onChange={(e) => setDescription(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <br />
      <hr />
      <div>
        {
          // Use parentheses for implicit return
          todoList.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App