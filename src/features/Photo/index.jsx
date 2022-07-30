import React from 'react';
import PropTypes from 'prop-types';
import {Route, Routes, useRouteMatch } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NotFound from '../../components/NotFound';
import AddEditPage from './pages/AddEditPage'
Photo.propTypes = {
    
};

function Photo(props) {
    // const match = useRouteMatch();
    // console.log(match)
    return (
        <Routes>
            {/* <Route path={match.url} element = {MainPage} />
            <Route path={`${match.url}/add`} element = {AddEditPage} />
            <Route path={`${match.url}/:photoId`} element = {AddEditPage} />
            <Route element = {NotFound} /> */}
            <Route path= "/" element = {<MainPage />} />
            <Route path="/add" element = {<AddEditPage />} />
            <Route path="/:photoId" element = {<AddEditPage />} />
            <Route element = {NotFound} />
        </Routes>
    );
}

export default Photo;