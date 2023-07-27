import { useState } from 'react';
import './AddTask.css';

export const AddTask = ({tasks, setTasks}) => {
    const [taskValue, setTaskValue] = useState('');
    const [progress, setProgress] = useState(false);

    const handleReset = (event) => {
        setTaskValue('');
        setProgress(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: Boolean(progress)
        }
        setTasks([...tasks, task]);
        handleReset();
    }

  return (
    <section className="addtask">
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTaskValue(e.target.value)} type="text" name='task' id='task' placeholder='Task Name' autoComplete='off' value={taskValue}/>
            <select onChange={(event) => setProgress(event.target.value) } value = {progress}>
                <option value='false'>Pending</option>
                <option value='true'>Completed</option>
            </select>
            <button type='submit'>Add Task</button>
            <span onClick={handleReset} className='reset'>Reset</span>
        </form>
        <p>{taskValue}</p>
    </section>
  )
}
