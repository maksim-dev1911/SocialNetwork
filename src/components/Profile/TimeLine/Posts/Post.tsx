import React, { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { PostFormDataType, PostType } from './Posts';
import { CommentType, EditModeType, PostCommentFormData } from '../../../../types/types';
import Comments from '../Comments/Comments';
import { EditPostModal } from './EditPostModal';
import { FormApi } from 'final-form';
import PostLayout from './PostLayout';
import sx from '../TimeLine.style';

type PropsType = {
  post: PostType;
  onCommentCreate: (postId: number, data: PostCommentFormData) => void;
  comments: Record<number, CommentType[]>;
  toggleLike: (postId: number) => void;
  updateComment: (text: string, postId: number, commentId: number) => void;
  deletePost: (postId: number) => void;
  deleteComment: (postId: number, commentId: number) => void;
  setEditCommentMode: Dispatch<SetStateAction<EditModeType>>;
  editCommentMode: EditModeType;
  updatePost: (postId: number, text: string, photo: File | null, removePhoto: boolean) => void;
};

const Post: React.FC<PropsType> = ({
  post,
  onCommentCreate,
  comments,
  toggleLike,
  updateComment,
  deletePost,
  deleteComment,
  setEditCommentMode,
  editCommentMode,
  updatePost,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editPostMode, setEditPostMode] = useState<EditModeType>({
    editMode: false,
    id: 0,
  });
  const [newText, setNewText] = useState(post.text);
  const [newPhoto, setNewPhoto] = useState<File | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<FormApi<PostFormDataType> | null>(null);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  if (editPostMode.editMode) {
    return (
      <EditPostModal
        onClose={setEditPostMode}
        newText={newText}
        open={editPostMode.editMode}
        onChange={setNewText}
        updatePost={updatePost}
        post={post}
        newPhoto={newPhoto}
        setNewPhoto={setNewPhoto}
        formRef={formRef}
        photoInputRef={photoInputRef}
        commentsCount={comments[post.id]?.length || 0}
      />
    );
  }

  return (
    <Box mt={2} sx={sx.postWrapper}>
      <PostLayout
        post={post}
        setEditPostMode={setEditPostMode}
        deletePost={deletePost}
        toggleIsOpen={toggleIsOpen}
        toggleLike={toggleLike}
        comments={comments}
      />
      <Comments
        postId={post.id}
        onCommentCreate={onCommentCreate}
        isOpen={isOpen}
        comments={comments}
        updateComment={updateComment}
        deleteComment={deleteComment}
        editCommentMode={editCommentMode}
        setEditCommentMode={setEditCommentMode}
      />
    </Box>
  );
};

export default React.memo(Post);
