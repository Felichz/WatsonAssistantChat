import React, { useState, useEffect } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

import { Dropdown } from '../Dropdown';

import {
    Container,
    ProfileIcon,
    MessageBox,
    OptionBox,
    OptionButton,
} from './styles';

export const Message = ({
    loading,
    text,
    align,
    type,
    options,
    disableActions,
    onOptionResponse,
    onOpenDropdown,
}) => {
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setDisabled(disableActions);
    }, [disableActions]);

    function handleOptionClick(value) {
        onOptionResponse(value);
        setDisabled(true);
    }

    let content;

    if (loading) {
        content = <PulseLoader color="white" size={8} />;
    } else {
        switch (type) {
            case 'option':
                let optionElements;

                if (options.length <= 3) {
                    optionElements = options.map((option, idx) => (
                        <OptionButton
                            className="waves-effect btn white black-text"
                            disabled={disabled}
                            key={idx}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </OptionButton>
                    ));
                } else {
                    optionElements = (
                        <Dropdown
                            options={options}
                            disabled={disabled}
                            onOpen={() => onOpenDropdown()}
                            onOptionClick={(value) => handleOptionClick(value)}
                        >
                            <button
                                className="waves-effect btn white black-text"
                                disabled={disabled}
                            >
                                Show options
                            </button>
                        </Dropdown>
                    );
                }

                content = (
                    <>
                        {text}
                        <OptionBox>{optionElements}</OptionBox>
                    </>
                );
                break;
            default:
                content = text;
        }
    }

    return (
        <Container align={align}>
            <ProfileIcon align={align}>
                <i className="material-icons">account_circle</i>
            </ProfileIcon>
            <MessageBox align={align}>{content}</MessageBox>
        </Container>
    );
};
