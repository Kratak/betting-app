import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import pages from './containers/pages';

import { useStyles } from './styles';

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
                        {pages.map((item, index) => (
                            <Route
                                key={`${index}-${item.path}`}
                                children={item.page}
                                exact={item.exact}
                                path={item.path}
                            />
                        ))}
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
