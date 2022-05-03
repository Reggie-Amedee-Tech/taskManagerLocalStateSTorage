import React from 'react';

const AllTasks = (props) => {
    const {tasks, handleDelete, handleEditClick} = props;

    

    return <div>
        {tasks.map(item => {
            return <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <button onClick={() => handleDelete(item.id)}>Delete Task</button>
                <button onClick={() => handleEditClick(item)}>Edit Task</button>
            </div>

        })}
    </div>
}

export default AllTasks;