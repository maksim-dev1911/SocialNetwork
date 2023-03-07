import React from 'react';

import Drawer from '@mui/material/Drawer';
import {concatSx} from "../utils/ContactSx";
import sx from "./SideBar/SideBar.style";

type PropsType = {
    isMobile?: boolean;
    open?: boolean;
    onClose?: () => void;
};

const SideBarDrawer: React.FC<React.PropsWithChildren<PropsType>> = ({
                                                                         isMobile,
                                                                         open,
                                                                         onClose,
                                                                         children,
                                                                     }) => {
    return (
        <Drawer
            sx={concatSx(
                !isMobile && sx.drawerDesktop,
                !isMobile && open && sx.drawerOpened,
                !isMobile && !open && sx.drawerClosed
            )}
            variant={isMobile ? 'temporary' : 'permanent'}
            open={open}
            onClose={onClose}
        >
            {children}
        </Drawer>
    );
};

export default React.memo(SideBarDrawer);
