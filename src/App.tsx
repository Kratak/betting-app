import React from 'react';

import { Table } from './components/Table';

import { useStyles } from './styles';
import { raceData } from './mockData';

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Table rows={raceData} />
        </div>
    );
};

export default App;
