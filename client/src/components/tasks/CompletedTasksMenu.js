import React from 'react';
import deleteTask from './lib/deleteTask';
import updateTaskState from './lib/updateTaskState';

import {Button} from 'semantic-ui-react';


const CompletedTasksMenu = ({taskId, updateTasks}) => {

    const handleDelete = () => {

        deleteTask(taskId, updateTasks)
    }
    const handleRestore = () => {
        updateTaskState(taskId, updateTasks, 1)
    }

    return (
        <div>
            <Button color="red" icon="trash" size="medium" onClick={()=> handleDelete()}></Button>
            <Button color="olive" icon="redo" size="medium" onClick={()=>handleRestore()}></Button>
        </div>
    )
}

export default CompletedTasksMenu;