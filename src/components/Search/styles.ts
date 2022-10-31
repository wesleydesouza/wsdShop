import styled from "styled-components";

export const SearchWrapper = styled.div`

    display: flex;
    align-items: center;

    svg {
        position: absolute;
        margin-left: 8px;
    }

    input {

        transition: width 0.4s ease-in-out, background-color 0.4s ease-in-out;

        width: 25%;
        height: 32px;

        border-radius: 32px;
        border: none;

        background-color: ${(props) => props.theme.colors.gray500};
        color: ${(props) => props.theme.colors.white};

        padding-left: 32px;

        :focus{
            width: 100%;

            background-color: ${(props) => props.theme.colors.blue500};

            outline: none;

            ::placeholder{
                color: ${(props) => props.theme.colors.white};
            }
        }
    }
`