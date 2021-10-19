import { RacesTable } from '../../components/RacesTable';
import { raceData, RaceDataProps } from '../../mockData';
import { useEffect, useState } from 'react';
import { Checkbox, Typography } from '@material-ui/core';
import { useStyles } from './styles';

const RacesTablePage = () => {
    const classes = useStyles();
    const [rows, setRows] = useState<Array<RaceDataProps>>([]);
    const [filters, setFilter] = useState<{ areActive: boolean | null }>({ areActive: null });

    useEffect(() => {
        let newRows = rows;
        if (typeof filters.areActive === 'boolean') {
            newRows = raceData.filter((item) => item.active === filters.areActive);
        }
        setRows(newRows);
    }, [filters.areActive]);

    useEffect(() => {
        setRows(raceData);
    }, []);

    return (
        <div>
            <div className={classes.header}>
                <Typography variant={'body2'}>Is race active</Typography>
                <Checkbox
                    value={!!filters.areActive}
                    onChange={() => {
                        setFilter({ ...filters, areActive: !filters.areActive });
                    }}
                />
            </div>
            <RacesTable rows={rows} />
        </div>
    );
};

export default RacesTablePage;
