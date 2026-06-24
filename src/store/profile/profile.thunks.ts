import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api';
import {
  toggleFollowingInProgress,
  setCurrentPage,
  setPhoto,
  setTotalUsersCount,
  setUserFriends,
  setUserProfile,
  updateUsers,
  setIsFetching,
  setNewPostComment,
  setPosts,
  setAllComments,
  deletePostComment,
  setUpdateComment,
  setUpdatePost,
  // deletePostComment,
} from './profileSlice';
import { PostFormDataType, PostType } from '../../components/Profile/TimeLine/Posts/Posts';
import { RootState } from '../index';
import { CommentType, PostCommentFormData } from '../../types/types';
import * as postsStorage from '../../storage/posts';
import { commentsSelector, postsSelector } from './profile.selectors';
import { savePosts } from '../../storage/posts';

export const getUserProfile = createAsyncThunk(
  'profile/userId',
  async (userId: string | undefined, { dispatch }) => {
    const response = await api.get('profile/' + userId);
    dispatch(setUserProfile(response.data));
  }
);

export const savePhoto = createAsyncThunk('savePhoto', async (file: any, { dispatch }) => {
  const formData = new FormData();
  formData.append('image', file);
  const response = await api.put('profile/photo', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  if (response.data.resultCode === 0) {
    dispatch(setPhoto(response.data));
  }
});

export const unfollow = createAsyncThunk(
  'unfollow',
  async (userId: number | undefined, { dispatch }) => {
    if (userId) {
      dispatch(toggleFollowingInProgress({ isFetching: true, userId }));
      await api.delete(`follow/${userId}`);
      dispatch(updateUsers(userId));
      dispatch(toggleFollowingInProgress({ isFetching: false, userId }));
    }
  }
);

export const getUserFriends = createAsyncThunk(
  'userFriends',
  async ({ pageSize, currentPage }: any, { dispatch }) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    const response = await api.get(`users?page=${currentPage}&count=${pageSize}&friend=true`);
    dispatch(setUserFriends(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
    dispatch(setIsFetching(false));
  }
);

export const createPost = createAsyncThunk<void, PostFormDataType>(
  'posts/createPost',
  async (postData, { dispatch, getState }) => {
    const state = getState() as RootState;
    const creatorFullName = state.profile.profile?.fullName;
    const creatorAvatar = state.profile.profile?.photos?.large;
    const posts = postsSelector(state);

    const { text, photo } = postData;

    if (!creatorFullName) {
      throw new Error('Creator is not defined');
    }

    const newPostData = (reader?: FileReader) => {
      const newPost: PostType = {
        creatorFullName,
        creatorAvatar,
        text,
        photo: reader?.result as string,
        id: Date.now(),
        createdAt: Date.now(),
        isLiked: false,
        likedCount: 0,
      };

      const newPosts = [newPost, ...posts];

      postsStorage.savePosts(newPosts);

      dispatch(setPosts(newPosts));
    };

    if (photo) {
      const reader = new FileReader();

      reader.onload = () => {
        newPostData(reader);
      };

      reader.readAsDataURL(photo);
    } else {
      newPostData();
    }
  }
);

export const deletePost = createAsyncThunk<void, number>(
  'posts/deletePost',
  async (postId, { getState, dispatch }) => {
    const state = getState() as RootState;
    const posts = postsSelector(state);
    const comments = commentsSelector(state);

    const updatedPosts = posts.filter((post) => post.id !== postId);

    const updatedComments = { ...comments };
    delete updatedComments[postId];

    postsStorage.savePosts(updatedPosts);
    postsStorage.savePostComments(updatedComments);

    dispatch(setPosts(updatedPosts));
    dispatch(setAllComments(updatedComments));
  }
);

type CreateCommentPayload = {
  postId: number;
  formData: PostCommentFormData;
};

export const getPostsThunk = createAsyncThunk<PostType[]>(
  'posts/getPosts',
  async (_, { dispatch }) => {
    const posts: PostType[] = postsStorage.getPosts();

    dispatch(setPosts(posts));

    return posts;
  }
);

export const createComment = createAsyncThunk<void, CreateCommentPayload>(
  'posts/createComment',
  async (commentData, { dispatch, getState }) => {
    const state = getState() as RootState;
    const comments = commentsSelector(state);

    const {
      postId,
      formData: { text },
    } = commentData;
    const post = state.profile.posts.find((p) => p.id === postId);
    const user = state.profile.profile;

    if (!user) {
      throw new Error('Creator is not defined');
    }

    if (!post) {
      throw new Error('Post is not defined');
    }

    const comment: CommentType = {
      text,
      creatorAvatar: user.photos?.large,
      creatorFullName: user.fullName,
      createdAt: Date.now(),
      id: Date.now(),
    };

    const newComments = { ...comments, [postId]: [...(comments[postId] ?? []), comment] };

    postsStorage.savePostComments(newComments);

    dispatch(setNewPostComment({ postId, comment }));
  }
);

export const getComments = createAsyncThunk('posts/getComments', async (_, { dispatch }) => {
  const comments = postsStorage.getPostComments();

  dispatch(setAllComments(comments));
});

export const deleteComment = createAsyncThunk<void, { postId: number; commentId: number }>(
  'posts/deleteComment',
  async ({ postId, commentId }, { dispatch, getState }) => {
    const state = getState() as RootState;
    const comments = commentsSelector(state);

    const updateComments = {
      ...comments,
      [postId]: comments[postId].filter((comment) => comment.id !== commentId),
    };

    dispatch(deletePostComment({ postId, commentId }));

    postsStorage.savePostComments(updateComments);
  }
);

export const updateCommentThunk = createAsyncThunk<
  void,
  { text: string; postId: number; commentId: number }
>('posts/editComment', async ({ postId, commentId, text }, { dispatch, getState }) => {
  const state = getState() as RootState;
  const comments = commentsSelector(state);

  const postComments = comments[postId].map((comment) => {
    if (comment.id === commentId) {
      return { ...comment, text };
    }

    return comment;
  });

  const updatedComments = { ...comments, [postId]: postComments };

  dispatch(setUpdateComment({ text, postId, commentId }));

  postsStorage.savePostComments(updatedComments);
});

export type DataUpdatedPost = {
  text?: string;
  photo?: string | null;
  postId: number;
};

export const updatePostThunk = createAsyncThunk<
  void,
  { text: string; photo: File | null; postId: number; removePhoto: boolean }
>('posts/updatePost', async ({ text, photo, postId, removePhoto }, { dispatch, getState }) => {
  const updatedPost = (reader?: FileReader) => {
    const state = getState() as RootState;
    const posts = postsSelector(state);

    const dataUpdatedPost: DataUpdatedPost = {
      postId: postId,
    };

    if (text) {
      dataUpdatedPost.text = text;
    }

    if (removePhoto) {
      dataUpdatedPost.photo = null;
    } else if (reader?.result) {
      dataUpdatedPost.photo = reader.result as string;
    }

    const updatedPosts = posts.map((post) => {
      if (post.id !== postId) return post;

      return {
        ...post,
        ...(dataUpdatedPost.text !== undefined ? { text: dataUpdatedPost.text } : {}),
        ...(dataUpdatedPost.photo !== undefined ? { photo: dataUpdatedPost.photo } : {}),
      };
    });

    dispatch(setUpdatePost(dataUpdatedPost));

    postsStorage.savePosts(updatedPosts);
  };

  if (photo) {
    const reader = new FileReader();

    reader.onload = () => {
      updatedPost(reader);
    };

    reader.readAsDataURL(photo);
  } else {
    updatedPost();
  }
});
