import React from 'react';

import { ChatContainer } from './styles';
import { ChatThread } from '../ChatThread';
import { MessageInput } from '../MessageInput';

export const ChatBox = ({ messages, disableInput, onSendMessage }) => (
    <ChatContainer>
        <ChatThread messages={messages} onOptionResponse={onSendMessage}/>
        <MessageInput onSend={onSendMessage} disableInput={disableInput} />
    </ChatContainer>
);
