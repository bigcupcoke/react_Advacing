import React from 'react'

import './timer.css'

class Timer extends React.Component {
    constructor(props) {
    super(props)
        this.state = {
            secondsEsplced: 0,
        }
    }

    tick() {
        this.setState((prevState) => ({
            secondsEsplced: prevState.secondsEsplced +　1
        }))
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillMount() {
        clearInterval(this.interval)
    }

    render() {
        return(
            <div>启动时间： {this.state.secondsEsplced}</div>
        )
    }
}

module.exports = Timer
