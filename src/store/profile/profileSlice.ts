import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentType, PhotosType, ProfileType, UserType } from '../../types/types';
import { PostFormDataType, PostType } from '../../components/Profile/TimeLine/Posts/Posts';
import { DataUpdatedPost } from './profile.thunks';

type initialStateType = {
  profile: ProfileType | null;
  userPhoto: PhotosType | null;
  userFriends: Array<UserType>;
  currentPage: number;
  pageSize: number;
  totalUsersCount: number;
  followingInProgress: Array<number>;
  isFetching: boolean;
  posts: PostType[];
  comments: Record<number, CommentType[]>;
};

const initialState: initialStateType = {
  profile: null,
  userPhoto: null,
  userFriends: [],
  currentPage: 1,
  pageSize: 12,
  totalUsersCount: 0,
  followingInProgress: [],
  isFetching: false,
  posts: [],
  comments: [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<ProfileType>) => {
      state.profile = action.payload;
    },
    setPhoto: (state, action) => {
      state.userPhoto = action.payload;
    },
    setUserFriends: (state, action: PayloadAction<Array<UserType>>) => {
      state.userFriends = action.payload;
    },
    updateUsers: (state, action: PayloadAction<number>) => {
      state.userFriends = state.userFriends.filter((friend) => friend.id !== action.payload);
      state.totalUsersCount = state.totalUsersCount - 1;
      if (Math.ceil(state.totalUsersCount / state.pageSize) < state.currentPage) {
        state.currentPage = Math.ceil(state.totalUsersCount / state.pageSize);
      }
    },
    toggleFollowingInProgress: (
      state,
      { payload }: PayloadAction<{ isFetching: boolean; userId: number }>
    ) => {
      if (payload.isFetching) {
        state.followingInProgress.push(payload.userId);
      } else {
        state.followingInProgress = state.followingInProgress.filter((id) => id !== payload.userId);
      }
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalUsersCount: (state, action: PayloadAction<number>) => {
      state.totalUsersCount = action.payload;
    },
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    setNewPostComment: (state, action: PayloadAction<{ postId: number; comment: CommentType }>) => {
      if (state.comments[action.payload.postId]) {
        state.comments[action.payload.postId].push(action.payload.comment);
      } else {
        state.comments[action.payload.postId] = [action.payload.comment];
      }
    },
    setAllComments: (state, action: PayloadAction<Record<number, CommentType[]>>) => {
      state.comments = action.payload;
    },
    toggleLike: (state, action: PayloadAction<number>) => {
      const post = state.posts.find((post) => post.id === action.payload);

      if (!post) return;

      if (post.isLiked) {
        post.isLiked = false;
        post.likedCount--;
      } else {
        post.isLiked = true;
        post.likedCount++;
      }
    },
    setPosts: (state, action: PayloadAction<Array<PostType>>) => {
      state.posts = action.payload;
    },
    deletePostComment: (state, action: PayloadAction<{ postId: number; commentId: number }>) => {
      const { postId, commentId } = action.payload;

      state.comments[postId] = state.comments[postId].filter((comment) => comment.id !== commentId);

      if (state.comments[postId].length === 0) {
        delete state.comments[postId];
      }
    },
    setUpdateComment: (
      state,
      action: PayloadAction<{ text: string; postId: number; commentId: number }>
    ) => {
      const { postId, commentId, text } = action.payload;

      const comment = state.comments[postId].find((comment) => comment.id === commentId);

      if (comment) {
        comment.text = text;
      }
    },
    setUpdatePost: (state, action: PayloadAction<DataUpdatedPost>) => {
      const { postId, text, photo } = action.payload;

      const post = state.posts.find((post) => post.id === postId);

      if (post) {
        if (text) {
          post.text = text;
        }
        if ('photo' in action.payload) {
          post.photo = photo;
        }
      }
    },
  },
});

export const {
  setUserProfile,
  setPhoto,
  setUserFriends,
  updateUsers,
  toggleFollowingInProgress,
  setTotalUsersCount,
  setCurrentPage,
  setIsFetching,
  setNewPostComment,
  setAllComments,
  toggleLike,
  setPosts,
  deletePostComment,
  setUpdateComment,
  setUpdatePost,
} = profileSlice.actions;

export default profileSlice.reducer;
