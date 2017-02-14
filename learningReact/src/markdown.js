import React from 'react'
import logo from './logo.svg';
import './App.css';

import Remarkable from 'remarkable'
import './markdown.css'

class MarkDownEditor extends React.Component {
    constructor(props) {
        super(props)
        var mdString = '输入 *markdown 语法* 显示效果'
        this.state = {
            value: mdString,
        }
    }

    handleChange = (e) => {
        this.setState({
            value: this.refs.input.value,
        })
    }

    getMarkedup = (e) => {
        var md = new Remarkable()
        return {
            __html: md.render(this.state.value)
        }
    }

    render() {
        return (
            <div className = "MarkDownEditor">
                <h2>markdown 编辑器<img src={logo} className="App-logo" alt="logo" /></h2>
                <div>
                    <textarea onChange={this.handleChange} ref="input"
                    defaultValue={this.state.value}/>
                    <div className="content"
                    dangerouslySetInnerHTML={this.getMarkedup()}>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = MarkDownEditor
