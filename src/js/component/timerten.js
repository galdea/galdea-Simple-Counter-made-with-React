import React, { useState } from 'react';
import { useEffect } from 'react';

const TimerFunctionMin = () => {
      const [counter, setCounter] = useState(0);
  
      useEffect(() => {
          const interval = setInterval(() => {
              setCounter(prevCounter => {
                  if (prevCounter === 9) {
                      return 0;
                  }
                  return prevCounter + 1;
              });
          }, 10000);
  
          return () => clearInterval(interval);
      }, []);
  
      return (
          <div>
              {counter}
          </div>
      );
  }

export default TimerFunctionMin;


