import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import { publicRoutes } from '../routes';
import { Context } from '..';
import Orders from './Orders/Orders';

const AppRouter = () => {
    const {user} = useContext(Context)


    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
        </Routes>
    );
};

export default AppRouter;