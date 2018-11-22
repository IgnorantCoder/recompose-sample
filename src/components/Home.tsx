import * as React from 'react';
import { Link } from 'react-router-dom';

const component: React.SFC = () => {
    return (
        <ul>
            <li><Link to={'/fetch'}>{'fetch sample'}</Link></li>
            <li><Link to={'/handler'}>{'handler sample'}</Link></li>
            <li><Link to={'/handler-with-lifecycle'}>{'handler with lifecycle sample'}</Link></li>
        </ul>
    );
};

export default component;
