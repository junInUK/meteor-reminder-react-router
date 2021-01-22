import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '../api/tasks';

export const Tasks = () => {
  const tasks = useTracker(() => {
    return TasksCollection.find().fetch();
  });

  return (
    <div>
      <h2>Your Reminder List!</h2>
      <ul>{tasks.map(
          task => <li key={task._id}>
            {task.title}<span>{task.date}</span>
          </li>
        )}
      </ul>
    </div>
  );
};
