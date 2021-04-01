import axios from 'axios';

const deleteTask = ( taskId, updateFunction) => {
    
        axios.delete('http://localhost:3001/1/tasks', {params: {'taskId':taskId}})
        .then(response => {
            console.log("Response: "+JSON.stringify(response))
            updateFunction();
        } )
        .catch(error => {
            console.log("Error: "+error)
        });
        
    
}

export default deleteTask;