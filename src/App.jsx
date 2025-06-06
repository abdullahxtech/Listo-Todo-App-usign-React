import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [hasloaded, sethasloaded] = useState(false)
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showfinished, setshowFinished] = useState(true)

  useEffect(() => {
    if(hasloaded){
      localStorage.setItem("todos",JSON.stringify(todos)) 
    }
  },[todos,hasloaded])  

  useEffect(() => {
    let todosting = localStorage.getItem("todos")
    if(todosting){
      let todo = JSON.parse(localStorage.getItem("todos"))
      setTodos(todo)
    }
    sethasloaded(true)
  }, [])
  

  const saveToLs = (params)=> {
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  const handleAdd = ()=>{
    setTodos([...todos,{id: uuidv4(),todo,isCompleted: false}])
    setTodo("")
    saveToLs()
  }

  const handleEdit = (e,id)=>{
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo)

    let newTodos = todos.filter((item)=>{
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLs();
  }

  const handleDelete = (e,id)=>{
    let newTodos = todos.filter((item)=>{
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLs()
  }


  const handleCheckBox = (e)=>{
    let id = e.target.name
    let index = todos.findIndex((item)=>{
      return item.id == id;
    });
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos);
    saveToLs();
  }

  const toggleFinished = ()=>{
    setshowFinished(!showfinished);
  }

  const keypress = ((e)=>{
    // if(todo.length<=3)
    // }
    console.log(e)
  })

  return (
    <>
      <Navbar/>

      <div className="container bg-violet-100 mx-auto my-3 h-[88vh] rounded-xl w-[65vw]">
        <h1 className='text-center m-1 text-4xl font-bold text-violet-700'>Listo - Add your task at one place</h1>

        <div className="addTodo flex flex-col justify-center items-center gap-5 m-5">
          <h2 className='text-2xl font-bold'>Add a ToDo</h2>
          <div className='flex gap-3'>
            <input className='bg-white p-[2px] w-100 h-10 rounded-2xl px-5' type="text" value={todo} onChange={handleChange}/>
            <button onClick={handleAdd} disabled={todo.length<=3} className='bg-purple-500 text-white h-10 w-15 rounded-2xl p-[2px]'>Save</button>
          </div>
        </div>

        <div className='h-[1px] w-[95%] m-auto my-3 bg-gray-500'></div>

        <div className='showcompleted flex items-center gap-3 text-[19px] mx-9'>
          <h2 className='font-bold mx-10 text-3xl'>Your ToDos</h2>
          <input type="checkbox" checked={showfinished} onChange={toggleFinished}/>
          <p className=''>Show Completed</p>
        </div>
        <div></div>
        

        <div className="todos overflow-auto h-[60%] w-[95%] p-1 border-[5px] border-green-950 m-auto my-3">
          {todos.length == 0 && <div className='m-5 text-2xl'>No Todos to Show</div>}
          {todos.map((item)=>{
            return( 
            (showfinished || !item.isCompleted) && (
            <div key={item.id} className='flex gap-3 mx-4 my-3 text-[19px] items-center'>
              <div className="todo flex gap-3 text-[19px] w-[50%]">
                <input name={item.id} type="checkbox" checked={item.isCompleted} onChange={handleCheckBox}/>
                <div className={item.isCompleted? "line-through":""}>
                  {item.todo}
                </div>
              </div>
              <div className="buttons flex gap-3">
                <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-purple-500 text-white rounded-xl p-[1px] w-[60px]'>Edit</button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-purple-500 text-white rounded-xl p-[1px] w-[60px]'>Delete</button>
              </div>
            </div>
            )
          )
          })}
        </div>
      </div>
    </>
  )
}

export default App
