import styled from 'styled-components';

export const ChatThreadContainer = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px 0;
    background: white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2),
        inset 0px 2px 5px rgba(0, 0, 0, 0.02);
    border-radius: 5px;

    /* White shadow effect */
    &:after {
        content: '';
        width: 98%;
        bottom: 0;
        left: 1%;
        bottom: 0px;
        position: absolute;
        box-shadow: 0px -7px 4px 0px white;
        border: 3px solid white;
    }
`;
