import React, { useState } from 'react';
import { useEffect } from 'react';

const TimerFunctionHundred = () => {
      const [counter, setCounter] = useState(0);
  
      useEffect(() => {
          const interval = setInterval(() => {
              setCounter(prevCounter => {
                  if (prevCounter === 9) {
                      return 0;
                  }
                  return prevCounter + 1;
              });
          }, 100000);
  
          return () => clearInterval(interval);
      }, []);
  
      return (
          <div>
              {counter}
          </div>
      );
  }

export default TimerFunctionHundred;


