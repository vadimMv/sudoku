import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color:white;
`;
const MButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
const HButton = styled(Button)`
  color: red;
  border-color: red;
`;
export const Modal = ({ handleClose, open }) => {

    const [loader, setLoader] = useState(false);

    const click = (e) => {
        setLoader(true);
    };

    return (<>{
        open && (<div className="modal fade show">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Select Game Level.</h5>
                        <button className="close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {
                        loader ? (<div className="d-flex justify-content-center">
                            <div class="spinner-grow text-primary" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>) : (<div className="modal-body">
                            <Button onClick={click}>Easy</Button>
                            <MButton onClick={click}>Medium</MButton>
                            <HButton onClick={click}>Hard</HButton>
                        </div>)
                    }
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={handleClose} >Close</button>
                    </div>
                </div>
            </div>
        </div>)
    } </>);
};