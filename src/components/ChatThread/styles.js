import styled from 'styled-components';

export const ChatThreadContainer = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    background: white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2),
        inset 0px 2px 5px rgba(0, 0, 0, 0.02);
    border-radius: 5px;

    /* White shadow effect */
    &:after,
    &:before {
        content: '';
        width: 100%;
        left: 0;
        bottom: 0;
        position: absolute;
        box-shadow: white 0px -7px 4px 0px inset;
        background: transparent;
        height: 28px;
        border-radius: 5px;
        height: 10px;
        z-index: 1;
    }

    &:before {
        box-shadow: white 0px 7px 4px 0px inset;
        top: 0;
    }
`;
