import React, {useCallback, useState} from 'react';
import Header from "../../Header/Header/Header";
import {Outlet} from "react-router-dom";
import SideBar from "../../SideBar/SideBar";

const BaseLayout = () => {
    const [isOpened, setIsOpened] = useState(false);
    const handleOpen = useCallback(() => setIsOpened(true), []);
    const handleClose = useCallback(() => setIsOpened(false), []);

    return (
        <>
            <Header/>
            <SideBar setOpen={handleOpen} open={isOpened} setClose={handleClose}/>
            <Outlet/>
        </>
    );
};

export default React.memo(BaseLayout);