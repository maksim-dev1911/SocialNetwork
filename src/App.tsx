import React from 'react';
import './App.scss'
import Router from "./components/App/Router/Router";

const App = () => {
    return (
        <Router/>
    );
};

export default React.memo(App);