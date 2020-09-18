import React, { useRef, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { Pipe } from '../Pipe';
import { ChatThreadContainer } from './styles';
import { Message } from '../Message';

export const ChatThread = ({ messages, onOptionResponse}) => {
    const scrollBoxRef = useRef(null);

    useEffect(() => {
        scrollBoxRef.current.scrollToBottom();
    }, [messages]);

    // Scroll to bottom smoothly when a dropdown is open
    function onOpenDropdown() {
        const interval = setInterval(() => {
            scrollBoxRef.current.scrollToBottom();
        }, 10);

        setTimeout(() => {
            clearInterval(interval);
        }, 300);
    }

    return (
        <ChatThreadContainer>
            <Pipe />
            <Scrollbars style={{ height: '60vh' }} ref={scrollBoxRef}>
                {messages.map((message, idx) => (
                    <Message
                        loading={message.loading}
                        text={message.text}
                        align={message.align || 'right'}
                        type={message.type}
                        options={message.options}
                        disableActions={message.disableActions}
                        onOptionResponse={onOptionResponse}
                        onOpenDropdown={onOpenDropdown}
                        key={idx}
                    />
                ))}
            </Scrollbars>
        </ChatThreadContainer>
    );
};
