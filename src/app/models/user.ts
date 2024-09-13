export interface User {
    id: string;
    name: string;
    password: string;
    role: 'editor' | 'user'
}