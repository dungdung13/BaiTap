export interface User {
    userId: number
    groupId: number
    loginName: string
    password: string
    fullName: string
    fullNameKana: string
    email: string
    tel: string
    birthday: string
    rule: number
    salt: string
}