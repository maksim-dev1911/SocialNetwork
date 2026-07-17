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
  deleteComment,
  deletePost,
  getComments,
  getPostsThunk,
  getUserFriends,
  getUserProfile,
  unfollow,
  updateCommentThunk,
  updatePostThunk,
} from '../../store/profile/profile.thunks';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/Common/Preloader/Preloader';
import { Theme, useMediaQuery } from '@mui/material';
import Tabs from '../../components/Common/Tabs/Tabs';
import Friends from '../../components/Profile/Friends/Friends';
import TimeLine from '../../components/Profile/TimeLine/TimeLine';
import { PostFormDataType } from '../../components/Profile/TimeLine/Posts/Posts';
import { EditModeType, UpdateCommentPayloadType, UpdatePostPayloadType } from '../../types/types';
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
  const [editCommentMode, setEditCommentMode] = useState<EditModeType>({
    editMode: false,
    id: 0,
  });

  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  let { userId } = useParams();
  if (!userId) {
    userId = '22912';
  }

  const onPageChanged = useCallback(
    (currentPage: number) => {
      dispatch(getUserFriends({ currentPage, pageSize }));
    },
    [dispatch, pageSize]
  );

  useEffect(() => {
    dispatch(getPostsThunk());
    dispatch(getComments());
    dispatch(getUserProfile(userId));
    onPageChanged(currentPage);
  }, [userId, dispatch, currentPage, onPageChanged]);

  const handleToggleLike = useCallback(
    (postId: number) => {
      dispatch(toggleLike(postId));
    },
    [dispatch]
  );

  const handlePageChanged = (_: any, page: number) => {
    onPageChanged(page);
  };

  const handleTabChange = useCallback((value: string | number) => {
    setTab(value as TabsType);
  }, []);

  const handleUnfollow = useCallback(
    (id: number) => {
      dispatch(unfollow(id));
    },
    [dispatch]
  );

  const handleSubmitCreatePost = useCallback(
    async (data: PostFormDataType) => {
      await dispatch(createPost(data));
    },
    [dispatch]
  );

  const updatePost = useCallback(
    async (data: UpdatePostPayloadType) => {
      dispatch(updatePostThunk(data));
    },
    [dispatch]
  );

  const handleDeletePost = useCallback(
    (postId: number) => {
      dispatch(deletePost(postId));
    },
    [dispatch]
  );

  const handleSubmitCreateComment = useCallback(
    async (postId: number, commentText: string) => {
      dispatch(createComment({ postId, commentText }));
    },
    [dispatch]
  );

  const updateComment = useCallback(
    (data: UpdateCommentPayloadType) => {
      dispatch(updateCommentThunk(data));
      setEditCommentMode({ editMode: false, id: data.commentId });
    },
    [dispatch]
  );

  const handleDeleteComment = useCallback(
    (postId: number, commentId: number) => {
      dispatch(deleteComment({ postId, commentId }));
    },
    [dispatch]
  );

  const onClickToTabFriends = () => {
    setTab('friends');
  };

  const renderTabs = () => (
    <Tabs
      indicatorColor="primary"
      textColor="primary"
      tabs={tabs}
      value={tab}
      onChange={handleTabChange}
    />
  );

  if (!profile) {
    return <Preloader />;
  }

  return (
    <Box display="flex" justifyContent="space-between" gap={{ xs: 0, md: 3 }} sx={{ minWidth: 0 }}>
      <Box width="100%" minWidth={0}>
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
              onPostCreate={handleSubmitCreatePost}
              onCommentCreate={handleSubmitCreateComment}
              profile={profile}
              isSm={isSm}
              comments={comments}
              updateComment={updateComment}
              editCommentMode={editCommentMode}
              setEditCommentMode={setEditCommentMode}
              deleteComment={handleDeleteComment}
              deletePost={handleDeletePost}
              updatePost={updatePost}
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
      {!isMobile && (
        <Box
          sx={{
            width: { md: 300, lg: 340 },
            flexShrink: 0,
            pt: 0.5,
          }}
        >
          <About profile={profile} />
          <FriendsCard
            userFriends={userFriends}
            totalUsersCount={totalUsersCount}
            onClickToTabFriends={onClickToTabFriends}
          />
        </Box>
      )}
    </Box>
  );
};

export default React.memo(Profile);
