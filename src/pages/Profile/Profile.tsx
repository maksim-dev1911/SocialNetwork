import React, { useCallback, useEffect, useState } from 'react';
import UserProfile from '../../components/Profile/UserProfile/UserProfile';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  commentsSelector,
  followingInProgressSelector,
  getCurrentPage,
  getPageSize,
  getTotalUsersCount,
  getUserFriendsSelector,
  isFetchingSelector,
  postsSortedSelector,
  userProfileSelector,
} from '../../store/profile/profile.selectors';
import {
  createComment,
  createPost,
  deletePost,
  getUserFriends,
  getUserProfile,
  unfollow,
} from '../../store/profile/profile.thunks';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/Common/Preloader/Preloader';
import { Grid, Theme, useMediaQuery } from '@mui/material';
import Tabs from '../../components/Common/Tabs/Tabs';
import Friends from '../../components/Profile/Friends/Friends';
import TimeLine from '../../components/Profile/TimeLine/TimeLine';
import { PostFormDataType } from '../../components/Profile/TimeLine/Posts/Posts';
import { PostCommentFormData } from '../../types/types';
import About from '../../components/Profile/TimeLine/About/About';
import FriendsCard from '../../components/Profile/TimeLine/FriendsCard/FriendsCard';
import { toggleLike } from '../../store/profile/profileSlice';
import { currentUserSelector } from '../../store/auth/auth.selectors';

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
  const profile = useAppSelector(userProfileSelector);
  const userFriends = useAppSelector(getUserFriendsSelector);
  const isFetching = useAppSelector(isFetchingSelector);
  const currentPage = useAppSelector(getCurrentPage);
  const pageSize = useAppSelector(getPageSize);
  const totalUsersCount = useAppSelector(getTotalUsersCount);
  const followingInProgress = useAppSelector(followingInProgressSelector);
  const posts = useAppSelector(postsSortedSelector);
  const comments = useAppSelector(commentsSelector);
  const currentUser = useAppSelector(currentUserSelector);

  const [tab, setTab] = useState<TabsType>('timeline');

  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  let { userId } = useParams();
  if (!userId) {
    userId = '22912';
  }

  useEffect(() => {
    dispatch(getUserProfile(userId));
    onPageChanged(currentPage);
  }, [userId, dispatch, currentPage]);

  const onPageChanged = (currentPage: number) => {
    dispatch(getUserFriends({ currentPage, pageSize }));
  };

  const handleToggleLike = (postId: number) => {
    dispatch(toggleLike(postId));
  };

  const handleDeletePost = (postId: number) => {
    dispatch(deletePost(postId));
  };

  const handlePageChanged = (_: any, page: number) => {
    onPageChanged(page);
  };

  const handleTabChange = useCallback((value: string | number) => {
    setTab(value as TabsType);
  }, []);

  const handleUnfollow = useCallback((id: number) => {
    dispatch(unfollow(id));
  }, []);

  const handleSubmitCreatePost = useCallback(
    async (data: PostFormDataType) => {
      await dispatch(createPost(data));
    },
    [dispatch]
  );

  const handleSubmitCreateComment = useCallback(
    async (postId: number, data: PostCommentFormData) => {
      dispatch(createComment({ postId, formData: data }));
    },
    []
  );

  const onClickToTabFriends = () => {
    setTab('friends');
  };

  const renderTabs = () => (
    <Tabs
      indicatorColor="primary"
      textColor="primary"
      sx={{
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: 'rgba(226, 232, 240, 0.6)',
        boxShadow: '0px 12px 32px rgba(15, 23, 42, 0.06)',
      }}
      tabs={tabs}
      value={tab}
      onChange={handleTabChange}
    />
  );

  if (!profile) {
    return (
      <Preloader
        sx={{ alignItems: 'center', position: 'absolute', top: '50%', left: 0, right: 0 }}
      />
    );
  }

  return (
    <Box display="flex" justifyContent="space-beetwen">
      <Box width="100%">
        <UserProfile
          currentUser={currentUser}
          isMobile={isMobile}
          profile={profile}
          totalPostsCount={posts.length}
          totalFriendsCount={totalUsersCount}
        />
        <Box>{renderTabs()}</Box>
        <Box>
          {tab === 'timeline' && (
            <TimeLine
              posts={posts}
              toggleLike={handleToggleLike}
              handleSubmitCreatePost={handleSubmitCreatePost}
              handleSubmitCreateComment={handleSubmitCreateComment}
              profile={profile}
              isSm={isSm}
              comments={comments}
              deletePost={handleDeletePost}
            />
          )}
          {tab === 'friends' && (
            <Friends
              followingInProgress={followingInProgress}
              pageSize={pageSize}
              currentPage={currentPage}
              totalUsersCount={totalUsersCount}
              pageChanged={handlePageChanged}
              isFetching={isFetching}
              unfollow={handleUnfollow}
              userFriends={userFriends}
            />
          )}
        </Box>
      </Box>
      {!isSm && (
        <Grid item sm={4} md={5} width="500px">
          <About profile={profile} />
          <FriendsCard
            userFriends={userFriends}
            totalUsersCount={totalUsersCount}
            onClickToTabFriends={onClickToTabFriends}
          />
        </Grid>
      )}
    </Box>
  );
};

export default React.memo(Profile);
