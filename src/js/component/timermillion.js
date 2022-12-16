import React, { useState } from 'react';
import { useEffect } from 'react';

const TimerFunctionMillion = () => {
      const [counter, setCounter] = useState(0);
  
      useEffect(() => {
          const interval = setInterval(() => {
              setCounter(prevCounter => {
                  if (prevCounter === 9) {
                      return 0;
                  }
                  return prevCounter + 1;
              });
          }, 10000000);
  
          return () => clearInterval(interval);
      }, []);
  
      return (
          <div>
              {counter}
          </div>
      );
  }

export default TimerFunctionMillion;




