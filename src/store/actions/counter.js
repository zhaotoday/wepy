import { ASYNC_INCREASE } from '../types/counter'
import { createAction } from 'redux-actions'

export const asyncIncrease = createAction(ASYNC_INCREASE, () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})
