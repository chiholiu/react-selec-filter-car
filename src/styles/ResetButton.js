import styled from 'styled-components';
import { respondMin } from './RepondQuery';

// hover only works on
export const ResetBtn = styled.button`
    width: 100px;
    background-color: black;
    border: none;
    padding: 10px;
    color: white;
    
    ${respondMin.md`
        &:hover {
            cursor: pointer;
        }
    `}

    &:disabled {
        cursor: default;
        opacity: 0.7;
        color: grey;
    }
`;
