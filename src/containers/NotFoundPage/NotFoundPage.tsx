import { Link } from 'react-router-dom';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <div>Wrong page go back to home</div>
            <Link to="/">Home page</Link>
        </div>
    );
};

export default NotFoundPage;
