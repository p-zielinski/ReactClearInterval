import './App.css';
import {useEffect, useState} from "react";
import Counter from "./Counter";

function App() {
  const [hide, setHide] = useState(false);
  const [idInterval, setIdInterval] = useState(null)

  useEffect(() => {
    window.clearInterval(idInterval)
  },[hide])

  return (
    <div className="App">
      <h1 onClick={()=> setHide(!hide)}>{hide?"Hide":"Show"}</h1>
      {hide&& <Counter setIdInterval={setIdInterval} />}
    </div>
  );
}

export default App;
