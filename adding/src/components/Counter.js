import React from 'react'

const Counter = (props) => {
  console.log("inside counter props:" + props.countA)
  return (
    <div >
      <div className="counterA" >A: {props.countA}</div>
      <button className="btnA" onClick={() => props.addA(props.countB)}>ADD</button>
      <div className="counterB">B: {props.countB}</div>
      <button className="btnB" onClick={() => props.addB(props.countA)}>ADD B</button>
    </div>
  )
}


export default Counter

