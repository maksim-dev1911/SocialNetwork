import React from 'react';
import classes from './CloseSideBar.module.scss';
import menuImg from '../../../images/navbar/menu.png';

type PropsType = {
    setOpen?: () => void
}

const CloseSideBar: React.FC<PropsType> = ({setOpen}) => {
    return (
        <div className={classes.closeSide}>
            <img onClick={setOpen} className={classes.header__menuImg} src={menuImg}/>
            <ul>
                <li>
                    <img src=''/>
                </li>
                <li>
                    <img src=''/>
                </li>
                <li>
                    <img src=''/>
                </li>
            </ul>
        </div>
    );
};

export default CloseSideBar;