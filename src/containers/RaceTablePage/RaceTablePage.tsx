import { Table } from '../../components/Table';
import { raceData, RaceDataProps } from '../../mockData';
import { useEffect, useState } from 'react';
import { Checkbox, Typography } from '@material-ui/core';

const RaceTablePage = () => {
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
            <div>
                <Typography variant={'body2'}>Status</Typography>
                <Checkbox
                    value={!!filters.areActive}
                    onChange={() => {
                        setFilter({ ...filters, areActive: !filters.areActive });
                    }}
                />
            </div>
            <Table rows={rows} />
        </div>
    );
};

export default RaceTablePage;
