import axios from 'axios';

const updateTaskState = ( taskId, updateFunction, newState) => {
        const params = new URLSearchParams();
        params.append('taskId',taskId);
        params.append('state', newState)

        axios.put('http://localhost:3001/1/tasks/state', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            console.log("Response: "+JSON.stringify(response))
            updateFunction();
        } )
        .catch(error => {
            console.log("Error: "+error)
        });
        
    
}

export default updateTaskState;