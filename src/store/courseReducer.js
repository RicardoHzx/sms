import axios from '../http'
import { message } from 'antd'

let initState={
    list:[],
    loading:false,
    visible:false,
}

export function showModal(){
    type:"SHOW_MODAL"
}

//同步
export function beginLoading(){
    return {
        type:"BEGIN_LOADING"
    }
}

//重载课程信息
//异步
export function reloadCourse(){
    return function(dispatch){
        dispatch(beginLoading())
        axios.get("/course/findAllWithTeacher")
        .then((result)=>{
            dispatch({type:"RELOAD_COURSE",payload:result.data})
        })
    }
}

export function deleteCourse(id){
    return function(dispatch){
        axios.get("/coures/deleteById",{
            params:{id}
        })
        .then((statusText)=>{
            message.success(statusText);
            //分发动作重新加载
            dispatch(reloadCourse())
        })
    }
}

function courseReducer(state=initState,action){
    switch(action.type){
        case "RELOAD_COURSE":
            return {
                ...state,
                list:action.payload,
                loading:false
            }
        case "BEGIN_LOADING":
        return {
            ...state,
            list:true
        }
        case "SHOW_MODAL":
        return {
            ...state,
            list:true
        }
        default:
            return state;
    }
}