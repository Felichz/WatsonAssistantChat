import styled from 'styled-components';

export const MessageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    padding-top: 10px;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2),
        inset 0px 2px 5px rgba(0, 0, 0, 0.02);

    & .input-field {
        width: 85%;
    }

    & button.btn {
        width: 45px;
        height: 45px;
        padding: 0;
        justify-content: center;
        align-items: center;
        display: flex;
        border-radius: 50%;
        background: white;
        color: #0984e3;
        box-shadow: none;
    }

    & button.btn i {
        font-size: 24px;
    }
`;
