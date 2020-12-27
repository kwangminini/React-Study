import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">Button</Button>
        <Button >Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">Button</Button>
        <Button color="gray" >Button</Button>
        <Button color="gray" size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">Button</Button>
        <Button color="pink" >Button</Button>
        <Button color="pink" size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button fullWidth outline size="large"
        onClick={()=>{console.log('클릭');}}
        onMouseMove={()=>{console.log('마우스무브');}}>Button</Button>
        <Button fullWidth outline >Button</Button>
        <Button fullWidth outline size="small">Button</Button>
      </div>
    </div>
  );
}

export default App;
