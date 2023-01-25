import React, {useState} from 'react';
import classes from './OpenSideBar.module.scss';
import logo from "../../../images/logo.png";
import rightArrowImg from "../../../images/navbar/right-arrow.png";
import searchImg from "../../../images/navbar/search.png";
import {Divider, IconButton} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FeedIcon from '@mui/icons-material/Feed';
import LogoutIcon from '@mui/icons-material/Logout';

type PropsType = {
    setClose?: () => void
}

const OpenSideBar: React.FC<PropsType> = ({setClose}) => {

    return (
        <nav className={classes.sidebar}>
            <section>
                <header>
                    <div className={classes.sidebar__imgText}>
                    <span className={classes.sidebar__image}>
                        <img src={logo}/>
                    </span>
                        <div className={classes.sidebar__headerText}>
                            <span className={classes.sidebar__name}>Maks </span>
                            <span className={classes.sidebar__profession}>Developer</span>
                        </div>
                    </div>

                    <img onClick={setClose} className={classes.sidebar__rightArrow} src={rightArrowImg}/>
                </header>

                <div className={classes.sidebar__menuBar}>
                    <div className={classes.sidebar__menu}>
                        <li className={classes.sidebar__searchBox}>
                            <img className={classes.sidebar__search} src={searchImg}/>
                            <input type='search' placeholder='Search...'/>
                        </li>
                        <ul>
                            <li>
                                <a>
                                    <IconButton className={classes.sidebar__boxIcon}>
                                        <HomeIcon sx={{
                                            color: '#695CFE',
                                            ":hover": {
                                                color: "white",
                                                border: 'none'
                                            }
                                        }}></HomeIcon>
                                    </IconButton>
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <IconButton className={classes.sidebar__boxIcon}>
                                        <MailIcon sx={{
                                            color: '#695CFE',
                                            ":hover": {
                                                color: "white",
                                                border: 'none'
                                            }
                                        }}></MailIcon>
                                    </IconButton>
                                    <span>Messages</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <IconButton className={classes.sidebar__boxIcon}>
                                        <GroupsIcon sx={{
                                            color: '#695CFE',
                                            ":hover": {
                                                color: "white",
                                                border: 'none'
                                            }
                                        }}></GroupsIcon>
                                    </IconButton>
                                    <span>People</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <IconButton className={classes.sidebar__boxIcon}>
                                        <FavoriteIcon sx={{
                                            color: '#695CFE',
                                            ":hover": {
                                                color: "white",
                                                border: 'none'
                                            }
                                        }}></FavoriteIcon>
                                    </IconButton>
                                    <span>Likes</span>
                                </a>
                            </li>
                            <li style={{marginBottom: "10%"}}>
                                <a>
                                    <IconButton className={classes.sidebar__boxIcon}>
                                        <FeedIcon sx={{
                                            color: '#695CFE',
                                            ":hover": {
                                                color: "white",
                                                border: 'none'
                                            }
                                        }}></FeedIcon>
                                    </IconButton>
                                    <span>News</span>
                                </a>
                            </li>

                            <Divider/>

                            <div className={classes.sidebar__bottomContent}>
                                <li className={classes.sidebar__notifications}>
                                    <a>
                                        <IconButton className={classes.sidebar__boxIcon}>
                                            <NotificationsIcon sx={{
                                                color: '#695CFE',
                                                ":hover": {
                                                    color: "white",
                                                    border: 'none'
                                                }
                                            }}></NotificationsIcon>
                                        </IconButton>
                                        <span>Notifications</span>
                                    </a>
                                </li>
                                <li className={classes.sidebar__news}>
                                    <a>
                                        <IconButton className={classes.sidebar__boxIcon}>
                                            <LogoutIcon sx={{
                                                color: '#695CFE',
                                                ":hover": {
                                                    color: "white",
                                                    border: 'none'
                                                }
                                            }}></LogoutIcon>
                                        </IconButton>
                                        <span>Logout</span>
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>
        </nav>
    );
};

export default OpenSideBar;