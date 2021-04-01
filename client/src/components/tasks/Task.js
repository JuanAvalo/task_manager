import React, {useState, useEffect} from 'react';
import axios from 'axios';

import LoadingComponent from '../handlers/LoadingComponent';
import ErrorComponent from '../handlers/ErrorComponent';
import PendingTasks from './PendingTasks';
import CompletedTasks from './CompletedTasks';
import AddTask from './AddTask';

const Task = ({date}) => {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState (false);
    const [error, setError] = useState (false);
    const [taskWasAdded, setTaskWasAdded] = useState(false);


    //GET tasks from DB.
    useEffect(() => {
        const getTasks = async () => {
            try{
                setError(false)
                setLoading(true);
                const result = await axios ('http://localhost:3001/1/tasks');
                setTasks(result.data);
            }
            catch(error) {
                setError(true);
                setLoading(false);
            }
            finally {
                setLoading(false);
            }
        };

        getTasks();
        
        
    }, [taskWasAdded]);

    const updateTasks = () => {
        setTaskWasAdded(!taskWasAdded);
    }
            
    if (error) return <ErrorComponent />
    if (loading) return <LoadingComponent />

    return (
        <div>
            <AddTask date={date} updateTasks={updateTasks}/>
            <br></br>
            <PendingTasks tasks={tasks} date={date} updateTasks={updateTasks}/>
            <br></br>
            <CompletedTasks tasks={tasks} date={date} updateTasks={updateTasks}/>
        </div>
    )
}
export default Task;