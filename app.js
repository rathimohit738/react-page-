import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import Second from './Components/Second';
import Final from './Components/Final';

function App() {
  const mystyle = {
    color: "white",
    backgroundColor: "LightGray",
    padding: "35px",
    fontFamily: "Arial"
  };
   
  return (
    <div style={mystyle}> 
    <div className="App">

      <First/>
      <Second/>
      <Final/>


     
          
      </div>
    </div>
  );
}

export default App;
