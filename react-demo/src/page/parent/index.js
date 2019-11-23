import React, {Fragment} from 'react'; // Fragment:占位元素
import Demo from '../../components/demo'

const Name = (user) => <div>name:{user}</div>; // 无状态组件

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user : '名字哈哈',
            count: 0
        };
    }
    shouldComponentUpdate(){
        return false
    }
    clickEvent(e, a) {
        // e.preventDefa ult();
        this.setState((preState, props) => ({
            count: preState.count + 1
        }));
        this.setState((preState, props) => ({
            count: preState.count + 1
        }));
    };
    appHandleClick=()=>{
        console.log('子组件点击')
    }

    render() {
        console.log('render1')
        return (
            <Fragment>
                <button onClick={e => this.clickEvent(e, 1)}>父组件点击</button>
                <Demo content={this.state.count} addUser={this.appHandleClick}>
                    {/*<h1>{this.state.count}</h1>*/}
                    {/*<div>hhhhh</div>*/}
                    {/*<Name user='1'/>*/}
                    {/*{Name()}*/}
                </Demo>
            </Fragment>
        )
    }
}

export default Parent;
