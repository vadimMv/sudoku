import React, { useContext, useState } from 'react';
import { AppContext } from './../context/GlobalState';
import { StyledTable } from '../styles/components';
import { Redirect } from 'react-router-dom';
import { detectArea } from '../context/helpers';
export const Board = () => {

    const { state, UpdateGame, FreeOptions } = useContext(AppContext);

    const [boardProps, SetBoardProps] = useState({
        active: {
            i: -1, j: -1
        },
        area: {
            i: -1, j: -1
        },
        wrong: {
            i: -1, j: -1
        }
    });

    const onDrop = (e, { i, j }) => {

        const data = e.dataTransfer.getData("number");
        const cell = { i, j };
        if (boardProps.active.i === i && boardProps.active.j === j) {
            UpdateGame(cell, parseInt(data));
            const  wrong = { i: -1, j: -1 };
            SetBoardProps(boardProps => ({ ...boardProps, wrong }));
        }
        else {
            const wrong = cell;
            SetBoardProps(boardProps => ({ ...boardProps, wrong }));
        }

    };

    const cellClick = (i, j) => e => {
        const  area = detectArea(i, j);
        const active = { i, j };
        SetBoardProps(boardProps => ({ ...boardProps, area , active }));
        FreeOptions({ i, j }); 
    };
    const ActiveCellsStyle = (i, j) => {
        const { active, area, wrong } = boardProps;
        if (wrong.i === i && wrong.j === j) return 'wrong-step';
        if (active.i === i && active.j === j) return 'active-cell';
        if (active.i !== i && active.j === j) return 'active-row';
        if (detectArea(i, j).i === area.i && area.j === detectArea(i, j).j) return 'active-area';
        return '';
    };
    const Helpers = (i, j) => {

        if (state.helpres && state.helpMode) {
            const { helpres } = state;
            return helpres.find(cell => cell.x == i && cell.y === j) !== undefined ? 'help' : '';
        }
        return '';
    };
    const draw = (s) => {
        let row = [];
        const board = [];
        const { active } = boardProps;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const cell = s.find(cell => cell.x === i && cell.y === j);
                row.push(<td key={`${i}${j}`}
                    className={[ActiveCellsStyle(i, j), Helpers(i, j)].join(' ')}
                    onDrop={event => onDrop(event, { i, j })}
                    onDragOver={event => event.preventDefault()}
                    onClick={cellClick(i, j)}>{cell !== undefined && cell.value != 0 ? `${cell.value}` : ``}</td>);
            }
            board.push(<tr key={`${i}-0`}
                className={active.i === i ? 'active-row' : ''}>{row}</tr>);
            row = [];
        }
        return (<StyledTable><tbody>{board}</tbody></StyledTable>);
    };

    const squares = state.squares || [];
    
    if (state.finish){
        return <Redirect to="/result" />;
    }

    return (
        draw(squares)
    )
};