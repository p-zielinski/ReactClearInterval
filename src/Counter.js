import {useEffect, useState} from "react";

const Counter = ({setIdInterval}) => {
  const [counter, setCounter] = useState(0)

  useEffect( async ()=> {
    setIdInterval(setInterval(function() {
      setCounter((counter) => counter + 1);
    }, 1000))
  },[])
  return (
    <div>
      {counter}
    </div>
  );
};

export default Counter;