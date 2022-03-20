import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

interface MenuItem {
    text: string;
    to: string;
}

interface Props {
    list: MenuItem[]
}

export default function Menu({ list }: Props): ReactElement {
    return (
        <ul>
            { list.map(({ to, text}) => (
                <li key={to}>
                    <NavLink to={to}>
                        {text}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}
