import styled from 'styled-components';
import { respondMax } from './RepondQuery';

export const SelectContainerComponent = styled.div`
    display: flex; 
    flex-wrap: wrap;  
    flex-direction: column;
    justify-content: space-between;
    max-width: 850px;
    color: white;
`;
// ${respondMax has a max-width function here check files RespondQuery.js and BreakPoint.js
export const SelectComponent = styled.select`
    width: 32%;
    padding: 10px;
    margin-bottom: 10px;    
    border: none;
    outline: 0;
    
    // firefox to remove weird bug arrow
    border: 1px solid silver; 
    -webkit-appearance: none;
    padding-right: 25px;
    background: url(data:image/gif;base64,R0lGODlhCwALAJEAAAAAAP///xUVFf///yH5BAEAAAMALAAAAAALAAsAAAIPnI+py+0/hJzz0IruwjsVADs=);
    background-repeat: no-repeat;
    background-position: 95% 42%;
    background-color: white;

    // safari bug border-radius
    border-radius: 0; 

    ${respondMax.xs`
        width: 100%;
    `}
`;
// all h1 should be modified here
export const HeadingOne = styled.h1`
    font-size: 16px;

    ${respondMax.xs`
        font-size: 14px;
    `}
`;
// all paragraphs are here
export const Paragraph = styled.p`
    font-size: 14px;
    color: orange;
    &::first-letter {
        text-transform: capitalize;
    }
`;

export const ValueContainer = styled.div`
    width: 100%;
`;
// put height of output value
export const ValueBlock = styled.div`
    height: 60px;
    width: 100%%;
    padding: 15px 0 20px;

    ${respondMax.xs`
        height: 30px;
    `}
`;

export const Option = styled.option`
    background-color: lightgrey;
`;

export const SelectContainer = styled.div`
    background-color: #1565c0;
    margin: 10px;
    padding: 25px;
    z-index: 999;
    box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`;

export const SelectBlock = styled.div`
    display: flex; 
    flex-wrap: wrap;  
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
`;
