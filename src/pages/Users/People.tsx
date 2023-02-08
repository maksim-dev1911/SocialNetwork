import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getUsers} from "../../store/people/people.thunks";
import {
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../store/people/people.selectors";
import Users from "../../components/Users/Users";

const People = () => {
    const users = useAppSelector(getUsersSelector)
    const currentPage = useAppSelector(getCurrentPage)
    const pageSize = useAppSelector(getPageSize)
    const totalUsersCount = useAppSelector(getTotalUsersCount)
    const dispatch = useAppDispatch()

    useEffect(() => {
        onPageChanged(currentPage)
    }, [currentPage])

    const onPageChanged = (currentPage: number) => {
        dispatch(getUsers({currentPage, pageSize}))
    }

    const handlePageChanged = (_: any, page: number) => {
        onPageChanged(page);
    }

    return (
        <div>
            <Users pageChanged={handlePageChanged} currentPage={currentPage} pageSize={pageSize} users={users}
                   totalUsersCount={totalUsersCount}/>
        </div>
    );
};

export default React.memo(People);