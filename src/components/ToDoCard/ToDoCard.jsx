import React from 'react'
import './ToDOCard.css'
import '../ToDoList/ToDoList.css'

function ToDoCard({onSelect, itemval, setEditModal, key, setEditCard}) {
    return (
        <>
            <div className="todo_style" key={key}>
                <i className="fa fa-times" aria-hidden="true" onClick={()=>onSelect(itemval)}/>
                {/* <i className="fa fa-times" aria-hidden="true" onClick={(itemval)=>onSelect(itemval)}/> */}
                <li>
                    {itemval}
                <i class="fa fa-pencil-square-o" aria-hidden="true" onClick={()=>{setEditModal(true); setEditCard(itemval)}}></i>
                </li>
            </div>
        </>
    )
}

export default ToDoCard
