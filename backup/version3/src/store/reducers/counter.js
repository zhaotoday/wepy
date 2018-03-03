import { handleActions } from 'redux-actions'
import { INCREASE, DECREASE, ASYNC_INCREASE } from '../types/counter'

export default handleActions({
  [INCREASE] (state) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREASE] (state) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREASE] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  }
}, {
  num: 0,
  asyncNum: 0
})
