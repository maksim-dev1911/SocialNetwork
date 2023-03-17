import React, {useEffect} from 'react';
import './App.scss'
import {ThemeProvider} from "@mui/material";
import Router from "./components/App/Router/Router";
import {theme} from "./components/App/Theme/Theme";
import Box from "@mui/material/Box";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {initializeApp} from "./store/app/app.thunks";
import {initializedAppSelector} from "./store/app/app.selectors";
import Preloader from "./components/Common/Preloader/Preloader";

const App = () => {
    const initialized = useAppSelector(initializedAppSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if (!initialized) {
        return <Preloader sx={{alignItems: 'center', position:'absolute', top:'50%', left:0, right: 0}}/>
    }

    return (
        <Box sx={{backgroundColor: '#f9fafb'}}>
            <ThemeProvider theme={theme}>
                <Router/>
            </ThemeProvider>
        </Box>
    );
};

export default React.memo(App);