import Counter from '../components/Counter'
import { connect } from 'react-redux'
import { addA, addB } from '../actions/counterAction'
//everything as    * as actionCreators from '../actions'

const mapStateToProps = state => ({
  countA: state.countA,
  countB: state.countB
})


const mapDispatchToProps = dispatch => ({
  addA: (count) => dispatch(addA(count)),
  addB: (count) => dispatch(addB(count)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)