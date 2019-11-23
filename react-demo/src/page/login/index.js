import React from 'react';
import {Input, Button, List} from 'antd';
import {connect} from 'react-redux';

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    handleBtnClick    = () => {

    };

    render() {
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
        inputValue: state.inputValue,
        list      : state.list
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e){
            const action = {
                type : 'change_input_value',
                value: e.target.value
            };
            dispatch(action)
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
