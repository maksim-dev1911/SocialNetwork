import React from 'react';
import {IUser, ProfileType} from "../../types/types";
import SideBarIsExpanded from "./SideBarIsExpanded";
import SideBarDrawer from "../SideBarDrawer";
import SideBarIsSmall from "./SideBarIsSmall";

type PropsType = {
    isMobile?: boolean
    userMe: IUser | null
    profile: ProfileType | null
    userId?: number
    setClose: () => void
    open: boolean
}

const SideBar: React.FC<PropsType> = ({open, setClose, userId, profile, isMobile, userMe}) => {
    return (
        <SideBarDrawer open={open} isMobile={isMobile} onClose={setClose}>
            {open && <SideBarIsExpanded setClose={setClose} profile={profile} userId={userId} userMe={userMe}/>}
            {!open && <SideBarIsSmall profile={profile} userId={userId}/>}
        </SideBarDrawer>
    );
};

export default React.memo(SideBar);