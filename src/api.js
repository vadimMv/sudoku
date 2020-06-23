
export const callApi = (size = 9, level) => {

    const requestOption = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    };
    return fetch(`/api/cheon/ws/sudoku/new/?size=${size}&level=${level}`, requestOption)
        .then((response) => {
            if (response.ok) {
                return response.text();
            }
            else {
                return Promise.reject('empty response');
            }
        }).then(json => JSON.parse(json));
}

export const loadResults = () => {
    try {
      const serializedState = localStorage.getItem('results');
      if (serializedState === null) {
        return [];
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return [];
    }
  }; 


  export const saveResults = (results) => {
    console.log(results,'results');
    try {
      const prevState = loadResults();
      prevState.push(results);
      const serializedState = JSON.stringify(prevState);
      localStorage.setItem('results', serializedState);
      return true;
    } catch {
        return false;
    }
  };