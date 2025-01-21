import {myTask} from "../Data/data.js";
import './app.module.css'
import Tasks from '../Tasks'
import styles from './app.module.css'

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
                <h2 className='title'>I love these tasks</h2>
                <ul className={styles.ul}>
                    {myTask.map((task) => (<Tasks task={task} />))}
                </ul>
          </div>
      </>
  )
}

export default App
