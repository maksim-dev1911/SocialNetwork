import React from 'react';
import {Outlet} from "react-router-dom";
import SideBarContainer from "../../SideBar/SideBarContainer";

const BaseLayout = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <SideBarContainer open={open} setOpen={handleDrawerOpen} setClose={handleDrawerClose}/>
            <Outlet/>
        </>
    );
};

export default React.memo(BaseLayout);