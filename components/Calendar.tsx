import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarModule = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div style={{display: 'flex'}}>
            <Calendar onChange={onChange} value={value} />
            {value && <div>17:00</div>}
        </div>
    )
}

export default CalendarModule;
