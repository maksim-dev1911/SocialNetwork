import React from 'react';
import {UserType} from "../../types/types";
import User from "./User/User";
import {Grid, Pagination, Stack} from "@mui/material";
import sx from "./User/User.style";

type PropsType = {
    users: Array<UserType>
    currentPage: number
    pageChanged: (_: any, page: number) => void
    pageSize: number
    totalUsersCount: number
}

const Users: React.FC<PropsType> = ({users, pageSize, pageChanged, currentPage, totalUsersCount}) => {
    return (
        <>
            <Grid sx={sx.gridContainer} container>
                {users.map((user) => (
                    <User user={user}/>
                ))}
            </Grid>
            <Stack display='flex' alignItems='center' mt={2}>
                <Pagination page={currentPage} onChange={pageChanged}
                            count={Math.ceil(totalUsersCount / pageSize)} size='large' variant="outlined"
                            color="primary"/>
            </Stack>
        </>
    );
};

export default React.memo(Users);