import React, { Component } from "react"
import Header from "./components/Header/Header"
import ChatHistory from "./components/ChatHistory/ChatHistory"
import ChatInput from "./components/ChatInput/ChatInput"
import './App.css'
import { connect, sendMsg } from './api/index'

type State = {
  chatHistory: any[]
}

class App extends Component<{}, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            chatHistory: []
        }
    }

    componentDidMount() {
        connect((msg: any) => {
            console.log('new message')
            this.setState((prevState: any) => ({
                chatHistory: [...prevState.chatHistory, msg]
            }))
            console.log(this.state)
        })
    }

    send(event: any) {
        if (event.keyCode === 13) {
            console.log(event.target.value)
            sendMsg(event.target.value);
            event.target.value = "";
        }
    }

    render() {
        console.log(Header)
        return (
            <div className="App">
                <Header />
                <ChatHistory chatHistory={this.state.chatHistory} />
                <ChatInput send={this.send} />
            </div>
        )
    }
}

export default App