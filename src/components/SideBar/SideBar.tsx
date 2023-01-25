import React from 'react';
import CloseSideBar from "./CloseSideBar/CloseSideBar";
import OpenSideBar from "./OpenSideBar/OpenSideBar";

type PropsType = {
    open?: boolean
    setClose?: () => void
    setOpen?: () => void
}

const SideBar: React.FC<PropsType> = ({open, setClose,setOpen}) => {
    return (
        <>
            {open && <OpenSideBar setClose={setClose}/>}
            {!open && <CloseSideBar setOpen={setOpen}/>}
        </>
    );
};

export default React.memo(SideBar);