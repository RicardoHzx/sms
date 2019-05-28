import _ from 'lodash'
import Item from 'antd/lib/list/Item';

let initState={
    list:[],
    loading:false
}

export function delMemo(payload){
    return {
        type:'DEL_MEMO',
            payload
    }
}

export function saveMemo(payload){
    return {
        type:'SAVE_MEMO',
        payload
    }
}

function memoReducer(state=initState,action){
    switch(action.type){
        case "DEL_MEMO":
            _.remove(state.list,Item=>item===action.payload)
            return {
                ...state,
                list:this.state.list
            } 
        case "SAVE_MEMO":
            return {
                ...state,
                list:[...state,this.state.list]
            } 
        default:
            return state;

    }
}

export default memoReducer;