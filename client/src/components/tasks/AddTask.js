import React from 'react';
import newTask from './lib/newTask';

import {Input, Button, Grid, GridColumn} from 'semantic-ui-react';

const AddTask = ({date, updateTasks}) => {

    //POST a new task
    const handleAddTask = (task) => {
        newTask(task, date, updateTasks)
    }

    return (
        <Grid.Row columns={2}>
            
            <Input 
                fluid 
                type="text" 
                placeholder="Add new task..."
                id="task" 
                name="task" 
                icon={
                        <Button 
                            color="teal" 
                            icon="add"
                            onClick={()=>handleAddTask(document.getElementById("task").value)} >
                        </Button>
                    }
            />

            
        </Grid.Row>
    )
}
export default AddTask;