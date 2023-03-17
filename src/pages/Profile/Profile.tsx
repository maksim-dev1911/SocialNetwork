import React, {useCallback, useEffect, useState} from 'react';
import UserProfile from "../../components/Profile/UserProfile/UserProfile";
import Box from "@mui/material/Box";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {
    followingInProgressSelector,
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
    getUserFriendsSelector, isFetchingSelector,
    userProfileSelector
} from "../../store/profile/profile.selectors";
import {getUserFriends, getUserProfile, savePhoto, unfollow} from "../../store/profile/profile.thunks";
import {useParams} from "react-router-dom";
import Preloader from "../../components/Common/Preloader/Preloader";
import {Theme, useMediaQuery} from "@mui/material";
import Tabs from "../../components/Common/Tabs/Tabs";
import Friends from "../../components/Profile/Friends/Friends";
import Divider from "@mui/material/Divider";

type TabsType = 'timeline' | 'friends';

const tabs = [
    {
        label: 'Timeline',
        value: 'timeline',
    },
    {
        label: 'Friends',
        value: 'friends',
    },
];

const Profile = () => {
    const profile = useAppSelector(userProfileSelector)
    const userFriends = useAppSelector(getUserFriendsSelector)
    const isFetching = useAppSelector(isFetchingSelector)
    const currentPage = useAppSelector(getCurrentPage)
    const pageSize = useAppSelector(getPageSize)
    const totalUsersCount = useAppSelector(getTotalUsersCount)
    const followingInProgress = useAppSelector(followingInProgressSelector)

    const [tab, setTab] = useState<TabsType>('timeline');

    const dispatch = useAppDispatch();
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

    let {userId} = useParams()
    if (!userId) {
        userId = '22912'
    }

    useEffect(() => {
        dispatch(getUserProfile(userId))
        onPageChanged(currentPage)
    }, [userId, dispatch, currentPage])

    const onPageChanged = (currentPage: number) => {
        dispatch(getUserFriends({currentPage, pageSize}))
    }

    const handlePageChanged = (_: any, page: number) => {
        onPageChanged(page);
    }

    const handleTabChange = useCallback((value: string | number) => {
        setTab(value as TabsType);
    }, []);

    const handleUnfollow = (id: number) => {
        dispatch(unfollow(id))
    }

    const renderTabs = () => (
        <Tabs
            indicatorColor="primary"
            textColor="primary"
            tabs={tabs}
            value={tab}
            onChange={handleTabChange}
        />
    )

    if (!profile) {
        return <Preloader sx={{alignItems: 'center', position: 'absolute', top: '50%', left: 0, right: 0}}/>
    }

    return (
        <Box>
            <UserProfile isMobile={isMobile} profile={profile}/>
            <Divider sx={{borderStyle: "dashed"}}/>
            <Box sx={{backgroundColor: '#fff', borderRadius: '0px 0px 12px 12px'}}>
                {renderTabs()}
                {tab === 'timeline' && (
                    <div>das</div>
                )}
                {tab === 'friends' && (
                    <Friends followingInProgress={followingInProgress} pageSize={pageSize} currentPage={currentPage}
                             totalUsersCount={totalUsersCount} pageChanged={handlePageChanged} isFetching={isFetching}
                             unfollow={handleUnfollow} userFriends={userFriends}/>
                )}
            </Box>
        </Box>
    );
};

export default React.memo(Profile);