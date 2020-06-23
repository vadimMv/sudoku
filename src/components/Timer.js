import React, { useState, useEffect, useContext, useRef } from 'react';
import { AppContext } from './../context/GlobalState';
import styled from 'styled-components';
const Paragraph = styled.p`
  padding: 0.5em;
  margin: 0.5em auto;
  border: 1px solid red;
  color:red;
  background: papayawhip;
  border-radius: 3px;
  width 33.33%;
`;
export const Timer = () => {
    const ref = useRef();
    const { state, GameTime } = useContext(AppContext);
    const [seconds, setSeconds] = useState(0);
    const { pause, finish } = state;
    useEffect(() => {
        const interval = setInterval(() => {
            if (!pause) {
                setSeconds(seconds => seconds + 1);
            }
        }, 1000);
        return () => {
            clearInterval(interval)
        };
    }, [pause]);

    const time = `${Math.floor(seconds / 60)} : ${seconds % 60}`;
    ref.current = time;

    if (finish) {
        GameTime(ref.current);
    }
    return (<Paragraph>{time}</Paragraph>);
}