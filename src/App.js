import './App.css';
import Model from './components/Model';
import {useState} from "react"

function App() {
    const [openPop, setopenPop] = useState (false)

//srikanth 
  return (
    <div className="App">
      <h1>Click Here for pop-up</h1>
      <button className='openPopUp' onClick={() => {setopenPop(true)}}>Open</button>
      {openPop && <Model props={setopenPop} />}
    </div>
  );
}

export default App;
