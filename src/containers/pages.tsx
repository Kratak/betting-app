import { ReactNode } from 'react';
import { NotFoundPage } from './NotFoundPage';
import { RaceTablePage } from './RaceTablePage';
import { RacePage } from './RacePage';

const pages: Array<{ exact?: boolean; page: ReactNode; path: string }> = [
    {
        page: <RaceTablePage />,
        path: '/',
        exact: true,
    },
    {
        page: <RacePage />,
        path: '/race/:id',
    },
    {
        page: <NotFoundPage />,
        path: '*',
    },
];

export default pages;
