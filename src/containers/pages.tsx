import { ReactNode } from 'react';
import { NotFoundPage } from './NotFoundPage';
import { RacesTablePage } from './RacesTablePage';
import { RacePage } from './RacePage';

const pages: Array<{ exact?: boolean; page: ReactNode; path: string }> = [
    {
        page: <RacesTablePage />,
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
