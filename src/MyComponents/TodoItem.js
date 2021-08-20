import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <butten className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</butten>

        </div>
        <hr/>
        </>
    )
}
