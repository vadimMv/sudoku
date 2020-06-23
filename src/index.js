import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Game } from './components/Game';
import { StartPage } from './components/StartPage';
import { ResultPage } from './components/ResultPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppProvider } from './context/GlobalState';

function App() {
    return (
        <div className="text-center">
            <Router>
                <Route exact path="/" component={StartPage} />
                <Route path="/game" component={Game} />
                <Route path="/result" component={ResultPage} />
            </Router>
        </div>
    )
}

ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>
    , document.getElementById('app'));
