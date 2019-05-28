import axios from "../http";

let initState={
    list:[],
    loading:false,
    visible:false,
}

export function loadTeacher(){
    return function(dispatch){
        axios.get('/teacher/findAll')
        .then((data)=>{
            dispatch({
                type:"RELOAD_TEACHER"
            })
        })
    }
}

function teacherReducer(state={initState},action){
    switch(action.type){
        case "BEGIN_LOADING":
            state.loading=true;
            return state;
        case "GET_TEACHER":
            state.list=[...state.list,{name}]
        default:
            return state;
    }
}

export default teacherReducer;