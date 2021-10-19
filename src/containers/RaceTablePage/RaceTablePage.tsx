import { Table } from '../../components/Table';
import { raceData, RaceDataProps } from '../../mockData';
import { useEffect, useState } from 'react';

const RaceTablePage = () => {
    const [rows, setRows] = useState<Array<RaceDataProps>>([]);

    useEffect(() => {
        setRows(raceData);
    }, []);
    return (
        <div>
            <Table rows={rows} />
        </div>
    );
};

export default RaceTablePage;
