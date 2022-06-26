import './App.css';
import { useState } from 'react';
function App() {
  const [todo,setTodo] = useState('')
  const [todos,setTodos] = useState([])

  function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

var dateStr = Date();
var day = getDayName(dateStr, 'en-US');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...todos,{id:Date.now(),text:todo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { todos.map((obj)=>{
          return(
        <div className="todo">
          <div className="left">
          <input onChange={(e)=>{
            setTodos(todos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              console.log(e.target.checked)
              return obj2
            }))
          }}
            value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={(e)=>{
                todos.splice(todos.indexOf(obj), 1);
                setTodos([...todos]);
            }
           } 
            className="fas fa-times"></i>
          </div>
        </div>
    
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
