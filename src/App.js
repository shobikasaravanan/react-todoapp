import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import db from './Firebase.js';
import firebase from "firebase";
import Todo from './Todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['anc', 'bcn', 'cdef'])
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo })))
    })
  }, []);

  const addTodo = function(event) {
    event.preventDefault();
    console.log(firebase);
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input])
    setInput('');
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <form>
        <FormControl>
          <InputLabel>Add your Todos!!!</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        {/* <input value={input} onChange={event => setInput(event.target.value)} /> */}
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todos
        </Button>
        {/* <button ></button> */}
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
         ))}
      </ul>
    </div>
  );
}

export default App;
