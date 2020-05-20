import React from 'react';
import styled from 'styled-components';
import { Board } from './Board';
import { Timer } from './Timer';
import { Controlls } from './Controlls';
const Wrapper = styled.section`
     margin:12px auto;
`;

export const Game = () =>
    (
        <Wrapper>
            <Timer />
            <Board />
            <Controlls />
        </Wrapper>
    );
