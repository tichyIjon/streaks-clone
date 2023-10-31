import logo from './logo.svg';
import './App.css';
import NewHabit from './components/NewHabit';
import HabitCreator from './components/HabitCreator';
import Habit from './components/Habit';
import data from './components/data';

let version = 0.1;

function App() {
  let habits = data.map(habit=>{
    return (
      <Habit 
        title = {habit.title}
        emote = {habit.emote}
      />
    )
  })

  return (
    <div className="App">
      <div className='container'>
        <div className='visable'>
          {habits}
          <NewHabit />
        </div>
        <div className='invisable'>
          <HabitCreator />
        </div>
        </div>
    <footer>2023 nyaa development |<span className='bold'> streaks-clone ver.{version} </span></footer>
    </div>
  );
}


function habitCreatorShow() {
  let visable = document.querySelector('.visable')
  visable.style.display = "none"
};


export default App;
