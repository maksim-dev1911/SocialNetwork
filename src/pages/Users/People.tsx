import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {follow, followed, getUsers, unfollow} from "../../store/people/people.thunks";
import {
    getCurrentPage, getIsFetchingSelector,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../store/people/people.selectors";
import Users from "../../components/Users/Users";
import Preloader from "../../components/Common/Preloader/Preloader";

const People = () => {
    const users = useAppSelector(getUsersSelector)
    const currentPage = useAppSelector(getCurrentPage)
    const pageSize = useAppSelector(getPageSize)
    const totalUsersCount = useAppSelector(getTotalUsersCount)
    const isFetching = useAppSelector(getIsFetchingSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        onPageChanged(currentPage)
    }, [currentPage])

    const handleFollow = (id: number) => {
        dispatch(follow(id))
    }

    const handleUnfollow = (id: number) => {
        dispatch(unfollow(id))
    }

    const onPageChanged = (currentPage: number) => {
        dispatch(getUsers({currentPage, pageSize}))
    }

    const handlePageChanged = (_: any, page: number) => {
        onPageChanged(page);
    }

    if (isFetching) {
        return <Preloader sx={{alignItems: 'center', position:'absolute', top:'50%', left:0, right: 0}}/>
    }

    return (
        <div>
            <Users
                pageChanged={handlePageChanged}
                currentPage={currentPage}
                pageSize={pageSize}
                users={users}
                totalUsersCount={totalUsersCount}
                follow={handleFollow}
                unfollow={handleUnfollow}
            />
        </div>
    );
};

export default React.memo(People);