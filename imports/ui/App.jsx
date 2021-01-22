import React from 'react';
import { Tasks } from './Tasks.jsx';
import { CalendarFull } from './CalendarFull.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Reminder!</h1>
    <Tasks/>
    <CalendarFull />
  </div>
);
