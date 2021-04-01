import React, { useEffect, useState } from 'react';
import deleteTask from './lib/deleteTask';
import updateTaskState from './lib/updateTaskState';
import {Button, Grid, GridColumn, Icon} from 'semantic-ui-react';

import EditTaskModal from './EditTaskModal';

const PendingTasksMenu = ({taskId, updateTasks, taskContent}) => {

    const [modalIsVisible, setModalIsVisible] = useState(false);
    
    const handleDelete = () => {
        deleteTask(taskId, updateTasks);
    }

    const handleComplete = () => {
        updateTaskState(taskId, updateTasks, 0)
    }

    const hideModal = () => {
        setModalIsVisible(false);
    }

    return (
        <div>
            <EditTaskModal 
                    showModal = {modalIsVisible} 
                    hideModal = {hideModal} 
                    taskContent = {taskContent}
                    taskId = {taskId}
                    updateTasks = {updateTasks}
                    />
            
            <Button color="green" icon="check" size="medium" onClick={()=>handleComplete()} ></Button>

            <Button color="red" icon="trash" size="medium" onClick={()=>handleDelete()} ></Button>

            <Button color="blue" icon="pencil" size="medium" onClick={()=>setModalIsVisible(true)} ></Button>

        </div>
    )
}

export default PendingTasksMenu;