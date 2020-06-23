import { merge, free, undo, prev } from './helpers';

export default (state, action) => {
    switch (action.type) {
        case "LOADER_TRUE":
            return {
                ...state,
                loader: true,
            };
        case "INIT_GAME":
            return {
                ...state,
                squares: merge(action.payload),
                loader: false,
                response: true,
            };
        case "UPDATE_GAME":
            return {
                ...state,
                steps: [...state.steps, prev(action.cell, state.squares)],
                squares: [...state.squares].map((c) => {
                    if (c.x === action.cell.i && c.y === action.cell.j) {
                        c.value = action.value;
                    }
                    return c;
                }),
            };
        case "UNDO_STEP":
            return {
                ...state,
                squares: undo(state.squares, state.steps[state.steps.length - 1]),
                steps: state.steps.filter((_, i) =>
                    i !== state.steps.length - 1
                )
            };
        case "HELP_MODE":
            return {
                ...state,
                helpMode: !state.helpMode,
            };
        case "GET_HELP":
            return {
                ...state,
                helpres: state.helpMode === true ? state.squares.filter(cell => cell.value === action.v) : []
            };
        case "FREE_OPTIONS":
            return {
                ...state,
                options: free(state.squares, action.cell),
            };
        case "PAUSE_GAME":
            return {
                ...state,
                pause: !state.pause,
            };
        case "FINISH_GAME":
            return {
                ...state,
                finish: true,
            };
        case "LOAD_RESULT":
            return {
                ...state,
                result: action.result,
            };
        case "SAVE_RESULT":
            return {
                ...state,
            };
        case "GET_TIME":
            return{
                ...state,
                time: action.time,     
            };    
        default:
            return state;
    }
}