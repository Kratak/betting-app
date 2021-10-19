import { participantData } from '../../mockData';
import React from 'react';
import {
    FormControlLabel,
    Paper,
    Radio,
    RadioGroup,
    Table as BaseTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';

interface ParticipantsTableProps {
    rows: Array<number>;
}

const ParticipantsTable = (props: ParticipantsTableProps) => {
    return (
        <TableContainer component={Paper}>
            <BaseTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Participants</TableCell>
                        <TableCell>Bets</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((id) => {
                        const participant = participantData.find((data) => data.id === Number(id));
                        if (typeof participant === 'object') {
                            return (
                                <TableRow key={id}>
                                    <TableCell component="th" scope="row">
                                        {participant.body}
                                    </TableCell>
                                    <TableCell>
                                        <RadioGroup aria-label="gender" name="radio-buttons-group">
                                            <FormControlLabel value="firs" control={<Radio />} label="Fist" />
                                            <FormControlLabel value="second" control={<Radio />} label="Second" />
                                            <FormControlLabel value="third" control={<Radio />} label="Third" />
                                        </RadioGroup>
                                    </TableCell>
                                </TableRow>
                            );
                        }
                        return <TableRow key={id}>no data </TableRow>;
                    })}
                </TableBody>
            </BaseTable>
        </TableContainer>
    );
};

export default ParticipantsTable;
