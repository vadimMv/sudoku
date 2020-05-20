import React, { useState, useEffect } from 'react';
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

    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => { clearInterval(interval) };
    }, [seconds]);

    const time = `${Math.floor(seconds / 60)} : ${seconds % 60}`;
    return (<Paragraph>{time}</Paragraph>);
}