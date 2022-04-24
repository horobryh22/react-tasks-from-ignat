import React from 'react';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <div>
            <NavLink to={'/react-tasks-from-ignat/pre-junior'}>Pre-Junior</NavLink>
            <NavLink to={'/react-tasks-from-ignat/junior'}>Junior</NavLink>
            <NavLink to={'/react-tasks-from-ignat/junior-plus'}>Junior-Plus</NavLink>
        </div>
    )
}

export default Header;
