import React from 'react'
import axios from '../http'
import qs from 'qs'

import {Button} from 'antd'

class Course extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    componentWillMount(){
        //承诺对象
       let promise= axios.get('http://127.0.0.1:7979/course/findAll');
       //承诺兑现成功
       promise.then((result)=>{
           
           this.setState({
               list:result.data
           });
       })
       promise.catch((error)=>{
           alert(JSON.stringify(error));
       })
       promise.finally(()=>{
        
       })
    }

    
    delHandler(){
        let url="/course/deleteById"
        axios.get(url,{
            //get方式的值,查询字符串类型
            params:{},
        })//返回一个承诺对象
        
        .then((result)=>{
            console.log("...",result);
        })//返回一个承诺对象
    
    }
    //POST类型,
    addHandler(){
        //post方式的值,JSON类型
        let data={
            name:'物理',
            description:"..."
        }
        let url="course/saveOrUpdate"
        //axios.post(url[,data[,config]])
        axios.post(
            url,
            qs.stringify(data)//数据,手动转化为查询字符串
        )
        .then((result)=>{
            console.log("success",result);
        })
        .catch((error)=>{
            console.log("error",error);
        })
    }

    render(){
        let {list}=this.state;
        return(
            <div className="course">
                <h2>课程管理</h2>
                {JSON.stringify(list)}
                <div>
                    <Button onClick={this.delHandler.bind(this)}>删除</Button>
                    <Button onClick={this.addHandler.bind(this)}>添加</Button>
                </div>
            </div>
        )
    }

}
export default Course;