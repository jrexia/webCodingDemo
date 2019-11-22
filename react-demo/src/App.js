import React, {Fragment} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';
import store from './store';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state=store.getState();
    }
    render() {
        console.log('render1')
        return (
            <Fragment>
              <div>
                  <Input placeholder='请输入'/>
                  <Button type='primary'>提交</Button>
              </div>
                <List bordered dataSource={this.state.list}
                renderItem={item=>(
                    <List.Item>{item}</List.Item>
                )}/>
            </Fragment>
        )
    }
}

export default App;
