import {combineReducers} from 'redux'
import questions from './questions'
import answer from './answer'

const todoApp = combineReducers({
  questions,
  answer
})

export default todoApp
