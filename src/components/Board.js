import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
margin : auto;
tr:first-child td {
	border-top-color: black;
}
tr:nth-child(3n) td {
	border-bottom-color: black;
}
td {
	border: 1px solid lightgrey;
	height: 50px;
	width: 50px;
}
td:first-child {
	border-left-color: black;
}
td:nth-child(3n) {
	border-right-color: black;
}
  
td:hover{
        background-color: #42ecf5;
}
`;
export const Board = () => {

    const onDrop = (e, { i, j }) => {
        const data = e.dataTransfer.getData("number");
    
    }
    
    const draw = () => {
        let row = [];
        const board = [];
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {

                row.push(<td key={`${i}${j}`}
                             onDrop={(event) => onDrop(event, { i, j })}
                             onDragOver={event => event.preventDefault()}></td>);
            }
            board.push(<tr>{row}</tr>);
            row = [];
        }
        return (<StyledTable><tbody>{board}</tbody></StyledTable>);
    };

    return (
        draw()
    )
};