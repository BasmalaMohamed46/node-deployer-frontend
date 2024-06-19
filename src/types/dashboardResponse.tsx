import {Repo} from './Repo.tsx'
import {User} from './User.tsx'

export interface DashboardResponse{
    repos: Repo[],
    provider: string | null, 
    user: User,

}