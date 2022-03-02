import './App.css';
import {useEffect, useState} from "react";
import Counter from "./Counter";

function App() {
  const [hide, setHide] = useState(false);

  return (
    <div className="App">
      <h1 onClick={()=> setHide(!hide)}>{hide?"Hide":"Show"}</h1>
      {hide&& <Counter />}
    </div>
  );
}

export default App;
