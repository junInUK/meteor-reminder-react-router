import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '../api/tasks';

import TaskItem from './TaskItem';

const Tasks = () => {
  const tasks = useTracker(() => {
    return TasksCollection.find().fetch();
  });

  const tasksArray = tasks.map(task => {
    return (
      <TaskItem key={task._id}>{task.title}</TaskItem>
    )
  });

 
  return (
    <div>
      <h2>Your Reminder List!</h2>
      <ListGroup variant="flush">
        {
          tasksArray
          // tasks.map(
          //   task => 
          //   <ListGroup.Item key={task._id} action onClick={showReminder}>
          //     {task.title}
          //   </ListGroup.Item>
          // )
        }
      </ListGroup>
      {/* <ul>{tasks.map(
          task => <li key={task._id}>
            {task.title}<span>{task.date}</span>
          </li>
        )}
      </ul> */}
    </div>
  );
};

export default Tasks;
