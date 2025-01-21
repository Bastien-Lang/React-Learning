import {myTask} from "./Data/data.js";
import TodoList from './TodoList.jsx'
import './App.css'

function App() {
    let name = 'Toto'
  return (
      <>
          <div className="App">
              <p>
                  Hello {name}!
              </p>
          </div>
          <TodoList task={myTask} />
      </>
  )
}

export default App
