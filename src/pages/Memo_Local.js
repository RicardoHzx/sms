import React from 'react'
import {List,Form,Input} from 'antd'
import _ from 'lodash'

class Memo extends React.Component{


    constructor(props){
        super(props);
        this.state={
            list:["今天要上课","中午吃火锅","晚上吃鸡"]
        }
    }

    delHandler(text){
        _.remove(this.state.list,function(item){
            return item===text;
        })
        this.setState({
            list:list.state
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
              //alert('Received values of form: ',+JSON.stringify(values));
              this.setState({
                  list:[]
              })
            }
        });
    }

    render(){
        let getFieldDecorator=this.props.form;
        return (
            <div className="memo">
                <h2>备忘录</h2>
                <Form layout="inline" onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Item>
                    {getFieldDecorator('content', {
                        rules: [{ required: true, message: 'Please input your content!' }],
                    })(
                        <Input
                        placeholder="Content"
                        />,
                    )}
                    </Form.Item>
                   
                    <Form.Item>
                    <Button type="primary" htmlType="submit" >
                        保存
                    </Button>
                    </Form.Item>
                </Form>
                <List
                    size="small"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => 
                        (<List.Item actions={[<a>edit</a>,<a onClick={this.delHandler.bind(this)}>删除</a>]}>
                            {item}
                        </List.Item>)}/>
                />
            </div>
            
        )
    }
}

export default Form.create(Memo);