import { PostType } from '../components/Profile/TimeLine/Posts/Posts';

export const savePosts = (posts: PostType[]) => {
  localStorage.setItem('posts', JSON.stringify(posts));
};

export const getPosts = () => {};

export const createPostComment = () => {};

export const getPostComments = () => {};
