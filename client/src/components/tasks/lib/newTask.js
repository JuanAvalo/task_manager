import axios from 'axios';

const newTask = (task, date, updateFunction) => {
    if(task.length == 0) console.log("Add something to the task.")

    else {
        var params = new URLSearchParams();
        params.append('date', date);
        params.append('content', task);

        axios.post('http://localhost:3001/1/addTask', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            console.log("Response: "+JSON.stringify(response))
            updateFunction(); //Re-Render the tasks component to update the list.
        } )
        .catch(error => {
            console.log("Error: "+error)
        });
        
    }
}
export default newTask;