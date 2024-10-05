import Container from "./components/Container";
import AppName from "./components/AppName";
import InputField from "./components/InputField";
import { useState } from "react";
function App(){

let intitem=[
  {
    "name":"Sharing Projects",
    "date":"5-10-2024"
  }
]
const [item,setItem]=useState(intitem)
function addNewItem(tItem,dueDate){
// console.log(tItem)
// console.log(dueDate)

let newObj=[...item,
  {
    name:tItem,
    date:dueDate
  }
];
setItem(newObj)
}

function onDelete(itemName){

let newArr=item.filter(item=>itemName!=item.name)
setItem(newArr)
}
  return <>
  <Container>
  <AppName></AppName>
  <InputField item={item} addNewItem={addNewItem} onDelete={onDelete}></InputField>
  </Container>
  </>

}
export default App;