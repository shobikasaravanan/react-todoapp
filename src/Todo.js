import React from 'react';
import { useState } from 'react';
import { List, ListItem, ListItemText }  from '@material-ui/core';
import './Todo.css';
import db from "./Firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';

function Todo(props) {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    function updateTodo() {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true });
        setOpen(false);
        setInput('');
    }

    return (
        <div class="todo-container">
            <List class="todo-wrapper">
                <ListItem href="#simple-list">
                    <ListItemText primary={props.todo.todo} />
                </ListItem>
                <EditIcon type="button" onClick={e=>setOpen(true)} />
                <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
            </List>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div class="modal-container">
                    <h1>Update Todo</h1>
                    <input value={input} onChange={event => setInput(event.target.value)} />
                    <button disabled={!input} onClick={updateTodo}>Update Todo</button>
                </div>
            </Modal>
        </div>
    )
}

export default Todo