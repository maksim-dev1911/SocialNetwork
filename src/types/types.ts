export type PhotosType = {
    small: string | undefined
    large: string | undefined
}

export type ProfileType = {
    userId?: number
    fullName?: string
    photos?: PhotosType
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