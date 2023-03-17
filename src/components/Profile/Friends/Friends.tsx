import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import {UserType} from "../../../types/types";
import sx from "../../Users/User/User.style";
import {Grid, Pagination} from "@mui/material";
import Friend from "./Friend";
import Typography from "@mui/material/Typography";
import Preloader from "../../Common/Preloader/Preloader";

type PropsType = {
    userFriends: Array<UserType>
    unfollow: (id: number) => void
    isFetching: boolean
    currentPage: number
    pageChanged: (_: any, page: number) => void
    pageSize: number
    totalUsersCount: number
    followingInProgress: Array<number>
}

const Friends: React.FC<PropsType> = ({
                                          userFriends,
                                          unfollow,
                                          isFetching,
                                          totalUsersCount,
                                          pageChanged,
                                          currentPage,
                                          pageSize,
                                          followingInProgress
                                      }) => {

    if (!userFriends.length) {
        return <Typography sx={{textAlign: "center", fontSize: '20px', pb: 5, color: '#8C8C8C'}}>You don't have
            friends :(</Typography>
    }

    if (isFetching) {
        return <Preloader sx={{alignItems: 'center', position: 'absolute', top: '50%', left: 0, right: 0}}/>
    }

    return (
        <Box mt={2} sx={{position: 'container'}}>
            <Grid sx={sx.gridContainer} container>
                {userFriends.map((friend) => (
                    <Friend followingInProgress={followingInProgress} unfollow={unfollow}
                            user={friend}/>
                ))}
            </Grid>
            <Box display='flex' justifyContent='center'>
                <Pagination page={currentPage} onChange={pageChanged}
                            count={Math.ceil(totalUsersCount / pageSize)} size='large' variant="outlined"
                            defaultPage={1}
                            color="primary"/>
            </Box>
        </Box>
    );
};

export default React.memo(Friends);