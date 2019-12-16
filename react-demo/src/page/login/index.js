import React from 'react';
import {Input, Button, List} from 'antd';
import {connect} from 'react-redux';
import {actionCreators as loginActionCreators}  from './store'; // 常量

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    handleBtnClick    = () => {

    };

    render() {
        let a = {a: 10};
        let b = {b: 10};
        let c=function () {
            
        };
        let obj = {
            a: 10
        };
        obj[b] = 20;
        obj[c]=30;
        console.log(obj[a]); // 20

        // 通过this.props获取store里的数据
        let {inputValue, list} = this.props;
        console.log('render1');
        return (
            <div>
                <div>
                    <Input placeholder='请输入'
                           value={inputValue}
                           onChange={this.props.handleInputChange}/>
                    <Button type='primary' onClick={this.handleBtnClick}>登录</Button>
                </div>
                <List bordered dataSource={list}
                      renderItem={item => (
                          <List.Item>{item}</List.Item>
                      )}/>
            </div>
        )
    }
}

// 把store的数据映射给组件,变成传给组件的props
const mapStateToProps = (state) => {
    return {
        inputValue: state.getIn(['login','inputValue']),
        list      : state.getIn(['login','list'])
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e){
            dispatch(loginActionCreators.setInputValue(e.target.value))
        }
    }
};
// connect:连接store到组件中
export default connect(mapStateToProps, mapDispatchToProps)(Login);
