import { combineReducers } from 'redux'
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { 
  FETCH_DATA,
  FETCH_PRODUCT_DETAIL,
} from '../actions/index'



export const data = (state = {
  items: '',
}, action) => {
  switch (action.type){
    case `${FETCH_DATA}`: 
      return {
        ...state,
        items: 'This is data from redux'
      }

    default: 
      return state
  }
}


export const product_detail = (state={
  data: []
}, action) => {
  switch(action.type){
    case `${FETCH_PRODUCT_DETAIL}_PENDING`:
      return {
        ...state
      }

    case `${FETCH_PRODUCT_DETAIL}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      }

    case `${FETCH_PRODUCT_DETAIL}_REJECTED`:
      return {
        ...state
      }

    default:
      return state
  }
}


const rootReducer = combineReducers({
  data,
  product_detail
})

export default rootReducer
