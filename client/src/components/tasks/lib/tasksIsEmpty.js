/*
    We check if there is any task to be rendered
    to decide what element to show.
*/
import moment from 'moment'

const tasksIsEmpty =(tasks, state, date) => {
   
        const checkDateAndState = (task) => moment(task.date).format('YYYY-MM-DD') == date && task.state == state;
        return (!tasks.some(checkDateAndState))
    }

export default tasksIsEmpty;