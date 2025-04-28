import { useState } from "react"

function App() {

  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState("");
  
  const addTodo = () =>{
    if(input.trim()){
      setTodos([...todos,{id:Date.now(), 
      text:input, completed:false}])
      setInput("")
    }

  }
  
  
  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-red-700">

        <div className="bg-white shadow-lg rounded-3xl p-16">
          <h1 className="font-bold text-center text-3xl mb-6">
            REACT TODO LIST ✅
          </h1>

              <div className="mb-4 flex">
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" placeholder="Add new todo" className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-red-700"/>
                <button
                onClick={addTodo}
                className=" border border-black bg-red-600 px-4 py-2.5 rounded-r-lg text-white hover:bg-green-500">ADD</button>
              </div>

            <ul className="space-y-2">
              {
                todos.map((todo) =>(

                  <li key ={todo.id}
                  className="flex item-center 
                  rounded-lg bg-black border border-black">

                        <input type="checkbox" 
                        checked ={todo.completed}
                        onChange ={() => setTodos(
                          todos.map((t) =>(
                          t.id === todo.id ? {...t,
                            completed : !t.completed} : t
                          ))
                        )}
                        className="mt-3.5 ml-2 h-4 w-4"
                        /> 

                          <span className={`flex-grow ${todo.completed ? 
                          "line-through decoration-3 text-gray-200 p-2.5" : "text-white font-bold p-2.5"}
                          `}
                          >{todo.text}
                          </span>

                              <button 
                                onClick ={() => setTodos(todos.filter((t) => t.id !== todo.id))}
                                className="ml-2-black p-2 rounded-r-lg
                                bg-green-500 text-white hover:bg-red-600"
                              >DELETE</button>
                  </li>

                ))

              }
            </ul>


        </div>

     </div>
    </>
  )
}

export default App
