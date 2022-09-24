// Durations are in minutes 
const tasks = [
    {
      'name'     : 'Write for Envato Tuts+',
      'duration' : 120
    },
    {
      'name'     : 'Work out',
      'duration' : 60
    },
    {
      'name'     : 'Procrastinate on Duolingo',
      'duration' : 240
    }
  ];

  const task_names = [];
  
  tasks.forEach(function (task) {
      task_names.push(task.name);    
  });
   
  console.log(task_names) // [ 'Write for Envato Tuts+', 'Work out', 'Procrastinate on Duolingo' ]
  
