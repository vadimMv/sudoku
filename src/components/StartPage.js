import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Modal } from './parts/Modal';
import styled from 'styled-components';
const Button = styled.button`
  background:  "palevioletred" : "white";
  color:  "white" : "palevioletred";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
export const StartPage = () => {
    const [modal, setModal] = useState(false);


    // return <Redirect to="/game" />;
    return (<>
        <Modal open={modal}
            handleClose={() => setModal(false)} />
        <div className="container">
            <div className="row">
                <div className="col">
                    <Button onClick={() => setModal(true)}>New Game</Button>
                </div>
                <div className="col">
                    <Button>Result Page</Button>
                </div>
            </div>
        </div>
    </>)
}