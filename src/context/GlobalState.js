import React, { createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import { resultGame } from './helpers';
import { callApi, loadResults, saveResults, } from '../api';

const initState = {
    squares: [],
    loader: false,
    pause: false,
    helpMode: false,
    steps: [],
};

export const AppContext = createContext(initState);

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initState);


    useEffect(() => {
        Load();
    }, []);

    const InitGame = async (size, level) => {
        dispatch({
            type: "LOADER_TRUE",
        });
        const data = await callApi(size, level);
        dispatch({
            type: "INIT_GAME",
            payload: data.squares
        });

    };

    const UpdateGame = (cell, value) => {
        dispatch({
            type: "UPDATE_GAME",
            cell,
            value,
        });
    };

    const FreeOptions = cell => {
        dispatch({
            type: "FREE_OPTIONS",
            cell,
        });
    };

    const Pause = () => {
        dispatch({
            type: "PAUSE_GAME",
        });
    };

    const Finish = () => {
        dispatch({
            type: "FINISH_GAME",
        });

    };
    const Load = () => {
        const result = loadResults();
        dispatch({
            type: 'LOAD_RESULT',
            result,
        });
    };

    const Save = () => {
        const { squares, time } = state;
        const result = { result:  resultGame(squares), time: time };

        if (saveResults(result)) {
            dispatch({
                type: 'SAVE_RESULT',
                result
            });

            Load();
        }

    };
    const GameTime = time => dispatch({ type: "GET_TIME", time });
    const Undo = () => dispatch({ type: "UNDO_STEP" });
    const HelpMode = () => dispatch({ type: "HELP_MODE" });
    const GetHelp = v => dispatch({ type: "GET_HELP", v });
    return (
        <AppContext.Provider
            value={{
                state,
                InitGame,
                UpdateGame,
                FreeOptions,
                Pause,
                Finish,
                Save,
                Undo,
                HelpMode,
                GetHelp,
                GameTime
            }}
        >
            {children}
        </AppContext.Provider>
    );
};