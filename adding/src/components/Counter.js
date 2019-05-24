// import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addA, addB } from '../actions/counterAction'

// const handleClick = (props) => {
//   props.handleClick()
// }
import React from 'react'

function Counter(props) {
  console.log("inside counter props:" + props)
  return (
    <div>
    <div className="counterA">A: {props.countA}</div>
    <button className="btnA" onClick={props.addA}>ADD</button>
    <div className="counterB">B: {props.countB}</div>
  </div>
  )
}


const mapStateToProps = state => ({
  countA: state.countA,
  countB: state.countB,
})

const mapDispatchToProps = (dispatch) => ({
  addA: () => dispatch(addA()),
  addB: () => dispatch(addB()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)