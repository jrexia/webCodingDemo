import React from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group'

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            show   : true
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.content !== this.state.content)
            console.log(this.props, '//-00')
    }

    componentDidCatch() {
        this.setState({
            isError: true
        })
    };

    handleClick = () => {
        console.log(this.refs.btnEle, 'btnEle')
        this.setState({
            show: !this.state.show
        });
        this.props.addUser('9999999999')
    };

    render() {
        console.log('render2')
        if (this.state.isError) {
            return (
                <div>demo:catch error</div>
            )
        }
        return (
            <div>
                <button onClick={this.handleClick} ref='btnEle'>子组件点击</button>
                <CSSTransition
                    in={this.state.show} // 入场显示
                    timeout={1000} // 动画时间
                    classNames='fade' // 组件class前缀名
                    unmountOnExit // 动画完成后移除元素
                    appear={true} // 组件第一次渲染显示动画
                    onEnter={(el) => { // 当组件enter动画结束之后自动调用
                        el.style.color = 'red'
                    }}>
                    <div>CSSTransition动画效果</div>
                </CSSTransition>
                {/*{this.props.children}*/}
            </div>
        )
    }
}

export default Demo;