import React, { useState } from "react";

import ToDoCard from "../ToDoCard/ToDoCard";
// import ToDoCard from "../ToDoList/ToDoList";
import "./ToDoList.css";

const ToDoList = (props) => {
    
    const [inputArea, setInputArea] = useState("")
  
    const submit=()=>{
        props.listOfItems(inputArea)
        setInputArea("")

    }

    const deleteItem = (d)=>{
        const data = props.inputList.filter((i)=>i!=d)
        props.setInputList(data)
        console.log(data)
        console.log(d)
        // console.log("deleted")
    }

   
    return (<>
    
        <div className="center-div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <form onSubmit={submit}>
            <input value={inputArea} type="text" placeholder="Enter an Items" onChange={(e)=>setInputArea(e.target.value)}/>
            </form>
            <button onClick={submit}>+</button>
            
            <ol>
                {props.inputList.map((itemval)=>
                    <ToDoCard
                    key={itemval}
                    itemval={itemval}
                    onSelect={deleteItem}
                    setEditModal={props.setEditModal}
                    setEditCard={props.setEditCard}
                    />
                )}
            </ol>
            
        </div>
    </>);
}

export default ToDoList;



// import React, { useState } from "react";
// import ToDoCard from "../ToDoList/ToDoList";
// import "./ToDoCard.css";

// const ToDoList = (props) => {
    
//     const [searchInput, setSearchInput] = useState("")
//     const submit = (e)=>{
       
//         props.add(searchInput)
//         setSearchInput("")
//     }
//     return (<>
//         <div className="center-div">
//             <br />
//             <h1>ToDo List</h1>
//             <br />
//             <input value={searchInput} type="text" placeholder="Enter an Items" onChange={(e)=>setSearchInput(e.target.value)}/>
//             <button onClick={submit}>+</button>
//             <ol>{props.inputList.map((value) =><li><ToDoCard value={value}/></li>)}</ol>
            

//         </div>
//     </>);
// }

// export default ToDoList;