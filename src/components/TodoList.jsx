function TodoList({name,date,onDelete}){
    return <>
    <div className="col-5">
    <div className="input-group mb-3">
  <input type="text" className="form-control border-2" value={name} readOnly/>
  
</div>
    </div>
    <div className="col-4">
<div>
<div className="input-group mb-3">
  <input type="text" className="form-control border-2" value={date} readOnly/>
</div>
</div>
    </div>
    <div className="col-3">
<button className="btn btn-danger" onClick={()=>onDelete(name)}>Delete</button>
    </div>
    </>
}
export default TodoList