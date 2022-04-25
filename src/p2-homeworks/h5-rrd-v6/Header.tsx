import React, {MouseEvent, useState} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './../../p1-main/m1-ui/u1-app/App.module.css'

function Header() {

    const [collapsed, setCollapsed] = useState<boolean>(true);
    const navClassName = collapsed ? classes.sidebar + ' ' + classes.sidebarClose : classes.sidebar;

    const onMouseEnterHandler = (e: MouseEvent<HTMLElement>) => {
        setCollapsed(!collapsed);
    }

    const onMouseLeaveHandler = (e: MouseEvent<HTMLElement>) => {
        if (!collapsed) setCollapsed(!collapsed);
    }

    return (
        <nav onMouseLeave={onMouseLeaveHandler} className={navClassName}>
            <header>
                <div className={classes.text + ' ' + classes.logoText}>
                    <NavLink
                        className={({isActive}) => isActive ? classes.linkActive : classes.link}
                        to={'/react-tasks-from-ignat/pre-junior'}>Pre-Junior</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? classes.linkActive : classes.link}
                        to={'/react-tasks-from-ignat/junior'}>Junior</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? classes.linkActive : classes.link}
                        to={'/react-tasks-from-ignat/junior-plus'}>Junior-Plus</NavLink>
                </div>

                <div onMouseEnter={onMouseEnterHandler} className={`bx bx-chevron-right ${classes.toggle}`}/>
            </header>
        </nav>
    )
}

export default Header;
