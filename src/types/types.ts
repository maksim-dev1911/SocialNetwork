export type PhotosType = {
    small: string | undefined
    large: string | undefined
}

export type ProfileType = {
    userId?: number
    fullName?: string
    photos?: PhotosType
}