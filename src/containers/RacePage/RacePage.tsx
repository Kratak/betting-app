import { useParams } from 'react-router-dom';
import { raceData } from '../../mockData';
import React from 'react';

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
                <div>name: {race.name}</div>
                <div>status: {race.active ? 'active' : 'not active'}</div>
                <div>
                    <div>participants</div>
                    {race.participants.map((item, index) => {
                        return <div key={`${index}-${item}`}>{item}</div>;
                    })}
                </div>
            </div>
        );
    }
    return <div>single race view</div>;
};

export default RacePage;
