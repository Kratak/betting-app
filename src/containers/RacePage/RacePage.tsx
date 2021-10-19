import { useParams } from 'react-router-dom';
import React from 'react';

import { participantData, raceData } from '../../mockData';

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
                <div>race name: {race.name}</div>
                <div>status: {race.active ? 'active' : 'not active'}</div>
                <div>
                    <div>participants</div>
                    {race.participants.map((item, index) => {
                        const participant = participantData.find((data) => data.id === Number(item));
                        if (typeof participant === 'object') {
                            return (
                                <div key={`${index}-${item}`}>
                                    <div>name: {participant.body}</div>
                                </div>
                            );
                        }
                        return <div key={`${index}-${item}`}>No data</div>;
                    })}
                </div>
            </div>
        );
    }
    return <div>Race not found</div>;
};

export default RacePage;
