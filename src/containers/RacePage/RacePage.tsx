import { useParams } from 'react-router-dom';
import React from 'react';

import { raceData } from '../../mockData';
import ParticipantsTable from '../../components/ParticipantsTable/ParticipantsTable';
import { Typography } from '@material-ui/core';

interface PacePageUrlParamsProps {
    id: string;
}

const RacePage = () => {
    const params = useParams();

    const { id } = params as PacePageUrlParamsProps;
    const race = raceData.find((item) => item.id === Number(id));

    if (typeof race === 'object') {
        return (
            <div>
                <Typography variant={'body1'}>Race name: {race.name}</Typography>
                <Typography variant={'body1'}>Status: {race.active ? 'active' : 'not active'}</Typography>

                <ParticipantsTable rows={race.participants} />
            </div>
        );
    }
    return <div>Race not found</div>;
};

export default RacePage;
