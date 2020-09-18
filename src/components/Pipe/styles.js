import styled from 'styled-components';

export const Parent = styled.div`
    position: absolute;
    background: white;
    width: 40px;
    height: 35px;
    background: transparent;
    bottom: -28px;
    left: calc(50% - 100px);
    border-radius: 50%;
    box-shadow: 30px 0px 0px white, 60px 0px 0px white, 70px 0px 0px white;

    &:after {
        content: '';
        position: absolute;
        background: white;
        width: 40px;
        height: 35px;
        background: transparent;
        bottom: 0px;
        left: 160px;
        border-radius: 50%;
        box-shadow: -30px 0px 0px white, -60px 0px 0px white, -70px 0px 0px white;
    }
`;

export const Child = styled.div`
    width: 50%;
    height: 100%;
    background: blue;
`;
