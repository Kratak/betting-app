import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Table } from './components/Table';

import { useStyles } from './styles';
import { raceData } from './mockData';
import { RacePage } from './containers/RacePage';

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Router>
                <div>
                    <nav>
                        <Link to="/">All races</Link>
                    </nav>

                    <Switch>
                        <Route exact path="/">
                            <Table rows={raceData} />
                        </Route>
                        <Route path="/race/:id">
                            <RacePage />
                        </Route>
                        <Route path="*">
                            <div>
                                <div>Wrong page go back to home</div>
                                <Link to="/">Home page</Link>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
