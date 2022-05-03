import React, { useState, useEffect } from 'react';
import AllTasks from '../AllTasks';
import AddTaskFormCSS from './AddTaskForm.css'

const TaskForm = (props) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [tasks, setTasks] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [currentTask, setCurrentTask] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();

        setTasks((prev) => {
            return [...prev, {
                name: name,
                description: description,
                id: Math.floor(Math.random() * 10000)
            }]
        })

        setName('');
        setDescription('');

    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleDelete = (id) => {
        const filteredTasks = tasks.filter(task => {
            return task.id !== id
        })
        setTasks(filteredTasks)
    }

    const handleEditInputChangeForName = (event) => {
        setCurrentTask({
            ...currentTask,
            name: event.target.value
        })
    }

    const handleEditInputChangeForDescription = (event) => {
        setCurrentTask({
            ...currentTask,
            description: event.target.value
        })
    }

    const handleUpdateTask = (id, updatedTask) => {
        const updatedItem = tasks.map((task) => {
            return task.id === id ? updatedTask : task
        })
        setIsEditing(false);
        setTasks(updatedItem)
    }

    const handleEditClick = (task) => {
        setIsEditing(true)

        setCurrentTask({ ...task })
        console.log(task)
    }

    const handleUpdateSubmit = (event) => {
        event.preventDefault()

        handleUpdateTask(currentTask.id, currentTask)
    }


    return <>

        {isEditing ? <div>

            <form onSubmit={handleUpdateSubmit}>
                <label>Edit Name</label>
                <input type='text'
                    value={currentTask.name}
                    onChange={handleEditInputChangeForName}></input>
                <label>Edit Description</label>
                <input type='text'
                    value={currentTask.description}
                    onChange={handleEditInputChangeForDescription}></input>
                <button >Update Task</button>
            </form>

        </div> :

            <div className='container'>

                <div className='taskForm'>
                    <form onSubmit={handleSubmit}>
                        <div className='taskLabel'>
                            <label>Add Name</label>
                            <input type="text" value={name} onChange={handleNameChange}></input>
                        </div>
                        <div className='taskLabel'>
                            <label>Add Description</label>
                            <input type="text" value={description} onChange={handleDescriptionChange}></input>
                        </div>
                        <div className='buttonLabel'>
                            <button type='submit'>Add Task</button>
                        </div>
                        
                    </form>
                </div>
                <AllTasks tasks={tasks} setTasks={setTasks} handleDelete={handleDelete} handleEditClick={handleEditClick} />
            </div>



        }
    </>

}

export default TaskForm;