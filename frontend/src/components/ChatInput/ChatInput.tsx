import React, { Component } from 'react'
import './ChatInput.scss'

type props = {
    send: (event: any) => void
}

class ChatInput extends Component<props> {
    render() {
        return (
            <div className='ChatInput'>
                <input onKeyDown={this.props.send} placeholder='Type a message...'/>
            </div>
        )
    }
}

export default ChatInput