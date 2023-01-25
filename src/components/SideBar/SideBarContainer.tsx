import React from 'react';
import SideBar from "./SideBar";

type PropsType = {
    open?: boolean
    setClose?: () => void
    setOpen?: () => void
}

const SideBarContainer: React.FC<PropsType> = ({open, setClose,setOpen}) => {
    return (
        <>
            <SideBar setClose={setClose} setOpen={setOpen} open={open}/>
        </>
    );
};

export default React.memo(SideBarContainer);