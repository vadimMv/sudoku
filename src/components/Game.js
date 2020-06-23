import React from 'react';
import { Wrapper } from '../styles/components';
import { Board } from './Board';
import { Timer } from './Timer';
import { Controlls } from './Controlls';

export const Game = () => {
    return (
        <Wrapper>
            <Timer />
            <Board />
            <Controlls />
        </Wrapper>
    );
}

