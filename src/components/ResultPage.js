import React, { useContext, useEffect } from 'react';
import { Result } from '../styles/components';
import { AppContext } from './../context/GlobalState';
export const ResultPage = () => {

    const { state, Save } = useContext(AppContext);
    const { result, finish } = state;

    useEffect(() => {
        if (finish) {
            Save();
        }
    }, [])

    return (<Result>
        {
            result.length > 0 ?
                (<table className="table table-striped  table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">GAME RESULT</th>
                            <th scope="col">GAME TIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            result.map((v, i) =>
                                (<tr key={i}><th scope="row">{i + 1}</th><td>{v.result ? 'Player win' : 'Player lose'}</td><td>{v.time}</td></tr>))
                        }
                    </tbody>
                </table>) : <h2>NO RESULT !!!</h2>
        }

    </Result>);
}