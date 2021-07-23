import logo from './logo.svg';
import './App.css';
import TodoModal from './Modal/TodoModal'
import ToDoList from './components/ToDoList/ToDoList';
import { useState, useEffect } from 'react';

function App() {
  const [editModal, setEditModal] = useState(false)
  const [inputList, setInputList] = useState(JSON.parse(localStorage.getItem('lists'))||[])
  const [editCard, setEditCard] = useState("")
  // const [inputList, setInputList] = useState([])
  const addItem = (d)=>{
    setInputList([...inputList, d])
  }

  useEffect(() => {
    
      localStorage.setItem('lists', JSON.stringify(inputList))
    
  }, [inputList])
  return (
    <>
    <TodoModal
            editModal={editModal}
            setEditModal={setEditModal}
            inputList={inputList}
            setInputList={setInputList}
            editCard={editCard}
            setEditCard={setEditCard}
            />
      <div className="main_div">
        <ToDoList
        inputList={inputList}
        setInputList={setInputList}
        listOfItems={addItem}
        editModal={editModal}
        setEditModal={setEditModal}
        setEditCard={setEditCard}
        />
        
      </div>
    </>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';
// import ToDoList from './components/ToDoCard/ToDoCard';
// import { useState } from 'react';

// function App() {
//   const [inputList, setInputList] = useState(JSON.parse(localStorage.getItem('listData')) || [])
  
//   const itemEvent = (d)=>{
//     setInputList([...inputList, d])
//     localStorage.setItem('listData', JSON.stringify([...inputList, d]))
//   }
//   return (
//     <>
//       <div className="main_div">
//         <ToDoList
//         add = {(d)=>itemEvent(d)}
//         inputList = {inputList}/>
//       </div>
//     </>
//   );
// }

// export default App;