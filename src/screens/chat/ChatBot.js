import React from "react";
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './ChatBot.css';
import config from './Config';
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";


const ChatBot=()=>{
    return(
        <div className='main-page'>
            <div className='sub-div'>
            <Chatbot
             config={config}
             messageParser={MessageParser}
             actionProvider={ActionProvider}
            />
            </div>
            </div>
    )
}

export default ChatBot;