import React from 'react';
import $ from 'jquery';
import { Button,Table,message} from 'antd';
import axios from '../http'

class Teacher extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    componentWilMount(){
       axios.get('/teacher/findAll')
       .then((result)=>{
           this.setState({
               list:result.data
           })
       })
        // this.loadTeacher();
    }
    //加载教师信息
    loadTeacher(){
        let url="http://127.0.0.1:7979/teacher/findAll"
        $.get(url,{type:'教师'},({status,message,data})=>{
            if(status===200){
                this.setState({list:data})
            }else{
                message.error(message);
            }
        });
    } 
    deleteHandler(){
        axios.get('/teacher/deleteById',{
            params:{id}
        })
        .then((result)=>{
            if(result){
                message.success(result.statusText)
            }
        })
    }

    render(){
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            }),
          };

          const columns = [
            {title: '姓名',dataIndex: 'realname', },
            {title: '用户名',dataIndex: 'username', },
            {title: '性别',dataIndex: 'gender',},
            {
                title:'操作',
                render:(text,record)=>{
                    return(
                        <div>
                            <Button type="link" onClick={this.deleteHandler.bind(this,record.id)}>删除</Button>
                        </div>
                    )
                }
            }
          ];

        return(
            <div className="teacher">
                <h2>老师管理</h2>
                <div className="butns">
                    <Button>添加</Button>
                    <Button>修改</Button>
                    <Button>删除</Button>
                    <Button>批量删除</Button>
                    <Button>详细信息</Button>
                    <Button>导出</Button>
                </div>
                {/* 表格 */}
                <Table 
                rowKey="id"
                size="small"
                rowSelection={rowSelection} 
                columns={columns} 
                dataSource={this.state.list}
                 />
            </div>
        )
    }

}
export default Teacher;