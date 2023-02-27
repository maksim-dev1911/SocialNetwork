export type PhotosType = {
    small: string | undefined
    large: string | undefined
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId?: number
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos?: PhotosType
    contacts: ContactsType
}

export type IUser = {
    id: number
    email: string
    login: string
}

export type UserType = {
    name: string
    id: number
    photos: {
        small: string | null
        large: string | null
    }
    status: string
    followed: boolean
}