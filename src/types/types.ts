export type PhotosType = {
  small: string | undefined;
  large: string | undefined;
};

export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type ProfileType = {
  userId?: number;
  fullName: string;
  aboutMe: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  photos?: PhotosType;
  contacts: ContactsType;
};

export type IUser = {
  id: number;
  email: string;
  login: string;
};

export type UserType = {
  name: string;
  id: number;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string;
  followed: boolean;
};

export type UserMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

export type CommentType = {
  createdAt: number;
  commentText: string;
  creatorFullName: string;
  creatorAvatar?: string;
  id: number;
};

export type PostPayloadType = {
  creatorAvatar: string;
  creatorFullName: string;
  text: string;
  photoUrl: File;
  id: number;
};

export type PostCommentPayload = {
  creatorFullName: string;
  creatorAvatar: string;
  text: string;
  createdAt: string;
  id: number;
};

export type PostCommentFormData = {
  text: string;
};

export type EditModeType = {
  editMode: boolean;
  id?: number;
};

export type UpdateCommentPayloadType = {
  commentText: string;
  postId: number;
  commentId: number;
};

export type UpdatePostPayloadType = {
  postId: number;
  newText?: string | null;
  photo: File | null;
  removePhoto: boolean;
};
