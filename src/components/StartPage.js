import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Modal } from './parts/Modal';
import { ButtonStart } from '../styles/components';
export const StartPage = () => {
    const history = useHistory();
    const [modal, setModal] = useState({
        open: false,
        resposne: false,
    });

    const modalClose = (response = false) => {
        setModal({
            open: false,
            resposne: response
        });
    }

    const openClick = e => {
        setModal({
            open: true,
            resposne: false
        });
    }


    if (modal.resposne) {
        return <Redirect to="/game" />;
    }

    return (<>
        <Modal open={modal.open}
            handleClose={modalClose} />
        <div className="container">
            <div className="row">
                <div className="col">
                    <ButtonStart onClick={openClick}>New Game</ButtonStart>
                </div>
                <div className="col">
                    <ButtonStart onClick={e => history.push("/result")}>Result Page</ButtonStart>
                </div>
            </div>
        </div>
    </>)
}