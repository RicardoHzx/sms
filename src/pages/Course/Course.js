import React from 'react'
import {connect} from 'react-redux'
import {Form, Button} from 'antd'
import {reloadCourse,deleteCourse} from '../store/courseReducer'

import axios from '../http'

class Course extends React.Component{
    constructor(props){
        super(props);
      
       
    }

    componentWillMount(){
        this.props.dispatch(reloadCourse())
    }

    
    delHandler(id){
        this.props.dispatch(deleteCourse(id))
    }

    
    addHandler(){
        
    }

    toAddHandler(){

    }

    render(){
        let colunms=[{
            title:'名称',
            dataIndex:'name'
        },{
            title:'介绍',
            dataIndex:'description'
        },{
            title:'学分',
            dataIndex:'credit'
        },{
            title:'任课老师',
            dataIndex:'teacherId'
        },{
            title:'操作',
            render=(text,record)=>{
                return (
                    <div>
                        <a>edit</a>
                        <a onClick={this.delHandler.bind(this)}>del</a>
                    </div>
                )
            }
        },]
        return(
            <div className="course">
                <h2>课程管理</h2>
                <div className="btns">
                    <Button onClick={this.toAddHandler.bind(this)}>添加</Button>
                   
                </div>
                <Table rowKey="id" size="small" colunms={colunms} dataSource={this.props.courseState.list}/>

                <Modal
                    title="Basic Modal"
                    visible={this.props.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }

}

let mapStateToPrpos=(state)=>{
    return state;
}

export default connect(mapStateToPrpos)( Form.create(Course));