import styled, { css } from 'styled-components';

const leftColor = '#E91E63';
const rightColor = '#197BC9';

export const Container = styled.div`
    display: flex;
    justify-content: ${({ align }) => align};
    align-items: top;
    margin: 10px 20px;

    @keyframes appearTransition {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    animation: 250ms ease 0s 1 appearTransition;
`;

export const ProfileIcon = styled.div`
    order: ${(props) => (props.align === 'left' ? 0 : 1)};

    & i {
        color: ${(props) => (props.align === 'left' ? leftColor : rightColor)};
        font-size: 36px;
    }
`;

export const MessageBox = styled.div`
    max-width: 87%;
    padding: 10px;
    margin-top: 15px;
    color: white;
    position: relative;

    ${(props) =>
        props.align === 'left'
            ? css`
                  border-radius: 0 5px 5px 5px;
                  margin-left: 20px;
                  background: ${leftColor};
              `
            : css`
                  border-radius: 5px 0px 5px 5px;
                  margin-right: 20px;
                  background: ${rightColor};
              `};

    &:after {
        content: '';
        width: 0;
        height: 0;
        top: 0;
        border-top: 15px solid
            ${(props) => (props.align === 'left' ? leftColor : rightColor)};
        position: absolute;

        ${(props) =>
            props.align === 'left'
                ? css`
                      left: -15px;
                      border-left: 15px solid transparent;
                  `
                : css`
                      right: -15px;
                      border-right: 15px solid transparent;
                  `};

        @media (max-width: 500px) {
            display: none;
        }
    }

    @media (max-width: 500px) {
        margin-top: 5px;
        border-radius: 5px;
    }
`;

export const OptionBox = styled.div`
    display: flex;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-top: 5px;
    padding: 10px;
`;

export const OptionButton = styled.button`
    margin: 0px 5px;
`;
