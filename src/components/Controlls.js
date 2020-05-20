import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const Numbers = styled.div`
padding: 0.5em;
margin: 0.5em auto;
border: 2px solid blue;
color:blue;
border-radius: 3px;
width 33.33%;
background-color:#8de2f7;
display: flex;
justify-content: space-around;
`;
const Digit = styled.span`
padding :7px;
border: 1px solid blue;
color:blue;
width: 45px;
height: 45px;
`;
export const Controlls = () => {
    const onDrag = (e, v) => {
        e.dataTransfer.setData("number", v);
    }
    return (
        <Numbers>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => {
                    return <Digit
                        key={i}
                        draggable
                        onDragStart={(event) => { onDrag(event, v) }}>
                        {v}
                    </Digit>
                })
            }
        </Numbers>
    )
}