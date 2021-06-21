
const taksToDo = ['Estudar', 'Assistir as aulas', 'Meditar', 'Treinar'];


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    taksToDo.map((task) => Task(task))
  );
}

export default App;
