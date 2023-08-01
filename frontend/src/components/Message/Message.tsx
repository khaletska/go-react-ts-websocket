import React, { Component } from 'react'
import './Message.scss'

type props = {
    message: any
}

type state = {
    message: {Body: string}
}

class Message extends Component<props, state> {
    constructor(props: props) {
        super(props)
        let tmp = JSON.parse(this.props.message)
        this.state = {
            message: tmp
        }
    }

    render() {
        return (
            <div className='Message'>
                {this.state.message.Body}
            </div>
        )
    }
}

export default Message