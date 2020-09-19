import React, { useRef, useState, useEffect } from 'react';

import { MessageContainer } from './styles';

export const MessageInput = ({ onSend, disableInput }) => {
    const [disabled, setDisabled] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        setDisabled(disableInput);
    }, [disableInput]);

    function handleInputKeyDown(e) {
        if (e.which === 13) {
            e.preventDefault();
            handleClickSend();
        }
    }

    function handleClickSend() {
        const input = inputRef.current;

        if (input && input.value) {
            onSend(input.value);
            input.value = '';
        }
    }

    return (
        <MessageContainer className="row">
            <div className="input-field">
                <textarea
                    id="textarea1"
                    className="materialize-textarea"
                    ref={inputRef}
                    disabled={disabled}
                    onKeyDown={handleInputKeyDown}
                ></textarea>
                <label htmlFor="textarea1">Message</label>
            </div>

            <button
                className="waves-effect btn"
                onClick={handleClickSend}
                disabled={disabled}
            >
                <i className="material-icons">send</i>
            </button>
        </MessageContainer>
    );
};
