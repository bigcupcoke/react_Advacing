//  App.js 是整个程序的入口
import React, { Component } from 'react';


import Message from './message'
import Timer from './timer'
import Todo from './todo'
import MarkDownEditor from './markdown'

// App组件
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showTimer: true,
        }
    }
    //  指明组件的内容，全是jsx,看着很像html 但不是
    // <Message name="a" />相当于函数的调用，name是参数
    // 定义timer

    render() {
        var timer = this.state.showTimer ? <Timer /> : null
        return (
            // 类似html, 开头大写的是组件
            <div className="App">
                <MarkDownEditor />
                <Message name="hello largeCoke" content="try your best" />
                <Message name="react" content="hard to understand" />
                <button onClick={this.toggleTimer}>开关 timer</button>
                {timer}
                <Todo />
            </div>
        )
    }

    toggleTimer = (e) => {
        var show = !this.state.showTimer
        //  必须用setState来改变this.state
        console.log(this)
        this.setState({
            showTimer: show
        })
    }
}

export default App
