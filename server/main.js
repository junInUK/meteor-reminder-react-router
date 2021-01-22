import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/tasks';

function insertTask({ title, description, date }) {
  TasksCollection.insert({title, description, date, createdAt: new Date()});
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (TasksCollection.find().count() === 0) {
    insertTask({
      title: 'MOT test',
      description: 'My old need to do the MOT test',
      date: '2020-12-20'
    });

    insertTask({
      title: 'visit Dentist',
      description: 'My sharking tooth need fixed!',
      date: '2020-12-28'
    });

    insertTask({
      title: 'clean bathroom',
      description: 'clean my bathroom before new year',
      date: '2020-12-29'
    });

    insertTask({
      title: 'gossery shopping',
      description: 'milk, bacaon, egg and tea',
      date: '2020-12-30'
    });
  }
});
