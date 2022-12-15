import React, { useState } from 'react';
import { useEffect } from 'react';

const TimerFunctionTen = () => {
  // Declare the counter state variable and set its initial value to 0
  const [counter, setCounter] = useState(0);

  // Define the setup() function
  function setup() {
    // Set an interval that will increment the counter state variable by 1 on each iteration
    setInterval(() => {
        if (counter === 9) {
          setCounter(0);
        } else {
          setCounter(prevCounter => prevCounter + 1);
        }
      }, 10000);
    }

  // Use the useEffect() hook to call the setup() function when the component mounts
  useEffect(() => {
    setup();
  }, []);

  // Return the counter state variable wrapped in a div element
  return (
    <div>
      {counter}
    </div>
  );
};

export default TimerFunctionTen;

