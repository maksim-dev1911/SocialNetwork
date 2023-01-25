import React, {useState} from 'react';
import classes from './UserMenu.module.scss';
import userLogo from '../../../../images/userAvatar.png';
import DropDown from "../DropDown/DropDown";

const UserMenu = () => {
    const [openProfile, setOpenProfile] = useState(false)

    return (
        <div className={classes.userMenu}>
            <div>
                <img onClick={() => setOpenProfile((prev) => !prev)} src={userLogo}/>
            </div>
            <div>
                {openProfile && (
                    <DropDown/>
                )}
            </div>
        </div>
    );
};

export default React.memo(UserMenu);