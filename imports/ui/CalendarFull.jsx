import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '../api/tasks';

      
const CalendarFull = () => {

    let eventGuid = 0;

    const tasks = useTracker(() => {
        return TasksCollection.find().fetch();
    });

    function createEventId() {
        return String(eventGuid++)
    }

    handleDateClick = (selectInfo) => {
        
        console.log("Date clicked!"+selectInfo.dateStr);
        let title = prompt('Please enter a new title for your event');
        console.log('title:'+title+ ' date:'+selectInfo.dateStr);
           
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                date: selectInfo.dateStr
            })

            TasksCollection.insert({
            "title": title,
            "description": null,
            "date": selectInfo.dateStr,
            createdAt: new Date()});
        }

     
    }
    
    return (
        <div>
            <FullCalendar
                plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin ]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                events = { tasks }
                dateClick={handleDateClick}
            />

        </div>
    
    )
};

export default CalendarFull;
