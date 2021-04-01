import React, {useEffect, useState} from 'react';
import CompletedTasksMenu from './CompletedTasksMenu';
import moment from 'moment';
import {Message, Header} from 'semantic-ui-react';

import tasksIsEmpty from './lib/tasksIsEmpty';

const CompletedTasks = ({tasks, date, updateTasks}) => {

    const renderTasks = tasks.map((task) => {
        //Map tasks that where created for the selected date
        //and have a state of 0 (Done).
        if(task.state === 0 && date === moment(task.date).format('YYYY-MM-DD')) {
            return(
                <Message color="yellow" icon>
                    <CompletedTasksMenu 
                        taskId={task.idTask} 
                        updateTasks={updateTasks}
                    />
                
                    <Message.Content>
                        {task.content}
                    </Message.Content>               
                </Message>
            )
        }
    })
    
    if (tasksIsEmpty(tasks, 0, date))   return <div></div>
    return (
        <div>
            <Header as='h3' dividing>Completed</Header>
            {renderTasks}
        </div>
    )
}
export default CompletedTasks;