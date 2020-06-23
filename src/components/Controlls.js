import React, { useState, useContext } from 'react';
import { Numbers, Digit } from '../styles/components';
import { AppContext } from './../context/GlobalState';
import { PButton, FButton, UndoButton, HMButton } from '../styles/components';
export const Controlls = () => {

    const { state, Pause, Finish, Undo, HelpMode, GetHelp } = useContext(AppContext);
    const { options, pause, steps, helpMode } = state;

    const onDrag = (e, v) => {
        helpMode && GetHelp(v);
        e.dataTransfer.setData("number", v);
    }
    return (
        options !== undefined &&
        <>
            <Numbers>
                {
                    [...options].map((v, i) => {
                        return <Digit
                            key={i}
                            draggable
                            onDragStart={(event) => { onDrag(event, v) }}>
                            {v}
                        </Digit>
                    })
                }
            </Numbers>

            <PButton onClick={Pause}>
                {pause ? 'Continue Game' : 'Pause Game'}
            </PButton>
            {
                steps.length > 0 && (<UndoButton onClick={Undo}>
                    Undo
                </UndoButton>)
            }
            <FButton onClick={Finish}>
                Finish Game
        </FButton>
            <HMButton onClick={HelpMode} pr={helpMode}>
                {helpMode ? 'Help On' : 'Help Off'}
            </HMButton>
        </>
    )
}