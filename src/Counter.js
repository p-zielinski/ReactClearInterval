import {useEffect, useState} from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [idInterval, setIdInterval] = useState(0)


  useEffect( async ()=> {
    setIdInterval(setInterval(function() {
      setCounter((counter) => counter + 1);
    }, 1000))

    return () => {
      window.clearInterval(idInterval)
    }

  },[])
  return (
    <div>
      {counter}
    </div>
  );
};

export default Counter;