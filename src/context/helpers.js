const convertIndex = i => Math.floor(i / 10);

export const merge = (array) => {

    const empty = Array.from(Array(89))
        .map((v, i) => { return { x: convertIndex(i), y: i % 10, value: 0 } })
        .filter(obj => obj.y < 9);

    return empty.map((item, i) => {
        const source = array.find(cell => cell.x === item.x && cell.y === item.y);
        if (source) {
            item.value = source.value;
        }
        return item;
    });
}


export const free = (state, { i, j }) => {

    const availableX = Array(10).fill(0);
    const availableY = Array(10).fill(0);

    state
        .filter(item => item.x === i)
        .map(item => item.value)
        .forEach((v, i) => {
            if (v !== 0) {
                availableY[v]++;
            }
        });

    state
        .filter(item => item.y === j)
        .map(item => item.value)
        .forEach((v, i) => {
            if (v !== 0) {
                availableX[v]++;
            }
        });

    const x = availableX.map((i, v) => {
        if (i === 0) {
            return v;
        }
    }).filter(x => x !== undefined && x != 0);

    const y = availableY.map((i, v) => {
        if (i === 0) {
            return v;
        }
    }).filter(y => y !== undefined && y != 0);

    return x.filter(digit => y.includes(digit));
};

export const undo = (state, last) => {
    if (last === undefined) return [...state];

    return state.map((c) => {
        if (c.x === last.x && c.y === last.y) {
            c.value = last.value;
        }
        return c;
    })
};

export const prev = (cell, state) => ({ ...state.find(el => el.x === cell.i && el.y === cell.j) });



export const detectArea = (i, j) => {

    const I = i >= 0 && i <= 2 ? 1 : i > 2 && i <= 5 ? 2 : i > 5 && i <= 8 ? 3 : -1;
    const J = j >= 0 && j <= 2 ? 1 : j > 2 && j <= 5 ? 2 : j > 5 && j <= 8 ? 3 : -1;

    return { i: I, j: J };
}

export const resultGame = arr =>! arr.map(position => position.value).some(number => number === 0);