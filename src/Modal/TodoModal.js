import React from 'react'
import './TodoModal.css'
import {useState, useEffect} from 'react'

function TodoModal({editModal, setEditModal, editCard, setEditCard, inputList, setInputList}) {
    const [newToDo, setNewToDo] = useState(editCard)
    const edit = ()=>{
        const newList = inputList.map((item)=>item==editCard?newToDo:item)
        console.log(newList)
        localStorage.setItem('lists', JSON.stringify(newList))
        
        setInputList(newList)
        
        setNewToDo("")
        setEditModal(false)

    }
    useEffect(() => {
        setNewToDo(editCard)
    }, [editCard])
    
    return (
        <>
            <div className='edit-modal-container' hidden={!editModal}>
            <div className='edit-main-container'><button className="close" onClick={() => {setEditModal(false);}}>X</button>
                <div>
                    <input class="new-data" value={newToDo} onChange={(e)=>setNewToDo(e.target.value)} />
                    <button class="save" onClick={edit}>Save</button>
                </div>
            </div>
        </div>
        </>
        )
}

export default TodoModal
