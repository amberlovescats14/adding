import React from 'react'
import { connect } from 'react-redux'
import { handleClick } from '../actions/counterAction'

export const Counter = (props) => (
  <div>
    <div className="counterA">A: {props.countA}</div>
    <button className="btnA" onClick={props.handleClick}>ADD</button>
    <div className="counterB">B: {props.countB}</div>

  </div>
)

const mapStateToProps = state => ({
  countA: state.countA,
  countB: state.countB,
})

export default connect(mapStateToProps,{handleClick})(Counter)