import React, { useState } from 'react';
import PendingTasksMenu from './PendingTasksMenu';
import moment from 'moment';
import { Message, Header} from 'semantic-ui-react';

import tasksIsEmpty from './lib/tasksIsEmpty';

const PendingTasks = ({tasks, date, updateTasks}) => {

    const renderTasks = tasks.map((task) => {
        //Map tasks that where created for the selected date
        //and have a state of 1 (To-Do).
        if(task.state === 1 && date === moment(task.date).format('YYYY-MM-DD')) {
            return(     
                                                    
                        <Message color="black" icon>
                            <PendingTasksMenu 
                                taskId={task.idTask} 
                                taskContent={task.content} 
                                updateTasks={updateTasks}
                            />

                            <Message.Content>
                                {task.content}
                            </Message.Content>
                        </Message>
            )
        }
    })
    

    if (tasksIsEmpty(tasks, 1, date)) {
        return (
        <Message info>
            <Message.Header>Looks empty...</Message.Header>
            <p>Add a new task and get to work!</p>
        </Message>
        )
    }
    return (
        <div>
            <Header as='h3' dividing>To-Do</Header>           
            {renderTasks}               
        </div>
    )
}
export default PendingTasks;