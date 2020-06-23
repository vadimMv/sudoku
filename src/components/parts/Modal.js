import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/GlobalState';
import { Button, MButton, HButton } from '../../styles/components';

export const Modal = ({ handleClose, open }) => {

    const { state, InitGame } = useContext(AppContext);
    const { loader, response } = state;
    const click = n => e => {
        InitGame(9, n);
    };

    if (response) {
        handleClose(response);
    }

    return (<>{
        open && (<div className="modal fade show">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Select Game Level.</h5>
                        <button className="close" onClick={e => handleClose()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {
                        loader ? (<div className="d-flex justify-content-center">
                            <div className="spinner-grow text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>) : (<div className="modal-body">
                            <Button onClick={click(1)}>Easy</Button>
                            <MButton onClick={click(2)}>Medium</MButton>
                            <HButton onClick={click(3)}>Hard</HButton>
                        </div>)
                    }
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={e => handleClose()} >Close</button>
                    </div>
                </div>
            </div>
        </div>)
    } </>);
};