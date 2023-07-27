import { useState } from 'react';
import { TaskCard } from './TaskCard';
import './TaskList.css';
import './AddTask.css';

export const TaskList = ({tasks, setTasks}) => {

      const [show, setShow] = useState(true);

      function handleDelete(id){
        setTasks(tasks.filter(task => id !== task.id))
      }
    return (
        <section className='tasklist'>
            <ul>
                <div  className='header'>
                    <h1>Tasks List</h1>
                    <button className='trigger' onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
                </div>

                { show && tasks.map((task) => ( 
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
                ))}
            </ul> 

        </section>
    )
}