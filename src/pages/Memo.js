import React from 'react'
import {List,Form,Input} from 'antd'
import {connect} from 'react-redux'

import { delMemo, saveMemo } from '../store/memoReducer'

class Memo extends React.Component{

    constructor(props){
        super(props);
        
    }

    delHandler(payload){
        this.props.dispatch(delMemo(payload))
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
              this.props.dispatch(saveMemo(values.content))
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
                    dataSource={this.props.list}
                    renderItem={item => 
                        (<List.Item actions={[<a>edit</a>,<a onClick={this.delHandler.bind(this)}>删除</a>]}>
                            {item}
                        </List.Item>)
                    }/>
                />
            </div>
            
        )
    }
}

let mapStateToPrpos=(item)=>{
    return item;
}


export default connect(mapStateToPrpos)( Form.create(Memo));