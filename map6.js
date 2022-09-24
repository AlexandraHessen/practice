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
  
for (let i = 0, max = tasks.length; i < max; i += 1) {
    task_names.push(tasks[i].name);
}
 
console.log(task_names) // [ 'Write for Envato Tuts+', 'Work out', 'Procrastinate on Duolingo' ]
