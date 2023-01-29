import React from 'react';
import './App.scss'
import {ThemeProvider} from "@mui/material";
import Router from "./components/App/Router/Router";
import {theme} from "./components/App/Theme/Theme";
import Box from "@mui/material/Box";

const App = () => {
    return (
        <Box sx={{backgroundColor: '#f9fafb'}}>
            <ThemeProvider theme={theme}>
                <Router/>
            </ThemeProvider>
        </Box>
    );
};

export default React.memo(App);