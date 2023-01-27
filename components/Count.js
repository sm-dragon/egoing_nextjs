import React, {useState} from 'react';

export function Count({down}) {
  let downUI = null;

  // let countState = useState(10);
  // let count = countState[0];
  // let setCount = countState[1];
  // 아래와 같은 코드
  const [count, setCount] = useState(10);
  const [step, setStep] = useState(1);

function upHandler(){
  setCount(oldCount=>oldCount+step)
}

function downHandler(){
  setCount(oldCount=>oldCount-step)
}

  return <div>
    {count}
    <input type="number" value={step} onChange={evt=>setStep(Number(evt.target.value))}></input>
    <input type="button" value="+" onClick={upHandler}></input>
    <input type="button" value="-" onClick={downHandler}></input> 
  </div>;
}
