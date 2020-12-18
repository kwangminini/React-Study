import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

function App() {
  function onClick(){
    import('./data.json').then(({default:data})=>{
      console.log(data);
    });
  }
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
