export interface UserCardProps{
    userName : string;
    isAdmin : boolean;
    status: 'active' | 'inactive'
    onStatusToggle: (username:string)=>void
}