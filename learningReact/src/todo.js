import React from 'react'
import './todo.css'

class Todo extends React.Component{

    constructor(props) {
        super(props)
        // state是一个规定的特殊变量， 用来保存程序运行期间的变量
        this.state = {
            todoList: [],
            task: '',
        }
    }

    handleChange = (e) => {
        var state = {
            task: e.target.value
        }
        // 改变state中的task, todoList没有改动
        // 必须这样改
        this.setState(state)
    }

    handleSubmit = (e) => {
        var i = {
            task: this.state.task,
            id: Date.now()
        }
        this.setState((prevState) => {
            return {
                todoList: prevState.todoList.concat(i),
                task: '',
            }
        })
    }

    render() {
        var buttonTitle = '添加第 ' + (this.state.todoList.length + 1) + ' 个 todo'
        return(
            <div className="todo">
                <h2>Todo</h2>
                    <input onChange={this.handleChange} value={this.state.task} placeholder="输入事项" />
                    <button onClick={this.handleSubmit}>{buttonTitle}</button>
                <div>
                    <TodoList todos={this.state.todoList} />
                </div>
            </div>
        )
    }
}

// TodoList 也是一个组件
class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(t => (
                    <li className="todo-li" key={t.id}>{t.task}</li>
                ))}
            </ul>
        )
    }
}

module.exports = Todo
