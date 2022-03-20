import styled from 'styled-components';

export const Container = styled.header`
    height: 80px;
    background-color: #222;

    & > div {
        display: flex;
        align-items: center;
        margin: 0 auto;
        width: 75%;
        height: 100%;

        a {
            position: relative;

            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                border-radius: 2px;
                background-color: #fff;
                transition: width 200ms;
            }

            &:hover::after {
                width: 100%;
            }

            & + a {
                margin-left: 12px;
            }
        }
    }
`;