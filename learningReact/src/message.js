import React from 'react'
// 引入自己的css
import './message.css'

class Message extends React.Component {
    render() {
        //  this.props, props是对象， name是props对象的一个key, name的值是value
        return(
            <div className='message'>
                <p>{this.props.content}</p>
                <div>{this.props.name.toUpperCase()}</div>
            </div>
        )
    }
}

module.exports = Message
