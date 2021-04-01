import React, {useState} from 'react';
import ReactCalendar from 'react-calendar';
import './Calendar.css'
import moment from 'moment';

const Calendar = ({date, handleDateChange}) => {
    const [value, onChange] = useState(new Date());

    return  (
            <div>
                <ReactCalendar                     
                    onChange={onChange} 
                    value={value} 
                    onClickDay={()=>handleDateChange(moment(value).format('YYYY-MM-DD'))}
                />
            </div>
            )
}

export default Calendar;