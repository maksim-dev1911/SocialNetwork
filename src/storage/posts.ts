import { PostType } from '../components/Profile/TimeLine/Posts/Posts';
import { CommentType } from '../types/types';

export const savePosts = (posts: PostType[]) => {
  localStorage.setItem('posts', JSON.stringify(posts));
};

export const getPosts = () => {
  const posts: PostType[] = JSON.parse(localStorage.getItem('posts') || '[]');

  return posts;
};

export const savePostComments = (comments: Record<number, CommentType[]>) => {
  localStorage.setItem('comments', JSON.stringify(comments));
};

export const getPostComments = () => {
  const comments: CommentType = JSON.parse(localStorage.getItem('comments') || '{}');

  return comments;
};
