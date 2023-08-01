import React, { Component } from 'react'
import './ChatHistory.scss'
import Message from '../Message/Message'
import { v4 as uuidv4 } from 'uuid'

type props = {
    chatHistory: any[]
}

class ChatHistory extends Component<props> {
    render() {
        console.log(this.props.chatHistory)
        const messages = this.props.chatHistory.map(msg => <Message key={uuidv4()} message={msg.data} />)

        return (
            <div className='ChatHistory'>
                <span>Chat</span>
                {messages}
            </div>
        )
    }
}

export default ChatHistory