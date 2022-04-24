import React from 'react'
import {PreJunior} from './pages/PreJunior';
import {Error404} from './pages/Error404';
import {Navigate, Routes, Route} from 'react-router-dom';
import {Junior} from './pages/Junior'
import {JuniorPlus} from './pages/JuniorPlus';

export const PATH = {
    PRE_JUNIOR: '/react-tasks-from-ignat/pre-junior',
    JUNIOR: '/react-tasks-from-ignat/junior',
    JUNIOR_PLUS: '/react-tasks-from-ignat/junior-plus'
}

function Pages() {
    return (
        <div>
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Route path={'/react-tasks-from-ignat'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
