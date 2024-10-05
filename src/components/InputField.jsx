import TodoList from "./TodoList";
import { Children, useState } from "react";

function InputField({ item, addNewItem,onDelete}) {
    const [Todo,setTodo]=useState()
    const [TodoDate,setTodoDate]=useState()
    function handleItemOnchange(event){
       setTodo(event.target.value)

    }
    function handleDateOnchange(event){
            setTodoDate(event.target.value)

    }
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-5">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control border-2"
                placeholder="Enter Todo Name"
                onChange={handleItemOnchange}
              />
            </div>
          </div>

          <div className="col-4">
            <div className="input-group mb-3">
              <input
                type="Date"
                className="form-control border-2"
                placeholder="Enter Todo Date"
                onChange={handleDateOnchange}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="input-group mb-3">
              <button className="btn btn-success" onClick={()=>addNewItem(Todo,TodoDate)}>Save</button>
            </div>
          </div>
          {item.map((items) => (
            <TodoList name={items.name} date={items.date} onDelete={onDelete}></TodoList>
          ))}
        </div>
      </div>
    </>
  );
}
export default InputField;
