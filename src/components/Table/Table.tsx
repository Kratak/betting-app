import { RaceDataProps } from '../../mockData';
import React, { useEffect, useState } from 'react';
import {
    Paper,
    Table as BaseTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

interface TableProps {
    rows: Array<RaceDataProps>;
}

const Table = (props: TableProps) => {
    const [rows, setRows] = useState<Array<RaceDataProps>>([]);

    useEffect(() => {
        setRows(props.rows);
    }, []);

    return (
        <TableContainer component={Paper}>
            <BaseTable>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Participant</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.active ? 'active' : 'not active'}</TableCell>
                            <TableCell align="right">
                                {row.participants.map((item) => {
                                    return item;
                                })}
                            </TableCell>

                            <TableCell align="right">
                                <Link to={`/race/${row.id}`}>Go to race</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </BaseTable>
        </TableContainer>
    );
};

export default Table;
