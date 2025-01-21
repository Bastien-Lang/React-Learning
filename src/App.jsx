import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {myTask} from "./Data/data.js";
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
          <div className='Data'>
                <h1>My Tasks</h1>
                <ul>
                    {myTask.map((task) => (
                        <li key={task.id}>{task.name}</li>
                    ))}
                </ul>
          </div>
      </>
  )
}

export default App
