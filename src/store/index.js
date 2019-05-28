import {combineReducers,createStore, applyMiddleware,} from 'redux'
import thunk from 'redux-thunk'

import studentReducer from './studentReducer'
import teacherReducer from './teacherReducer'
import memoReducer from './memoReducer'
import courseReducer from './courseReducer'



//合并reducers
let rootReducer=combineReducers({
    studentModal: studentReducer,
    teacherModal:teacherReducer,
    courseModal:courseReducer,
    memoReducer:memoReducer
})

//创建仓库暴露给外部
export default createStore(rootReducer,applyMiddleware(thunk))