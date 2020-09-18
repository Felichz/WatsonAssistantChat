import React, { useState, useEffect, useCallback } from 'react';

import { ChatBox as ChatBoxComponent } from '../components/ChatBox';
import { api } from '../api';

export const ChatBox = () => {
    const [initialized, setInitialized] = useState(false);
    const [messages, setMessages] = useState([]);
    const [disableInput, setDisableInput] = useState(false);

    const onSendMessage = useCallback(async function (message, hide) {
        // Disable action buttons of previous messages
        const newState = messages.map((msg) => ({
            ...msg,
            disableActions: true,
        }));

        if (!hide) {
            const userMessage = {
                type: 'text',
                text: message,
                align: 'right',
            };
            newState.push(userMessage);
        }

        // The loading message will be overriden in the next setMessages
        setMessages([
            ...newState,
            {
                loading: true,
                align: 'left',
            },
        ]);

        setDisableInput(true);

        try {
            const responseMessages = await api.sendMessage(message);
            responseMessages.forEach((msg) => (msg.align = 'left'));

            setMessages([...newState, ...responseMessages]);
            setDisableInput(false);
        } catch (err) {
            if (err.response && err.response.data.error === 'Invalid Session') {
                console.warn('Expired session');
                console.warn('Creating new session and retrying...');

                setMessages([]);
                api.createSession();
                onSendMessage(message);
            } else {
                setMessages([
                    ...newState,
                    {
                        type: 'text',
                        text: 'An error has ocurred, please try again.',
                        align: 'left',
                    },
                ]);
            }
        }
    }, [messages]);

    useEffect(() => {
        if (!initialized) {
            api.createSession();
            onSendMessage('Hi', true);

            setInitialized(true);
        }
    }, [onSendMessage, initialized]);

    return (
        <ChatBoxComponent
            messages={messages}
            disableInput={disableInput}
            onSendMessage={onSendMessage}
        />
    );
};
